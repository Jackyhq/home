English | [Chinese](./README.md)

> [!IMPORTANT]
> ## About This Fork Version
> This is a fork version based on the original project by [imsyy](https://github.com/imsyy/home). The original project is a clean and beautiful personal homepage project. This fork maintains the original functionality while adding some personal customizations and optimizations.
>

<p>
<strong><h2>無名の Homepage - Fork Version</h2></strong>
Simple little homepage, optimized and improved based on the original author's project
</p>

![Jackywhq的主页](/screenshots/home.png)

### 👀 Demo
- [Original Author's Demo Site](https://www.imsyy.top)
- [Original Author's Dev Version](https://home-imsyy.vercel.app)

### 🎉 Features

- [x] Loading animation
- [x] Site description
- [x] Hitokoto quotes
- [x] Date and time
- [x] Time progress bar
- [x] Mobile adaptation
- [x] Multi-language support
- [x] Custom backgrounds
- [x] Responsive design

### 🚀 Quick Start

#### Requirements

- **Node.js** >= 16.16.0
- **npm** >= 8.15.0 or **pnpm** >= 7.0.0

#### Installation & Running

```bash
# Clone the project
git clone https://github.com/your-username/home.git
cd home

# Install pnpm (if not installed)
npm install -g pnpm

# Install dependencies
pnpm install

# Run in development mode
pnpm dev

# Build for production
pnpm build

# Preview build result
pnpm preview
```

### ⚙️ Deployment Methods
#### Static File Deployment

```bash
# Build the project
pnpm build

# Upload files in the dist directory to your server
```

#### Custom Website Links

Configure in `src/assets/siteLinks.json`:

```json
{
  "icon": "Blog",
  "name": "Blog",
  "link": "https://your-blog.com"
}
```

#### Custom Social Links

Configure your social media links in `src/assets/socialLinks.json`.

#### Custom Background Images

1. Place images in the `public/images/` directory
2. Name them in the format `background1.jpg`, `background2.jpg`
3. Modify the image count in `src/components/Background/index.vue`



### 🎨 Custom Styles

The project uses SCSS for style management:

- `src/style/global.scss` - Global styles
- `src/style/style.scss` - Main style file

### 📱 Mobile Adaptation

The project is fully adapted for mobile devices, supporting:

- Responsive layout
- Touch operations
- Mobile-optimized interactive experience

### 🛠️ Technology Stack

- **Frontend Framework**: [Vue 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Style Preprocessor**: SCSS
- **Icon Libraries**: [IconPark](https://iconpark.oceanengine.com/), [xicons](https://xicons.org/)
- **Font**: HarmonyOS Sans

### 📡 API Services

- [Jinge](https://api.dujin.org/) - Bing background API
- [Botian API](https://api.btstu.cn/) - Random image API
- [Hitokoto](https://hitokoto.cn/) - Random quote API



### 📄 License

This project continues to be developed based on the original author's open source license. Please comply with the relevant license terms.

### 🙏 Acknowledgments

- Thanks to the original author [imsyy](https://github.com/imsyy) for creating this excellent project
- Thanks to all developers who contributed to the project
- Thanks to all API service providers


**Original Project**: [https://github.com/imsyy/home](https://github.com/imsyy/home)
