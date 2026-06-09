import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const data = JSON.parse(readFileSync(join(root, 'data.json'), 'utf-8'))

const HINT_RE =
  /\{%\s*hint\s+style="(info|warning|danger|success)"\s*%\}([\s\S]*?)\{%\s*endhint\s*%\}/g
const TABS_RE = /\{%\s*tabs\s*%\}([\s\S]*?)\{%\s*endtabs\s*%\}/g
const TAB_RE = /\{%\s*tab\s+title="([^"]*)"\s*%\}([\s\S]*?)\{%\s*endtab\s*%\}/g
const ICON_RE = /<!--\s*docs-icon:\s*([^\s]+)\s*-->/
const LEADING_H1_RE = /^#\s+.+\n+/

const HINT_MAP = {
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  success: 'tip',
}

function extractIcon(content) {
  const match = content.match(ICON_RE)
  return match?.[1] ?? null
}

function stripLeadingH1(content) {
  return content.replace(LEADING_H1_RE, '')
}

function convertHints(content) {
  return content.replace(HINT_RE, (_, style, body) => {
    const type = HINT_MAP[style] ?? 'info'
    return `::: ${type}\n${body.trim()}\n:::`
  })
}

function convertTabs(content) {
  return content.replace(TABS_RE, (_, body) => {
    const tabs = [...body.matchAll(TAB_RE)].map((m) => ({
      title: m[1],
      content: m[2].trim(),
    }))
    if (!tabs.length) return body.trim()

    const lines = ['::: tabs']
    for (const tab of tabs) {
      lines.push(`@tab ${tab.title}`, tab.content)
    }
    lines.push(':::')
    return lines.join('\n\n')
  })
}

function convertLinks(content, locale) {
  const prefix = locale === 'zh' ? '' : '/en'

  let result = content.replace(
    /<support@neorouter\.ai>/g,
    '[support@neorouter.ai](mailto:support@neorouter.ai)',
  )

  for (const doc of data) {
    result = result.replaceAll(`(/#/docs?key=${doc.key})`, `(${prefix}/${doc.key})`)
  }

  return result
    .replace(/\(\/#\/models\)/g, '(https://neorouter.ai/#/models)')
    .replace(/\(\/#\/console\/([^)]+)\)/g, '(https://neorouter.ai/#/console/$1)')
    .replace(/\(\/#\/privacy\)/g, '(https://neorouter.ai/#/privacy)')
}

function normalizeBody(raw) {
  return stripLeadingH1(raw.replace(ICON_RE, '').trim())
}

function convertContent(raw, locale) {
  return convertLinks(convertTabs(convertHints(normalizeBody(raw))), locale)
}

function serializeFrontmatter(frontmatter) {
  const lines = []
  for (const [key, value] of Object.entries(frontmatter)) {
    if (value == null || value === '') continue
    if (key === 'translations') {
      lines.push('translations:')
      for (const [lang, path] of Object.entries(value)) {
        lines.push(`  ${lang}: ${path}`)
      }
      continue
    }
    lines.push(`${key}: ${JSON.stringify(value)}`)
  }
  return lines.join('\n')
}

function writePage(filePath, frontmatter, body, locale) {
  mkdirSync(dirname(filePath), { recursive: true })
  const fm = serializeFrontmatter(frontmatter)
  writeFileSync(
    filePath,
    `---\n${fm}\n---\n\n${convertContent(body, locale)}\n`,
  )
}

function buildSidebarGen() {
  const zhItems = data.map((doc) => ({
    text: doc.title,
    link: `/${doc.key}`,
  }))
  const enItems = data.map((doc) => ({
    text: doc.title_en,
    link: `/en/${doc.key}`,
  }))

  const first = data[0]
  const zhNav = [
    { text: first.title, link: `/${first.key}` },
    { text: '控制台', link: 'https://neorouter.ai' },
  ]
  const enNav = [
    { text: first.title_en, link: `/en/${first.key}` },
    { text: 'Console', link: 'https://neorouter.ai' },
  ]

  const content = `// 由 scripts/sync-docs.mjs 根据 data.json 自动生成，请勿手动编辑
import type { DefaultTheme } from 'vitepress'

export const zhSidebar: DefaultTheme.SidebarItem[] = ${JSON.stringify(zhItems, null, 2)}

export const enSidebar: DefaultTheme.SidebarItem[] = ${JSON.stringify(enItems, null, 2)}

export const zhNav: DefaultTheme.NavItem[] = ${JSON.stringify(zhNav, null, 2)}

export const enNav: DefaultTheme.NavItem[] = ${JSON.stringify(enNav, null, 2)}

export const docMeta = ${JSON.stringify(
    data.map((doc) => ({
      key: doc.key,
      title: doc.title,
      title_en: doc.title_en,
      id: doc.id,
    })),
    null,
    2,
  )} as const
`

  writeFileSync(join(root, '.vitepress', 'sidebar.gen.ts'), content)
}

function buildHomePage(locale) {
  const isZh = locale === 'zh'
  const prefix = isZh ? '' : '/en'
  const first = data[0]
  const features = data.slice(0, 3).map((doc) => ({
    title: isZh ? doc.title : doc.title_en,
    details: isZh
      ? `查看 ${doc.title} 详细说明`
      : `Read the ${doc.title_en} documentation`,
  }))

  const featureYaml = features
    .map(
      (f) => `  - title: ${JSON.stringify(f.title)}
    details: ${JSON.stringify(f.details)}`,
    )
    .join('\n')

  const translations = isZh
    ? '  en: /en/'
    : '  root: /'

  return `---
layout: home
title: ${isZh ? 'NeoRouter.AI 文档' : 'NeoRouter.AI Docs'}
titleTemplate: ${isZh ? '企业级 AI 模型聚合网关' : 'Enterprise AI Model Gateway'}
translations:
${translations}

hero:
  name: NeoRouter.AI
  text: ${isZh ? '开发者文档' : 'Developer Docs'}
  tagline: ${isZh ? '企业级 AI 模型聚合网关，覆盖 Claude 与 Codex 系列，提供官方原生接入与统一治理能力。' : 'Enterprise AI model gateway with native Claude and Codex access, unified governance, and transparent billing.'}
  actions:
    - theme: brand
      text: ${isZh ? first.title : first.title_en}
      link: ${prefix}/${first.key}
    - theme: alt
      text: ${isZh ? '控制台' : 'Console'}
      link: https://neorouter.ai

features:
${featureYaml}
---
`
}

mkdirSync(join(root, 'en'), { recursive: true })
mkdirSync(join(root, '.vitepress'), { recursive: true })

buildSidebarGen()
writeFileSync(join(root, 'index.md'), buildHomePage('zh'))
writeFileSync(join(root, 'en', 'index.md'), buildHomePage('en'))

for (const doc of data) {
  const icon = extractIcon(doc.content_zh)
  const zhFm = {
    title: doc.title,
    translations: { en: `/en/${doc.key}` },
    ...(icon ? { icon } : {}),
  }
  const enFm = {
    title: doc.title_en,
    translations: { root: `/${doc.key}` },
    ...(icon ? { icon } : {}),
  }

  writePage(join(root, `${doc.key}.md`), zhFm, doc.content_zh, 'zh')
  writePage(join(root, 'en', `${doc.key}.md`), enFm, doc.content_en, 'en')
}

console.log(`✓ 已同步 ${data.length} 篇文档（中/英）`)
console.log('✓ 已生成 .vitepress/sidebar.gen.ts')
