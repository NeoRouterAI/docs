import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { enNav, enSidebar, zhNav, zhSidebar } from './sidebar.gen'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  title: 'NeoRouter.AI',
  description: 'NeoRouter.AI official developer documentation — Enterprise AI Model Gateway',
  base,
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'NeoRouter.AI',
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/NeoRouterAI/docs' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search documentation',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close',
                },
              },
            },
          },
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '未找到结果',
                resetButtonTitle: '清除搜索条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'NeoRouter.AI Docs',
      description: 'NeoRouter.AI official developer documentation — Enterprise AI Model Gateway',
      themeConfig: {
        nav: enNav,
        sidebar: enSidebar,
        langMenuLabel: 'Change language',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchLabel: 'Appearance',
        docFooter: { prev: 'Previous', next: 'Next' },
        outline: { label: 'On this page' },
        notFound: {
          title: 'Page Not Found',
          quote: 'The page you are looking for does not exist or has been moved.',
          linkLabel: 'Go home',
          linkText: 'Take me home',
        },
        footer: {
          message: 'NeoRouter.AI — Enterprise AI Model Gateway',
          copyright: 'Copyright © NeoRouter.AI',
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'NeoRouter.AI 文档',
      description: 'NeoRouter.AI 官方开发者文档 — 企业级 AI 模型聚合网关',
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        langMenuLabel: '切换语言',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '深色模式',
        lightModeSwitchLabel: '浅色模式',
        docFooter: { prev: '上一页', next: '下一页' },
        outline: { label: '本页目录' },
        notFound: {
          title: '页面未找到',
          quote: '你访问的页面不存在或已被移动。',
          linkLabel: '返回首页',
          linkText: '带我回首页',
        },
        footer: {
          message: 'NeoRouter.AI — 企业级 AI 模型聚合网关',
          copyright: 'Copyright © NeoRouter.AI',
        },
      },
    },
  },

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
})
