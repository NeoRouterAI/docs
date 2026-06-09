<template>
  <section class="home-advantages">
    <div class="section-inner">
      <div class="section-header">
        <div class="tag-row">
          <span class="section-tag">{{ t.tag }}</span>
          <span class="tag-sub">{{ t.tagSub }}</span>
        </div>
        <h2 class="big-title">{{ t.title }}</h2>
      </div>
      <div class="advantages-grid">
        <div v-for="item in t.items" :key="item.title" class="advantage-card">
          <div class="card-top">
            <div class="card-icon">
              <svg v-if="item.id === 1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <svg v-if="item.id === 2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
              <svg v-if="item.id === 3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              <svg v-if="item.id === 4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            </div>
            <span class="card-tag">{{ item.tag }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.home-advantages { padding: 100px 64px; background: var(--neo-bg-alt); border-top: 1px solid var(--neo-border); }
.section-inner { max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 48px; }
.tag-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.section-tag { font-size: 13px; font-weight: 800; letter-spacing: 2px; color: #1a6bf0; }
.tag-sub { font-size: 14px; color: var(--neo-text-2); }
.big-title { font-size: clamp(32px, 4vw, 48px); font-weight: 900; color: var(--neo-text-1); line-height: 1.25; }
.advantages-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.advantage-card { padding: 40px 36px; border-radius: 16px; background: var(--neo-bg); border: 1px solid var(--neo-border); transition: all 0.3s; }
.advantage-card:hover { border-color: var(--neo-accent-border-hover); transform: translateY(-3px); box-shadow: var(--neo-card-shadow); }
.card-top { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
.card-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(26, 107, 240, 0.08); display: flex; align-items: center; justify-content: center; color: #1a6bf0; }
.card-tag { font-size: 12px; font-weight: 700; letter-spacing: 1.5px; color: #1a6bf0; }
.advantage-card h3 { font-size: 22px; font-weight: 700; color: var(--neo-text-1); margin-bottom: 12px; }
.advantage-card p { font-size: 15px; color: var(--neo-text-2); line-height: 1.7; }
@media (max-width: 768px) { .home-advantages { padding: 64px 24px; } .advantages-grid { grid-template-columns: 1fr; } .big-title { font-size: 28px; } }
</style>
