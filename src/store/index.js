import { defineStore } from "pinia";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      imgLoadStatus: false, // 壁纸加载状态
      innerWidth: null, // 当前窗口宽度

      backgroundShow: false, // 壁纸展示状态
      mobileOpenState: false, // 移动端开启状态
      mobileFuncState: false, // 移动端功能区开启状态
    };
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
  },
});
