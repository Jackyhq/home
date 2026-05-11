import { createI18n } from "vue-i18n";
import zhCN from "./zh-CN.js";
import zhTW from "./zh-TW.js";
import enUS from "./en-US.js";
import { isEnglishSiteHost } from "@/utils/site.js";

// 检测浏览器语言
const getDefaultLocale = () => {
  if (isEnglishSiteHost()) {
    return "en-US";
  }

  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang === "zh-TW" || browserLang === "zh-HK" || browserLang === "zh-MO") {
    return "zh-TW";
  } else if (browserLang.startsWith("zh")) {
    return "zh-CN";
  }
  return "en-US";
};

const i18n = createI18n({
  legacy: false,
  locale: getDefaultLocale(),
  fallbackLocale: "zh-CN",
  messages: {
    "zh-CN": zhCN,
    "zh-TW": zhTW,
    "en-US": enUS,
  },
});

export default i18n;
