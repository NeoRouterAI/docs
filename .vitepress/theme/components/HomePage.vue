<template>
  <div class="home-page">
    <HomeHero :t="t.hero" />
    <HomeChallenges :t="t.challenges" />
    <HomeSolution :t="t.solution" />
    <HomeAdvantages :t="t.advantages" />
    <HomeMetrics :t="t.metrics" />
    <HomeModels :t="t.models" />
    <HomeSteps :t="t.steps" />
    <HomeFAQ :t="t.faq" />
    <HomeCTA :t="t.cta" />
    <PageNav />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'
import { i18n } from './i18n'
import HomeHero from './HomeHero.vue'
import HomeChallenges from './HomeChallenges.vue'
import HomeSolution from './HomeSolution.vue'
import HomeAdvantages from './HomeAdvantages.vue'
import HomeMetrics from './HomeMetrics.vue'
import HomeModels from './HomeModels.vue'
import HomeSteps from './HomeSteps.vue'
import HomeFAQ from './HomeFAQ.vue'
import HomeCTA from './HomeCTA.vue'
import PageNav from './PageNav.vue'

const { lang } = useData()
const t = computed(() => i18n[lang.value] || i18n['en-US'])
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>
