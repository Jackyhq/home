// import axios from "axios";
import fetchJsonp from "fetch-jsonp";

/**
 * 音乐播放器
 */

// 获取音乐播放列表
export const getPlayerList = async (server, type, id) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_SONG_API}?server=${server}&type=${type}&id=${id}`,
    );
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * 一言
 */

// 获取一言数据
export const getHitokoto = async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  return await res.json();
};

/**
 * 天气
 */

// 获取高德地理位置信息
export const getAdcode = async (key) => {
  const res = await fetch(`https://restapi.amap.com/v3/ip?key=${key}`);
  return await res.json();
};

// 获取高德地理天气信息
export const getWeather = async (key, city) => {
  const res = await fetch(
    `https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${city}`,
  );
  return await res.json();
};

// 获取韩小韩天气 API
export const getOtherWeather = async (city = null) => {
  let url = 'https://api.vvhan.com/api/weather';
  if (city) {
    url += `?city=${encodeURIComponent(city)}`;
  }
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (data.success) {
      console.log(data, 'data');
      ElMessage({
        message: `当前${data.city}，天气${data.data.type}，温度${data.data.low.replace("°C", "")}-${data.data.high.replace("°C", "")}摄氏度`,
        duration: 3500,
      });
      return data;
    } else {
      console.error('获取天气数据失败:', data.message);
      return null;
    }
  } catch (error) {
    console.error('请求天气数据时出错:', error);
    return null;
  };
}
