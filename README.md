简体中文 | [English](./README_EN.md)

> [!IMPORTANT]
> ## 关于此分支版本
> 这是基于原作者 [imsyy](https://github.com/imsyy/home) 项目的分支版本。原项目是一个简洁美观的个人主页项目，本分支在保持原有功能的基础上进行了一些个人定制和优化。
>

<p>
<strong><h2>無名の主页 - 分支版本</h2></strong>
简单的小主页，基于原作者项目进行优化改进
</p>

![Jackywhq的主页](/screenshots/home.png)

### 👀 Demo
- [原作者演示站点](https://www.imsyy.top)
- [原作者开发版](https://home-imsyy.vercel.app)

### 🎉 功能特性

- [x] 载入动画
- [x] 站点简介
- [x] Hitokoto 一言
- [x] 日期及时间
- [x] 实时天气
- [x] 时光进度条
- [x] 音乐播放器
- [x] 移动端适配
- [x] 多语言支持
- [x] 自定义背景
- [x] 响应式设计

### 🚀 快速开始

#### 环境要求

- **Node.js** >= 16.16.0
- **npm** >= 8.15.0 或 **pnpm** >= 7.0.0

#### 安装与运行

```bash
# 克隆项目
git clone https://github.com/your-username/home.git
cd home

# 安装 pnpm（如果没有安装）
npm install -g pnpm

# 安装依赖
pnpm install

# 开发模式运行
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

### ⚙️ 部署方式
#### 静态文件部署

```bash
# 构建项目
pnpm build

# 将 dist 目录下的文件上传到你的服务器
```

#### 自定义网站链接

在 `src/assets/siteLinks.json` 中配置：

```json
{
  "icon": "Blog",
  "name": "博客",
  "link": "https://your-blog.com"
}
```

#### 自定义社交链接

在 `src/assets/socialLinks.json` 中配置你的社交媒体链接。

#### 自定义背景图片

1. 将图片放入 `public/images/` 目录
2. 按 `background1.jpg`, `background2.jpg` 格式命名
3. 在 `src/components/Background/index.vue` 中修改图片数量

### 🎵 音乐播放器配置

本项目使用基于 `MetingJS` 的 `APlayer` 音乐播放器：

- 支持网易云音乐、QQ音乐
- 支持歌曲、播放列表、专辑等多种类型
- 仅支持中国大陆地区

### 🌤️ 天气功能配置

1. 注册 [高德开放平台](https://console.amap.com/dev/index) 账号
2. 创建 Web 服务类型的应用
3. 获取 API Key 并填入 `.env` 文件

### 🎨 自定义样式

项目使用 SCSS 进行样式管理：

- `src/style/global.scss` - 全局样式
- `src/style/style.scss` - 主要样式文件

### 📱 移动端适配

项目已完全适配移动端设备，支持：

- 响应式布局
- 触摸操作
- 移动端优化的交互体验

### 🛠️ 技术栈

- **前端框架**: [Vue 3](https://cn.vuejs.org/)
- **构建工具**: [Vite](https://vitejs.cn/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/zh/)
- **样式预处理**: SCSS
- **图标库**: [IconPark](https://iconpark.oceanengine.com/), [xicons](https://xicons.org/)
- **音乐播放器**: [APlayer](https://aplayer.js.org/)
- **字体**: HarmonyOS Sans

### 📡 API 服务

- [韩小韩 WebAPI](https://api.vvhan.com/) - 综合API服务
- [搏天 API](https://api.btstu.cn/) - 随机图片API
- [教书先生 API](https://api.oioweb.cn/) - 天气API
- [高德开放平台](https://lbs.amap.com/) - 地理位置和天气
- [Hitokoto 一言](https://hitokoto.cn/) - 随机句子API

### 📄 开源协议

本项目基于原作者的开源协议继续开发，请遵守相关协议条款。

### 🙏 致谢

- 感谢原作者 [imsyy](https://github.com/imsyy) 创建了这个优秀的项目
- 感谢所有为项目做出贡献的开发者
- 感谢各个 API 服务提供商


**原项目地址**: [https://github.com/imsyy/home](https://github.com/imsyy/home)

