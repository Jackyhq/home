import js from "@eslint/js";
import globals from "globals";
import vue from "eslint-plugin-vue";

const autoImportGlobals = {
  $openList: "readonly",
  ElMessage: "readonly",
  computed: "readonly",
  defineComponent: "readonly",
  defineEmits: "readonly",
  defineProps: "readonly",
  h: "readonly",
  inject: "readonly",
  nextTick: "readonly",
  onBeforeMount: "readonly",
  onBeforeUnmount: "readonly",
  onMounted: "readonly",
  provide: "readonly",
  reactive: "readonly",
  ref: "readonly",
  vue: "readonly",
  watch: "readonly",
  withDefaults: "readonly",
};

export default [
  {
    ignores: ["node_modules/**", "dist/**", "auto-imports.d.ts", "components.d.ts"],
  },
  js.configs.recommended,
  ...vue.configs["flat/essential"],
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...autoImportGlobals,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
];
