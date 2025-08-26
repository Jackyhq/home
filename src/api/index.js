import axios from "axios";

/**
 * 一言
 */

// 获取一言数据
export const getHitokoto = async () => {
  try {
    const res = await fetch("https://v1.hitokoto.cn", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('一言API调用失败:', error);
    // 返回备用数据
    return {
      hitokoto: "生活就像海洋，只有意志坚强的人才能达到彼岸。",
      from: "马克思"
    };
  }
};
