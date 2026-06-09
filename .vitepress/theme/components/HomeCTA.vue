<template>
  <section class="home-cta">
    <div class="cta-layout">
      <div class="cta-left">
        <div class="cta-logo">
          <img src="/favicon.svg" alt="N" class="cta-logo-icon" />
          <span class="cta-logo-text">NeoRouter.AI</span>
        </div>
        <div class="cta-body">
          <span class="cta-badge">{{ t.badge }}</span>
          <h2>{{ t.title }}</h2>
          <p>{{ t.desc }}</p>
          <div class="cta-actions">
            <a href="mailto:support@neorouter.ai" class="cta-btn">{{ t.btn }}</a>
            <a href="/NeoRouter.AI-企业宣传.pptx" class="cta-download" download>{{ t.download }}</a>
          </div>
        </div>
      </div>
      <div class="cta-right">
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
    </div>
  </section>
</template>

<script setup>
defineProps({ t: Object })
</script>

<style scoped>
.home-cta { background: #1a6bf0; overflow: hidden; }
.cta-layout { display: flex; min-height: 560px; }
.cta-left { flex: 1; padding: 64px; display: flex; flex-direction: column; justify-content: space-between; }
.cta-logo { display: flex; align-items: center; gap: 12px; }
.cta-logo-icon { width: 40px; height: 40px; border-radius: 8px; }
.cta-logo-text { font-size: 20px; font-weight: 700; color: #fff; }
.cta-body { padding: 40px 0; }
.cta-badge { font-size: 13px; font-weight: 700; letter-spacing: 2px; color: rgba(255, 255, 255, 0.7); display: block; margin-bottom: 20px; }
.cta-body h2 { font-size: clamp(36px, 4.5vw, 52px); font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 16px; }
.cta-body p { font-size: 17px; color: rgba(255, 255, 255, 0.7); line-height: 1.7; margin-bottom: 36px; }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.cta-btn { display: inline-block; padding: 16px 32px; border-radius: 8px; background: #fff; color: #1a6bf0; font-size: 15px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
.cta-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); }
.cta-download { display: inline-block; padding: 16px 24px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.4); color: #fff; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.2s; }
.cta-download:hover { background: rgba(255, 255, 255, 0.1); border-color: #fff; }
.cta-right { width: 45%; position: relative; display: flex; align-items: center; justify-content: center; }
.ripple-container { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.ripple { position: absolute; border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.3); width: 20px; height: 20px; animation: ripple-expand 5s ease-out infinite; opacity: 0; }
.r1 { animation-delay: 0s; }
.r2 { animation-delay: 0.6s; }
.r3 { animation-delay: 1.2s; }
.r4 { animation-delay: 1.8s; }
.r5 { animation-delay: 2.4s; }
.r6 { animation-delay: 3.0s; }
.r7 { animation-delay: 3.6s; }
.r8 { animation-delay: 4.2s; }
@keyframes ripple-expand { 0% { width: 20px; height: 20px; opacity: 0.7; border-color: rgba(255, 255, 255, 0.4); } 100% { width: 550px; height: 550px; opacity: 0; border-color: rgba(255, 255, 255, 0.02); } }
.dot-center { width: 28px; height: 28px; border-radius: 50%; background: #fff; position: absolute; box-shadow: 0 0 30px rgba(255, 255, 255, 0.5); z-index: 1; }
@media (max-width: 768px) { .cta-layout { flex-direction: column; } .cta-left { padding: 48px 24px; } .cta-right { width: 100%; height: 300px; } }
</style>
