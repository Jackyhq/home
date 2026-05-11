import { createApp } from "vue";
import "@/style/style.scss";
import App from "@/App.vue";
// 引入 pinia
import { createPinia } from "pinia";
// 引入 i18n
import i18n from "@/locales";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(i18n);
app.mount("#app");

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    // 弹出更新提醒
    const message = i18n.global.t("system.siteUpdated");
    console.log(message);
    ElMessage(message);
  });
}
