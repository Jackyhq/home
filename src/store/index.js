import { defineStore } from "pinia";
import { setLocale, getLocale } from "@/locales";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      imgLoadStatus: false, // 壁纸加载状态
      innerWidth: null, // 当前窗口宽度
      coverType: "0", // 壁纸种类
      siteStartShow: true, // 建站日期显示
      locale: getLocale(), // 当前语言
      
      backgroundShow: false, // 壁纸展示状态
      boxOpenState: false, // 盒子开启状态
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
      setOpenState: false, // 设置页面开启状态
      footerBlur: true, // 底栏模糊
      
    };
  },
  getters: {
    // 获取页面宽度
    getInnerWidth(state) {
      return state.innerWidth;
    },
  },
  actions: {
    // 更改当前页面宽度
    setInnerWidth(value) {
      this.innerWidth = value;
      if (value >= 720) {
        this.mobileOpenState = false;
        this.mobileFuncState = false;
      }
    },
    // 更改壁纸加载状态
    setImgLoadStatus(value) {
      this.imgLoadStatus = value;
    },
    // 切换语言
    setLocale(locale) {
      this.locale = locale;
      setLocale(locale);
    },
  },
  persist: {
    key: "data",
    storage: window.localStorage,
    paths: [
      "coverType",
      "siteStartShow",
      "footerBlur",
      "locale",
    ],
  },
});
