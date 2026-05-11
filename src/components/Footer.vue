<template>
  <footer id="footer" class="blur">
    <div class="power">
      <span>
        <span :class="startYear < fullYear ? 'c-hidden' : 'hidden'">Copyright&nbsp;</span>
        &copy;
        <span v-if="startYear < fullYear" class="site-start">
          {{ startYear }}
          -
        </span>
        {{ fullYear }}
      </span>
      <!-- 站点备案 -->
      <span v-if="siteIcp" class="icp" style="margin-left: 8px">
        <a
          :href="'https://beian.miit.gov.cn/'"
          target="_blank"
          aria-label="ICP registration information"
          >{{ siteIcp }}</a
        >
      </span>
      <!-- 以下信息请不要修改哦 -->
      <span class="hidden">
        &amp;&nbsp;Made&nbsp;by
        <a :href="config.github" target="_blank" :aria-label="'GitHub profile of ' + config.author">
          {{ config.author }}
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup>
import config from "@/../package.json";

const fullYear = new Date().getFullYear();

const startYear = ref(
  import.meta.env.VITE_SITE_START?.length >= 4
    ? import.meta.env.VITE_SITE_START.substring(0, 4)
    : null,
);
const siteIcp = ref(import.meta.env.VITE_SITE_ICP);
</script>

<style lang="scss" scoped>
#footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 46px;
  line-height: 46px;
  text-align: center;
  z-index: 0;
  font-size: 14px;
  // 文字不换行
  word-break: keep-all;
  white-space: nowrap;
  .power {
    animation: fade 0.3s;
  }
  &.blur {
    backdrop-filter: blur(10px);
    background: rgb(0 0 0 / 25%);
    font-size: 16px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.15s ease-in-out;
  }
  @media (max-width: 720px) {
    font-size: 0.8rem;
    &.blur {
      font-size: 0.8rem;
    }
  }
  @media (max-height: 720px) {
    font-size: 12px;
    height: 40px;
    line-height: 40px;
    &.blur {
      font-size: 12px;
    }
  }
  @media (max-width: 560px) {
    .c-hidden {
      display: none;
    }
  }
  @media (max-width: 480px) {
    .hidden {
      display: none;
    }
  }
  @media (max-width: 390px) and (max-height: 720px) {
    font-size: 11px;
    &.blur {
      font-size: 11px;
    }
  }
}
</style>
