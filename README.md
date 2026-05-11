简体中文 | [English](./README_EN.md)

> [!IMPORTANT]
>
> ## 关于此分支版本
>
> 这是基于原作者 [imsyy](https://github.com/imsyy/home) 项目的分支版本。原项目是一个简洁美观的个人主页项目，本分支在保持原有功能的基础上进行了一些个人定制和优化。

<p align="center">
<strong><h2 align="center">無名の主页 - 分支版本</h2></strong>
<p align="center">简单的小主页，基于原作者项目进行优化改进</p>
</p>

<p align="center">
  <img src="/screenshots/home.png" alt="Jackywhq的主页" width="750">
</p>

## 👀 演示站点

- https://jackyw.cn/
- https://jackyw.uk/

## 🎉 功能特性

- [x] 载入动画
- [x] 站点简介
- [x] Hitokoto 一言
- [x] 日期及时间
- [x] 移动端适配
- [x] 多语言支持
- [x] 自定义背景
- [x] 响应式设计

## 🚀 快速开始

### 环境要求

- **Node.js** >= 20.19.0 或 >= 22.12.0（推荐 Node 22）
- **pnpm** >= 10.0.0

### 安装与运行

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

# 需要局域网访问时运行
pnpm dev:host

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview

# 检查代码质量与格式
pnpm lint
pnpm format:check
```

## ⚙️ 部署方式

### 静态文件部署

```bash
# 构建项目
pnpm build

# 将 dist 目录下的文件上传到你的服务器
```

### Docker 部署

```bash
# 构建并启动
docker compose up --build

# 默认访问端口
http://localhost:12445
```

### 自定义配置

#### 站点信息

在 `.env` 中配置站点名称、作者、关键词、简介、图标、建站年份和备案号等信息。

#### 网站链接

在 `src/assets/siteLinks.json` 中配置：

```json
[
  {
    "nameKey": "siteLinks.photo.name",
    "descriptionKey": "siteLinks.photo.description",
    "metaKey": "siteLinks.photo.meta",
    "url": "https://photo.example.com/",
    "icon": "/images/icon/photo.png"
  }
]
```

对应文案在 `src/locales/` 中维护。

#### 社交媒体链接

在 `src/assets/socialLinks.json` 中配置你的社交媒体链接。

#### 背景图片

1. 默认背景从远程地址加载
2. 本地兜底图片放入 `public/images/` 目录
3. 按 `background1.jpg`, `background2.jpg` 格式命名
4. 在 `src/components/Background.vue` 中修改本地兜底图片数量

## 🎨 自定义样式

项目使用 SCSS 进行样式管理：

- `src/style/global.scss` - 全局样式
- `src/style/style.scss` - 主要样式文件

## 📱 移动端适配

项目已完全适配移动端设备，支持：

- 响应式布局
- 触摸操作
- 移动端优化的交互体验

## 🛠️ 技术栈

- **前端框架**: [Vue 3](https://cn.vuejs.org/)
- **构建工具**: [Vite](https://vitejs.cn/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/zh/)
- **样式预处理**: SCSS
- **图标库**: [IconPark](https://iconpark.oceanengine.com/), [xicons](https://xicons.org/)
- **字体**: HarmonyOS Sans

## 📡 API 服务

- [Hitokoto 一言](https://hitokoto.cn/) - 随机句子API

## 📄 开源协议

本项目基于原作者的开源协议继续开发，请遵守相关协议条款。

## 🙏 致谢

- 感谢原作者 [imsyy](https://github.com/imsyy) 创建了这个优秀的项目
- 感谢所有为项目做出贡献的开发者
- 感谢各个 API 服务提供商

---

**原项目地址**: [https://github.com/imsyy/home](https://github.com/imsyy/home)
