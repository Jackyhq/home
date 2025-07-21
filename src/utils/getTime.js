import { ElMessage } from "element-plus";
import dayjs from "dayjs";
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
  
  const weekdayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
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

// 时光胶囊
export const getTimeCapsule = () => {
  const { t } = i18n.global;
  const now = dayjs();
  const dayText = {
    day: t('timeCapsule.day'),
    week: t('timeCapsule.week'),
    month: t('timeCapsule.month'),
    year: t('timeCapsule.year'),
  };
  /**
   * 计算时间差的函数
   * @param {String} unit 时间单位，可以是 'day', 'week', 'month', 'year'
   */
  const getDifference = (unit) => {
    // 获取当前时间单位的开始时间
    const start = now.startOf(unit);
    // 获取当前时间单位的结束时间
    const end = now.endOf(unit);
    // 计算总的天数或小时数
    const total = end.diff(start, unit === "day" ? "hour" : "day") + 1;
    // 计算已经过去的天数或小时数
    let passed = now.diff(start, unit === "day" ? "hour" : "day");
    if (unit === "week") {
      passed = (passed + 6) % 7;
    }
    const remaining = total - passed;
    const percentage = (passed / total) * 100;
    // 返回数据
    return {
      name: dayText[unit],
      total: total,
      passed: passed,
      remaining: remaining,
      percentage: percentage.toFixed(2),
    };
  };
  return {
    day: getDifference("day"),
    week: getDifference("week"),
    month: getDifference("month"),
    year: getDifference("year"),
  };
};

// 欢迎提示
export const helloInit = () => {
  const { t } = i18n.global;
  const hour = new Date().getHours();
  let hello = null;
  if (hour < 6) {
    hello = t('greeting.dawn');
  } else if (hour < 9) {
    hello = t('greeting.morning');
  } else if (hour < 12) {
    hello = t('greeting.forenoon');
  } else if (hour < 14) {
    hello = t('greeting.noon');
  } else if (hour < 17) {
    hello = t('greeting.afternoon');
  } else if (hour < 19) {
    hello = t('greeting.evening');
  } else if (hour < 22) {
    hello = t('greeting.night');
  } else {
    hello = t('greeting.lateNight');
  }
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<strong>${hello}</strong> ${t('welcome.message')}`,
  });
};

// 建站日期统计
export const siteDateStatistics = (startDate) => {
  const { t } = i18n.global;
  const currentDate = new Date();
  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();

  // 如果天数或月份为负数，则调整天数和月份
  if (days < 0) {
    months--;
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return t('siteStats.running', { years, months, days });
};
