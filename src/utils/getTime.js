import { ElMessage } from "element-plus";
import i18n from "@/locales";

// 时钟
export const getCurrentTime = () => {
  const { t } = i18n.global;
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
  let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
  let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

  const weekdayKeys = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let currentTime = {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekday: t(`weekdays.${weekdayKeys[time.getDay()]}`),
  };
  return currentTime;
};

// 欢迎提示
export const helloInit = () => {
  const { t } = i18n.global;
  const hour = new Date().getHours();
  let hello;
  if (hour < 6) {
    hello = t("greeting.dawn");
  } else if (hour < 9) {
    hello = t("greeting.morning");
  } else if (hour < 12) {
    hello = t("greeting.forenoon");
  } else if (hour < 14) {
    hello = t("greeting.noon");
  } else if (hour < 17) {
    hello = t("greeting.afternoon");
  } else if (hour < 19) {
    hello = t("greeting.evening");
  } else if (hour < 22) {
    hello = t("greeting.night");
  } else {
    hello = t("greeting.lateNight");
  }
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<strong>${hello}</strong> ${t("welcome.message")}`,
  });
};
