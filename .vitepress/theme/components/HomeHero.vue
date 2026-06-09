<template>
  <section class="home-hero">
    <div class="hero-left">
      <div class="hero-body">
        <span class="hero-badge">{{ t.badge }}</span>
        <h1 class="hero-title" v-html="titleHtml"></h1>
        <p class="hero-tagline">{{ t.tagline }}</p>
      </div>
      <div class="hero-footer">
        <span>{{ t.footer[0] }}</span>
        <span class="dot">·</span>
        <span>{{ t.footer[1] }}</span>
      </div>
      <a class="scroll-hint" @click.prevent="scrollDown">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 13l5 5 5-5M7 7l5 5 5-5"/></svg>
      </a>
    </div>
    <div class="hero-right">
      <div class="ripple-container">
        <div class="ripple r1"></div>
        <div class="ripple r2"></div>
        <div class="ripple r3"></div>
        <div class="ripple r4"></div>
        <div class="ripple r5"></div>
        <div class="ripple r6"></div>
        <div class="ripple r7"></div>
        <div class="ripple r8"></div>
        <div class="dot-center"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ t: Object })
const titleHtml = computed(() => props.t.title.replace('\n', '<br>'))

const scrollDown = () => {
  const hero = document.querySelector('.home-hero')
  if (hero) {
    const next = hero.nextElementSibling
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.home-hero {
  display: flex;
  min-height: calc(100vh - 120px);
  width: 100%;
  position: relative;
}

.hero-left {
  flex: 1;
  background: var(--neo-bg);
  padding: 48px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-badge {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #1a6bf0;
  margin-bottom: 24px;
}

.hero-title {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 900;
  color: var(--neo-text-1);
  line-height: 1.15;
  margin: 0;
}

.hero-tagline {
  margin-top: 32px;
  font-size: 18px;
  color: var(--neo-text-2);
  line-height: 1.7;
  max-width: 480px;
}

.hero-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--neo-text-3);
  border-top: 1px solid var(--neo-border);
  padding-top: 24px;
}

.dot { color: var(--neo-text-3); }

.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--neo-text-3);
  animation: bounce 2s ease-in-out infinite;
  cursor: pointer;
  text-decoration: none;
}

.scroll-hint:hover {
  color: #1a6bf0;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.6; }
  50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
}

.hero-right {
  width: 45%;
  background: linear-gradient(160deg, #1a6bf0 0%, #3b5ef5 30%, #5040f0 60%, #6535f5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.ripple-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 20px;
  height: 20px;
  animation: ripple-expand 5s ease-out infinite;
  opacity: 0;
}

.r1 { animation-delay: 0s; }
.r2 { animation-delay: 0.6s; }
.r3 { animation-delay: 1.2s; }
.r4 { animation-delay: 1.8s; }
.r5 { animation-delay: 2.4s; }
.r6 { animation-delay: 3.0s; }
.r7 { animation-delay: 3.6s; }
.r8 { animation-delay: 4.2s; }

@keyframes ripple-expand {
  0% {
    width: 20px;
    height: 20px;
    opacity: 0.7;
    border-color: rgba(255, 255, 255, 0.4);
  }
  100% {
    width: 550px;
    height: 550px;
    opacity: 0;
    border-color: rgba(255, 255, 255, 0.02);
  }
}

.dot-center {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  z-index: 1;
}

@media (max-width: 768px) {
  .home-hero { flex-direction: column; }
  .hero-left { padding: 32px 24px; min-height: 60vh; }
  .hero-right { width: 100%; height: 40vh; }
}
</style>
