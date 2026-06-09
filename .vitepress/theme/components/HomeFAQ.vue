<template>
  <section class="home-faq">
    <div class="section-inner">
      <div class="section-header">
        <div class="tag-row">
          <span class="section-tag">{{ t.tag }}</span>
          <span class="tag-sub">{{ t.tagSub }}</span>
        </div>
        <h2 class="big-title">{{ t.title }}</h2>
      </div>
      <div class="faq-table">
        <div class="faq-header">
          <span class="faq-col-q">{{ lang === 'zh-CN' ? '维度' : 'Topic' }}</span>
          <span class="faq-col-a">{{ lang === 'zh-CN' ? 'NeoRouter 的答案' : "NeoRouter's Answer" }}</span>
        </div>
        <div v-for="item in t.items" :key="item.q" class="faq-row">
          <span class="faq-col-q">{{ item.q }}</span>
          <span class="faq-col-a">{{ item.a }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useData } from 'vitepress'
const { lang } = useData()
defineProps({ t: Object })
</script>

<style scoped>
.home-faq { padding: 100px 64px; background: var(--neo-bg); border-top: 1px solid var(--neo-border); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 48px; }
.tag-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-tag { font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #1a6bf0; }
.tag-sub { font-size: 14px; color: var(--neo-text-2); }
.big-title { font-size: clamp(32px, 4vw, 48px); font-weight: 900; color: var(--neo-text-1); line-height: 1.25; }
.faq-table { border-radius: 12px; overflow: hidden; }
.faq-header { display: flex; padding: 16px 28px; background: #1a6bf0; border-radius: 24px; margin-bottom: 8px; }
.faq-header .faq-col-q, .faq-header .faq-col-a { color: #fff; font-weight: 700; font-size: 14px; }
.faq-row { display: flex; padding: 20px 28px; border-bottom: 1px solid var(--neo-border); align-items: baseline; transition: background 0.2s; }
.faq-row:hover { background: var(--neo-bg-alt); }
.faq-row:last-child { border-bottom: none; }
.faq-col-q { width: 240px; flex-shrink: 0; font-size: 14px; font-weight: 700; color: var(--neo-text-1); }
.faq-col-a { flex: 1; font-size: 14px; color: var(--neo-text-2); line-height: 1.7; }
@media (max-width: 768px) { .home-faq { padding: 64px 24px; } .faq-row { flex-direction: column; gap: 8px; } .faq-col-q { width: auto; } .big-title { font-size: 28px; } }
</style>
