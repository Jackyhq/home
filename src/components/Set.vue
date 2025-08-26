<template>
  <div class="setting">
    <el-collapse class="collapse" v-model="activeName" accordion>
      <el-collapse-item :title="t('settings.personalWallpaper')" name="1">
        <div class="bg-set">
          <el-radio-group v-model="coverType" text-color="#ffffff" @change="radioChange">
            <el-radio value="0" size="large" border>{{ t('settings.defaultWallpaper') }}</el-radio>
            <el-radio value="1" size="large" border>{{ t('settings.dailyImage') }}</el-radio>
          </el-radio-group>
        </div>
      </el-collapse-item>
      <el-collapse-item :title="t('settings.personalization')" name="2">
        <div class="item">
          <span class="text">{{ t('settings.siteStartShow') }}</span>
          <el-switch
            v-model="siteStartShow"
            inline-prompt
            :active-icon="CheckSmall"
            :inactive-icon="CloseSmall"
          />
        </div>

        <div class="item">
          <span class="text">{{ t('settings.footerBlur') }}</span>
          <el-switch
            v-model="footerBlur"
            inline-prompt
            :active-icon="CheckSmall"
            :inactive-icon="CloseSmall"
          />
        </div>
      </el-collapse-item>

      <el-collapse-item :title="t('settings.language')" name="3">
        <div class="item language-item">
          <LanguageSwitcher />
        </div>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script setup>
import { CheckSmall, CloseSmall, SuccessPicture } from "@icon-park/vue-next";
import { mainStore } from "@/store";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { ref, h } from 'vue';

const { t } = useI18n();

const store = mainStore();
const {
  coverType,
  siteStartShow,
  footerBlur,
} = storeToRefs(store);

// 默认选中项
const activeName = ref("1");

// 壁纸切换
const radioChange = () => {
  ElMessage({
    message: t('system.wallpaperChanged'),
    icon: h(SuccessPicture, {
      theme: "filled",
      fill: "#efefef",
    }),
  });
};
</script>

<style lang="scss" scoped>
.setting {
  .collapse {
    border-radius: 8px;
    --el-collapse-content-bg-color: #ffffff10;
    border-color: transparent;
    overflow: hidden;

    :deep(.el-collapse-item__header) {
      background-color: #ffffff30;
      color: #fff;
      font-size: 15px;
      padding-left: 18px;
      border-color: transparent;
    }

    :deep(.el-collapse-item__wrap) {
      border-color: transparent;

      .el-collapse-item__content {
        padding: 20px;
        .item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          font-size: 14px;
          .el-switch__core {
            border-color: transparent;
            background-color: #ffffff30;
          }
          .el-radio-group {
            .el-radio {
              margin: 2px 10px 2px 0;
              border-radius: 5px;

              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
        .el-radio-group {
          justify-content: space-between;

          .el-radio {
            margin: 10px 16px;
            background: #ffffff26;
            border: 2px solid transparent;
            border-radius: 8px;

            .el-radio__label {
              color: #fff;
            }

            .el-radio__inner {
              background: #ffffff06 !important;
              border: 2px solid #eeeeee !important;
            }

            &.is-checked {
              background: #ffffff06 !important;
              border: 2px solid #eeeeee !important;
            }

            .is-checked {
              .el-radio__inner {
                background-color: #ffffff30 !important;
                border-color: #fff !important;
              }

              & + .el-radio__label {
                color: #fff !important;
              }
            }
          }
        }
        
        .language-item {
          justify-content: center;
        }
      }
    }
  }
}
</style>
