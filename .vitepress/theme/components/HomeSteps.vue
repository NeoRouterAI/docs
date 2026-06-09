<template>
  <section class="home-steps">
    <div class="section-inner">
      <div class="section-header">
        <div class="tag-row">
          <span class="section-tag">{{ t.tag }}</span>
          <span class="tag-sub">{{ t.tagSub }}</span>
        </div>
        <h2 class="big-title">{{ t.title }}</h2>
      </div>
      <div class="steps-row">
        <div v-for="(step, i) in t.items" :key="step.title" class="step-item">
          <div class="step-circle">{{ i + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p class="step-sub">{{ step.sub }}</p>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
        <div class="step-arrow"></div>
        <div class="step-arrow second"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.home-steps { padding: 100px 64px; background: var(--neo-bg); border-top: 1px solid var(--neo-border); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 80px; }
.tag-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-tag { font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #1a6bf0; }
.tag-sub { font-size: 14px; color: var(--neo-text-2); }
.big-title { font-size: clamp(32px, 4vw, 48px); font-weight: 900; color: var(--neo-text-1); line-height: 1.25; }
.steps-row { display: flex; align-items: flex-start; justify-content: center; position: relative; }
.step-item { flex: 1; text-align: center; padding: 0 24px; }
.step-circle { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #3b3ff5); color: #fff; font-size: 28px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3); transition: transform 0.2s; }
.step-circle:hover { transform: scale(1.1); }
.step-item h3 { font-size: 20px; font-weight: 700; color: var(--neo-text-1); margin-bottom: 6px; }
.step-sub { font-size: 13px; color: #1a6bf0; margin-bottom: 16px; }
.step-desc { font-size: 14px; color: var(--neo-text-2); line-height: 1.7; }
.step-arrow { position: absolute; top: 36px; left: calc(33.33% - 12px); width: 24px; height: 24px; }
.step-arrow::after { content: '→'; font-size: 24px; color: var(--neo-text-3); }
.step-arrow.second { left: calc(66.66% - 12px); }
@media (max-width: 768px) { .home-steps { padding: 64px 24px; } .steps-row { flex-direction: column; gap: 48px; } .step-arrow { display: none; } .big-title { font-size: 28px; } }
</style>
