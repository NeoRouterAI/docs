<template>
  <div class="page-nav">
    <button class="nav-btn" :disabled="currentSection <= 0" @click="go(-1)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
    <span class="nav-indicator">{{ currentSection + 1 }} / {{ totalSections }}</span>
    <button class="nav-btn" @click="goDown">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const currentSection = ref(0)
const totalSections = ref(9)
let sections = []
let isScrolling = false

const cacheSections = () => {
  const home = document.querySelector('.home-page')
  if (!home) return
  sections = Array.from(home.querySelectorAll(':scope > section'))
  totalSections.value = sections.length
}

const updateCurrent = () => {
  if (isScrolling) return
  const midScreen = window.scrollY + window.innerHeight / 2
  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].offsetTop <= midScreen) {
      currentSection.value = i
      break
    }
  }
}

const go = (dir) => {
  const target = currentSection.value + dir
  if (target < 0 || target >= sections.length) return
  isScrolling = true
  currentSection.value = target
  sections[target].scrollIntoView({ behavior: 'smooth' })
  setTimeout(() => { isScrolling = false }, 800)
}

const goDown = () => {
  if (currentSection.value >= sections.length - 1) {
    isScrolling = true
    currentSection.value = 0
    sections[0].scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => { isScrolling = false }, 800)
  } else {
    go(1)
  }
}

onMounted(() => {
  nextTick(() => {
    cacheSections()
    updateCurrent()
  })
  window.addEventListener('scroll', updateCurrent, { passive: true })
  window.addEventListener('resize', cacheSections, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCurrent)
  window.removeEventListener('resize', cacheSections)
})
</script>

<style scoped>
.page-nav {
  position: fixed;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 100;
}

.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--neo-border);
  background: var(--neo-bg);
  color: var(--neo-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.nav-btn:hover:not(:disabled) {
  border-color: #1a6bf0;
  color: #1a6bf0;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-indicator {
  font-size: 11px;
  font-weight: 600;
  color: var(--neo-text-3);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .page-nav { right: 12px; }
}
</style>
