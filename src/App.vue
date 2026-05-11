<template>
  <!-- 加载 -->
  <Loading />
  <!-- 壁纸 -->
  <Background @loadComplete="loadComplete" />
  <!-- 主界面 -->
  <Transition name="fade" mode="out-in">
    <main id="main" v-if="store.imgLoadStatus">
      <div class="container" v-show="!store.backgroundShow">
        <section class="all">
          <MainLeft />
          <MainRight />
        </section>
      </div>
      <!-- 移动端菜单按钮 -->
      <Icon
        class="menu"
        size="24"
        v-show="!store.backgroundShow"
        @click="store.mobileOpenState = !store.mobileOpenState"
      >
        <component :is="store.mobileOpenState ? CloseSmall : HamburgerButton" />
      </Icon>
      <!-- 页脚 -->
      <Transition name="fade" mode="out-in">
        <Footer class="f-ter" v-show="!store.backgroundShow" />
      </Transition>
    </main>
  </Transition>
</template>

<script setup>
import { helloInit } from "@/utils/getTime.js";
import { HamburgerButton, CloseSmall } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import { Icon } from "@vicons/utils";
import Loading from "@/components/Loading.vue";
import MainLeft from "@/views/Main/Left.vue";
import MainRight from "@/views/Main/Right.vue";
import Background from "@/components/Background.vue";
import Footer from "@/components/Footer.vue";
import cursorInit from "@/utils/cursor.js";
import config from "@/../package.json";
import { useI18n } from "vue-i18n";

const store = mainStore();
const { t } = useI18n();

// 页面宽度
const getWidth = () => {
  store.setInnerWidth(window.innerWidth);
};

// 加载完成事件
const loadComplete = () => {
  nextTick(() => {
    // 欢迎提示
    helloInit();
    // 默哀模式
  });
};

onMounted(() => {
  // 自定义鼠标
  cursorInit();

  // 屏蔽右键
  document.oncontextmenu = () => {
    ElMessage({
      message: t("system.rightClickDisabled"),
      grouping: true,
      duration: 2000,
    });
    return false;
  };

  // 鼠标中键事件
  window.addEventListener("mousedown", (event) => {
    if (event.button == 1) {
      store.backgroundShow = !store.backgroundShow;
      const status = store.backgroundShow
        ? t("system.wallpaperModeOn")
        : t("system.wallpaperModeOff");
      ElMessage({
        message: t("system.wallpaperMode", { status }),
        grouping: true,
      });
    }
  });

  // 监听当前页面宽度
  getWidth();
  window.addEventListener("resize", getWidth);

  // 控制台输出
  const styleTitle1 = "font-size: 20px;font-weight: 600;color: rgb(244,167,89);";
  const styleTitle2 = "font-size:12px;color: rgb(244,167,89);";
  const styleContent = "color: rgb(30,152,255);";
  const title1 = "JACKY";
  const title2 = `
    ██╗ █████╗  ██████╗██╗  ██╗██╗   ██╗
    ██║██╔══██╗██╔════╝██║ ██╔╝╚██╗ ██╔╝
    ██║███████║██║     █████╔╝  ╚████╔╝ 
██╗ ██║██╔══██║██║     ██╔═██╗   ╚██╔╝  
╚█████╔██║  ██║╚██████╗██║  ██╗   ██║   
 ╚════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝`;
  const content = `\n\n版本: ${config.version}\n主页: ${config.home}\nGithub: ${config.github}`;
  console.info(`%c${title1} %c${title2} %c${content}`, styleTitle1, styleTitle2, styleContent);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", getWidth);
});
</script>

<style lang="scss" scoped>
#main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  transition: transform 0.3s;
  animation: fade-blur-main-in 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.5s;
  .container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    padding: 0 0.5vw;
    .all {
      width: 100%;
      height: 100%;
      padding: 0 0.75rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 1200px) {
      padding: 0 2vw;
    }
  }
  .menu {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 84%;
    left: calc(50% - 28px);
    width: 56px;
    height: 34px;
    background: rgb(0 0 0 / 20%);
    backdrop-filter: blur(10px);
    border-radius: 6px;
    transition: transform 0.3s;
    animation: fade 0.5s;
    &:active {
      transform: scale(0.95);
    }
    .i-icon {
      transform: translateY(2px);
    }
    @media (min-width: 721px) {
      display: none;
    }
  }
  @media (max-height: 720px) {
    overflow: hidden;
    .container {
      height: 100vh;
      .all {
        height: calc(100vh - 40px);
        padding: 0 0.5rem;
      }
      .more {
        height: 100vh;
      }
      @media (min-width: 391px) {
        // w 1201px ~ max
        padding-left: 0.7vw;
        padding-right: 0.25vw;
        @media (max-width: 1200px) {
          // w 1101px ~ 1280px
          padding-left: 2.3vw;
          padding-right: 1.75vw;
        }
        @media (max-width: 1100px) {
          // w 993px ~ 1100px
          padding-left: 2vw;
          padding-right: 1.7vw;
        }
        @media (max-width: 992px) {
          // w 901px ~ 992px
          padding-left: 2.3vw;
          padding-right: 1.7vw;
        }
        @media (max-width: 900px) {
          // w 391px ~ 900px
          padding-left: 2vw;
          padding-right: 1.7vw;
        }
      }
    }
    .menu {
      top: calc(100vh - 80px);
      left: calc(50% - 28px);
      @media (max-width: 390px) {
        left: calc(50% - 28px);
      }
    }
    .f-ter {
      bottom: 0;
      position: fixed;
      height: 40px;
      line-height: 40px;
      font-size: 12px;
      @media (min-width: 391px) {
        padding-left: 6px;
      }
    }
  }
  @media (max-width: 390px) {
    overflow: hidden;
    .container {
      width: 100vw;
      .all {
        height: calc(100vh - 40px);
      }
    }
    .menu {
      left: calc(50% - 28px);
    }
    .f-ter {
      width: 100vw;
      height: 40px;
      line-height: 40px;
      font-size: 11px;
    }
  }
}
</style>
