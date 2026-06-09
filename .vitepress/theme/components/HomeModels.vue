<template>
  <section class="home-models">
    <div class="section-inner">
      <div class="section-header">
        <div class="tag-row">
          <span class="section-tag">{{ t.tag }}</span>
          <span class="tag-sub">{{ t.tagSub }}</span>
        </div>
        <h2 class="big-title">{{ t.title }}</h2>
      </div>
      <div class="models-grid">
        <div v-for="model in models" :key="model.name" class="model-card">
          <div class="card-top-bar" :style="{ background: model.barColor }"></div>
          <div class="card-body">
            <div class="model-provider"><span class="provider-dot" :style="{ background: model.dotColor }"></span><span>{{ model.provider }}</span></div>
            <h3>{{ model.name }}</h3>
            <p class="model-desc">{{ model.desc }}</p>
            <div class="model-specs">
              <div class="spec-row"><span class="spec-label">Input</span><span class="spec-value">Contact Sales</span></div>
              <div class="spec-row"><span class="spec-label">Output</span><span class="spec-value">Contact Sales</span></div>
              <div class="spec-row"><span class="spec-label">Context</span><span class="spec-value highlight">{{ model.context }}</span></div>
            </div>
          </div>
        </div>
      </div>
      <p class="models-note">{{ t.note }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
const models = [
  { provider: 'Anthropic', name: 'Claude Opus 4.8', desc: 'Flagship reasoning model for complex tasks and Agent workflows.', context: '1M', barColor: '#f97316', dotColor: '#f97316' },
  { provider: 'Anthropic', name: 'Claude Sonnet 4.6', desc: 'Quality meets value — ideal for production high-frequency calls.', context: '200K', barColor: '#f97316', dotColor: '#f97316' },
  { provider: 'Anthropic', name: 'Claude Haiku 4.5', desc: 'Lightweight and fast for real-time scenarios and batch processing.', context: '200K', barColor: '#f97316', dotColor: '#f97316' },
  { provider: 'OpenAI', name: 'OpenAI Codex', desc: 'GPT-5.5 / 5.3 codex for code generation and AI programming.', context: '400K', barColor: '#10b981', dotColor: '#10b981' },
]
</script>

<style scoped>
.home-models { padding: 100px 64px; background: var(--neo-bg-alt); border-top: 1px solid var(--neo-border); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 48px; }
.tag-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-tag { font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #1a6bf0; }
.tag-sub { font-size: 14px; color: var(--neo-text-2); }
.big-title { font-size: clamp(32px, 4vw, 48px); font-weight: 900; color: var(--neo-text-1); line-height: 1.25; }
.models-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.model-card { border-radius: 16px; border: 1px solid var(--neo-border); background: var(--neo-bg); overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s; }
.model-card:hover { border-color: var(--neo-accent-border-hover); transform: translateY(-3px); box-shadow: var(--neo-card-shadow); }
.card-top-bar { height: 4px; width: 100%; }
.card-body { padding: 28px 24px; display: flex; flex-direction: column; flex: 1; }
.model-provider { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--neo-text-3); margin-bottom: 8px; }
.provider-dot { width: 8px; height: 8px; border-radius: 50%; }
.model-card h3 { font-size: 18px; font-weight: 700; color: var(--neo-text-1); margin-bottom: 12px; }
.model-desc { font-size: 13px; color: var(--neo-text-2); line-height: 1.6; flex: 1; margin-bottom: 20px; }
.model-specs { border-top: 1px solid var(--neo-border); padding-top: 16px; display: flex; flex-direction: column; gap: 8px; }
.spec-row { display: flex; justify-content: space-between; align-items: center; }
.spec-label { font-size: 13px; color: var(--neo-text-3); }
.spec-value { font-size: 13px; color: var(--neo-text-2); font-weight: 500; }
.spec-value.highlight { font-weight: 700; color: var(--neo-text-1); }
.models-note { margin-top: 40px; font-size: 13px; color: var(--neo-text-3); }
@media (max-width: 900px) { .home-models { padding: 64px 24px; } .models-grid { grid-template-columns: repeat(2, 1fr); } .big-title { font-size: 28px; } }
@media (max-width: 540px) { .models-grid { grid-template-columns: 1fr; } }
</style>
