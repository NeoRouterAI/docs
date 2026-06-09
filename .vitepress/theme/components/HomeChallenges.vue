<template>
  <section class="home-challenges">
    <div class="section-inner">
      <div class="challenges-layout">
        <div class="challenges-left">
          <div class="tag-row">
            <span class="section-tag">{{ t.tag }}</span>
            <span class="tag-sub">{{ t.tagSub }}</span>
          </div>
          <h2 class="big-title">{{ t.title }}</h2>
        </div>
        <div class="challenges-right">
          <div v-for="item in t.items" :key="item.title" class="challenge-item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.home-challenges {
  padding: 100px 64px;
  background: var(--neo-bg);
  border-top: 1px solid var(--neo-border);
}

.section-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.challenges-layout {
  display: flex;
  gap: 80px;
  align-items: flex-start;
}

.challenges-left {
  flex: 1;
  position: sticky;
  top: 120px;
}

.tag-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.section-tag {
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #1a6bf0;
}

.tag-sub {
  font-size: 14px;
  color: var(--neo-text-2);
}

.big-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 900;
  color: var(--neo-text-1);
  line-height: 1.25;
}

.challenges-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.challenge-item {
  padding-left: 24px;
  border-left: 3px solid #f97316;
  transition: transform 0.2s, box-shadow 0.2s;
}

.challenge-item:hover {
  transform: translateX(4px);
}

.challenge-item h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--neo-text-1);
  margin-bottom: 8px;
}

.challenge-item p {
  font-size: 15px;
  color: var(--neo-text-2);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .home-challenges { padding: 64px 24px; }
  .challenges-layout { flex-direction: column; gap: 40px; }
  .challenges-left { position: static; }
  .big-title { font-size: 28px; }
}
</style>
