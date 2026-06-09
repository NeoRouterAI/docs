<template>
  <section class="home-solution">
    <div class="section-inner">
      <div class="section-header">
        <div class="tag-row">
          <span class="section-tag">{{ t.tag }}</span>
          <span class="tag-sub">{{ t.tagSub }}</span>
        </div>
        <h2 class="big-title">{{ t.title }}</h2>
        <p class="section-desc">{{ t.desc }}</p>
      </div>
      <div class="architecture">
        <div class="arch-models">
          <div v-for="m in models" :key="m.name" class="model-chip">
            <span class="model-dot" :style="{ background: m.color }"></span>
            <span>{{ m.name }}</span>
          </div>
        </div>
        <div class="arch-lines-left">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 120 280">
            <line v-for="(_, i) in 5" :key="i" x1="0" :y1="28 + i * 62" x2="80" y2="140" stroke="var(--neo-border)" stroke-width="1"/>
            <line x1="80" y1="140" x2="120" y2="140" stroke="var(--neo-border)" stroke-width="1"/>
          </svg>
        </div>
        <div class="arch-gateway">
          <strong>NeoRouter.AI</strong>
          <span>Gateway</span>
        </div>
        <div class="arch-line-right"></div>
        <div class="arch-app">
          <strong>{{ t.apps[0] }}</strong>
          <span>{{ t.apps[1] }} · {{ t.apps[2] }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
const models = [
  { name: 'Claude Opus 4.8', color: '#f97316' },
  { name: 'Claude Sonnet 4.6', color: '#f97316' },
  { name: 'Claude Haiku 4.5', color: '#f97316' },
  { name: 'OpenAI GPT 5.5', color: '#f97316' },
  { name: 'OpenAI Codex', color: '#10b981' },
]
</script>

<style scoped>
.home-solution { padding: 100px 64px; background: var(--neo-bg); border-top: 1px solid var(--neo-border); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 64px; }
.tag-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-tag { font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #1a6bf0; }
.tag-sub { font-size: 14px; color: var(--neo-text-2); }
.big-title { font-size: clamp(32px, 4vw, 48px); font-weight: 900; color: var(--neo-text-1); line-height: 1.25; margin-bottom: 12px; }
.section-desc { font-size: 16px; color: var(--neo-text-2); }
.architecture { display: flex; align-items: center; gap: 0; padding: 20px 0; }
.arch-models { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
.model-chip { display: flex; align-items: center; gap: 10px; padding: 12px 20px; border-radius: 8px; border: 1px solid var(--neo-border); background: var(--neo-bg); font-size: 14px; font-weight: 500; color: var(--neo-text-1); transition: all 0.2s; }
.model-chip:hover { border-color: var(--neo-accent-border-hover); transform: translateX(-2px); }
.model-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.arch-lines-left { width: 120px; height: 280px; flex-shrink: 0; }
.arch-gateway { padding: 40px 48px; border-radius: 16px; background: linear-gradient(135deg, #3b5ef5, #5040f0); text-align: center; flex-shrink: 0; box-shadow: 0 12px 40px rgba(59, 94, 245, 0.25); transition: transform 0.2s; }
.arch-gateway:hover { transform: scale(1.02); }
.arch-gateway strong { display: block; font-size: 20px; font-weight: 800; color: #fff; }
.arch-gateway span { display: block; margin-top: 6px; font-size: 14px; color: rgba(255, 255, 255, 0.7); }
.arch-line-right { width: 60px; height: 1px; background: var(--neo-border); flex-shrink: 0; }
.arch-app { padding: 28px 32px; border-radius: 12px; border: 1px solid var(--neo-border); background: var(--neo-bg); flex-shrink: 0; transition: all 0.2s; }
.arch-app:hover { border-color: var(--neo-accent-border-hover); }
.arch-app strong { display: block; font-size: 16px; font-weight: 700; color: var(--neo-text-1); }
.arch-app span { display: block; margin-top: 4px; font-size: 13px; color: var(--neo-text-2); }
@media (max-width: 900px) { .home-solution { padding: 64px 24px; } .architecture { flex-direction: column; gap: 24px; } .arch-lines-left { display: none; } .arch-line-right { width: 1px; height: 40px; } .big-title { font-size: 28px; } }
</style>
