<template>
  <div class="weather" v-if="isWeatherDataValid">
    <span>{{ weatherData.adCode.city }}&nbsp;</span>
    <span>{{ weatherData.weather.weather }}&nbsp;</span>
    <span>{{ weatherData.weather.temperature }}℃</span>
    <span class="sm-hidden">
      &nbsp;{{ weatherData.weather.winddirection }}风&nbsp;
    </span>
    <span class="sm-hidden">{{ weatherData.weather.windpower }}级</span>
  </div>
  <div class="weather" v-else>
    <span>天气数据获取失败</span>
  </div>
</template>

<script setup>
import { reactive, computed, h } from 'vue'
import { getAdcode, getWeather, getOtherWeather } from "@/api";
import { Error } from "@icon-park/vue-next";
import { ElMessage } from 'element-plus'

const mainKey = import.meta.env.VITE_WEATHER_KEY;

const weatherData = reactive({
  adCode: {
    city: null,
    adcode: null,
  },
  weather: {
    weather: null,
    temperature: null,
    winddirection: null,
    windpower: null,
  },
});

const isWeatherDataValid = computed(() => {
  return (
    weatherData.adCode.city &&
    weatherData.weather.weather &&
    weatherData.weather.temperature !== null
  );
});

const getWeatherData = async () => {
  try {
    if (!mainKey) {
      console.log("使用备用天气接口");
      const result = await getOtherWeather();
      
      if (result && result.success && result.data) {
        weatherData.adCode.city = result.city || "未知地区";
        weatherData.weather = {
          weather: result.data.type,
          temperature: getTemperature(
            result.data.low.replace("°C", ""),
            result.data.high.replace("°C", "")
          ),
          winddirection: result.data.fengxiang,
          windpower: result.data.fengli.replace("级", "")
        };
      } else {
        throw new Error("备用接口数据异常");
      }
    } else {
      const adCode = await getAdcode(mainKey);
      if (adCode.infocode !== "10000") throw "地区查询失败";
      
      weatherData.adCode = {
        city: adCode.city,
        adcode: adCode.adcode,
      };

      const result = await getWeather(mainKey, weatherData.adCode.adcode);
      weatherData.weather = {
        weather: result.lives[0].weather,
        temperature: result.lives[0].temperature,
        winddirection: result.lives[0].winddirection,
        windpower: result.lives[0].windpower,
      };
    }
  } catch (error) {
    console.error("天气获取失败:", error);
    onError("天气信息获取失败");
  }
};

const getTemperature = (min, max) => {
  const average = (Number(min) + Number(max)) / 2;
  return Math.round(average);
};

const onError = (message) => {
  ElMessage({
    message,
    icon: h(Error, { theme: "filled", fill: "#efefef" }),
  });
};

onMounted(() => {
  getWeatherData();
});
</script>
