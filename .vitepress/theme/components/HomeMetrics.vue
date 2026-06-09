<template>
  <section class="home-metrics">
    <div class="section-inner">
      <div class="section-header">
        <div class="tag-row">
          <span class="section-tag">{{ t.tag }}</span>
          <span class="tag-sub">{{ t.tagSub }}</span>
        </div>
        <h2 class="big-title">{{ t.title }}</h2>
      </div>
      <div class="metrics-row">
        <div v-for="(item, i) in t.items" :key="item.label" class="metric-item">
          <div class="metric-bar"></div>
          <div class="metric-value">{{ item.value }}</div>
          <div class="metric-label">{{ item.label }}</div>
          <div class="metric-sub">{{ item.sub }}</div>
          <div v-if="i < t.items.length - 1" class="metric-divider"></div>
        </div>
      </div>
      <p class="metrics-note">{{ t.note }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.home-metrics { padding: 100px 64px; background: var(--neo-bg); border-top: 1px solid var(--neo-border); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 80px; }
.tag-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-tag { font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #1a6bf0; }
.tag-sub { font-size: 14px; color: var(--neo-text-2); }
.big-title { font-size: clamp(32px, 4vw, 48px); font-weight: 900; color: var(--neo-text-1); line-height: 1.25; }
.metrics-row { display: flex; justify-content: space-between; align-items: flex-start; }
.metric-item { flex: 1; text-align: center; position: relative; }
.metric-bar { width: 40px; height: 5px; background: #1a6bf0; border-radius: 3px; margin: 0 auto 24px; }
.metric-value { font-size: clamp(40px, 5vw, 64px); font-weight: 900; color: var(--neo-text-1); line-height: 1; }
.metric-label { margin-top: 16px; font-size: 16px; font-weight: 600; color: var(--neo-text-1); }
.metric-sub { margin-top: 4px; font-size: 13px; color: var(--neo-text-3); }
.metric-divider { position: absolute; right: 0; top: 20px; width: 1px; height: 80px; background: var(--neo-border); }
.metrics-note { margin-top: 80px; font-size: 13px; color: var(--neo-text-3); }
@media (max-width: 768px) { .home-metrics { padding: 64px 24px; } .metrics-row { flex-wrap: wrap; gap: 48px; } .metric-item { flex: 0 0 50%; } .metric-divider { display: none; } .big-title { font-size: 28px; } }
</style>
