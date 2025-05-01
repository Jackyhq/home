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
