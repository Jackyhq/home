<template>
  <div class="language-switcher">
    <div class="language-buttons">
      <button 
        class="lang-btn" 
        :class="{ active: currentLocale === 'zh-CN' }"
        @click="setLanguage('zh-CN')"
      >
        中文
      </button>
      <button 
        class="lang-btn" 
        :class="{ active: currentLocale === 'en-US' }"
        @click="setLanguage('en-US')"
      >
        English
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { mainStore } from "@/store";

const { locale } = useI18n();
const store = mainStore();

// 当前语言
const currentLocale = computed(() => locale.value);

// 设置语言
const setLanguage = (newLocale) => {
  store.setLocale(newLocale);
};
</script>

<style lang="scss" scoped>
.language-switcher {
  .language-buttons {
    display: flex;
    border-radius: 20px;
    background-color: #ffffff30;
    overflow: hidden;
    
    .lang-btn {
      flex: 1;
      padding: 8px 16px;
      border: none;
      background: transparent;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #ffffff20;
      }
      
      &.active {
        background-color: #fff;
        color: #333;
      }
      
      &:first-child {
        border-right: 1px solid #ffffff20;
      }
    }
  }
}
</style>