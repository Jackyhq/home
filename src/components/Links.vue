<template>
    <div class="line">
      <Icon size="20">
        <Link />
      </Icon>
      <hourglass-full theme="two-tone" size="24" :fill="['#efefef', '#00000020']" />
      <span class="title">时光胶囊</span>
    </div>
  <div class="time-capsule">
    <div v-if="timeData" class="all-capsule">
      <div v-for="(item, tag, index) in timeData" :key="index" class="capsule-item">
        <div class="item-title">
          <span class="percentage">
            {{ item.name }}已度过
            <strong>{{ item.passed }}</strong>
            {{ tag === "day" ? "小时" : "天" }}
          </span>
          <span class="remaining">
            剩余&nbsp;{{ item.remaining }}&nbsp;{{ tag === "day" ? "小时" : "天" }}
          </span>
        </div>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="parseFloat(item.percentage)" />
      </div>
      <!-- 建站日期 -->
      <div v-if="store.siteStartShow" class="capsule-item start">
        <div class="item-title">{{ startDateText }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HourglassFull } from "@icon-park/vue-next";
import { getTimeCapsule, siteDateStatistics } from "@/utils/getTime.js";
import { mainStore } from "@/store";
const store = mainStore();

// 进度条数据
const timeData = ref(getTimeCapsule());
const startDate = ref(import.meta.env.VITE_SITE_START);
const startDateText = ref(null);
const timeInterval = ref(null);

onMounted(() => {
  timeInterval.value = setInterval(() => {
    timeData.value = getTimeCapsule();
    if (startDate.value) startDateText.value = siteDateStatistics(new Date(startDate.value));
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timeInterval.value);
});
</script>

<style lang="scss" scoped>
  .line {
    margin: 1rem 0.25rem 0.5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    animation: fade 0.5s;
    .title {
      margin-left: 8px;
      font-size: 1.15rem;
      text-shadow: 0 0 5px #00000050;
    }
  }
.time-capsule {
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: #00000040;
  border-radius: 6px;
  padding: 1rem;
  margin: 0 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 0.25rem 1rem;
    font-size: 1.1rem;
    .i-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 6px;
      margin-bottom: 3px;
      height: 1em;
    }
  }
  .all-capsule {
    .capsule-item {
      margin-bottom: 1rem;
      .item-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0rem 0.5rem 0rem;
        font-size: 0.95rem;
        .remaining {
          opacity: 0.6;
          font-size: 0.85rem;
          font-style: oblique;
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &.start {
        .item-title {
          justify-content: center;
          opacity: 0.8;
          font-size: 0.85rem;
        }
      }
    }
  }
}

@keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>
