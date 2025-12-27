# Lando Norris (LN4) Landing Page

A modern, high-performance landing page for Lando Norris featuring smooth animations, 3D elements, and an immersive user experience.

> **Note**: This project is a clone/implementation based on designs and concepts from [DesignByte Studio](https://studio.designbyte.dev).

## 🚀 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) (TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using @theme directive)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform) + [@gsap/react](https://greensock.com/react/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs
- **Animations**: [Rive](https://rive.app/) for interactive animations

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/         # Page sections (Hero, Shop, Helmets, etc.)
│   │   ├── cards/            # Reusable card components
│   │   └── ui/               # UI components (backgrounds, buttons, etc.)
│   ├── assets/               # JSON data files
│   ├── types/                # TypeScript type definitions
│   ├── app.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles & Tailwind theme
├── public/
│   ├── images/               # Static image assets
│   ├── fonts/                # Custom fonts (Brier Bold, wght)
│   └── riv-animations/       # Rive animation files
└── local-docs/               # Internal documentation (git-ignored)
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd londonoriss-main
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
# or
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## 🎨 Features

- **Smooth Scrolling**: Lenis-powered smooth scroll with GSAP integration
- **Advanced Animations**: GSAP ScrollTrigger animations throughout
- **3D Elements**: Three.js integration for immersive experiences
- **Responsive Design**: Mobile-first responsive layout
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Custom Typography**: Brier Bold (serif) and custom sans-serif fonts
- **Interactive Elements**: Hover effects, magnetic buttons, and scroll-triggered animations

## 📝 Configuration

### Tailwind CSS

Tailwind is configured using the modern v4 `@theme` directive in `src/index.css`. This replaces the traditional `tailwind.config.js` for theme customization.

### GSAP

GSAP plugins (ScrollTrigger) are registered in `src/app.tsx`. All animations use GSAP for consistent, performant animations.

### Fonts

Custom fonts are located in `public/fonts/`:
- `Brier-Bold.woff2` - Used for serif typography
- `wght.woff2` - Used for sans-serif typography

## 🧩 Key Components

- **Hero**: Main landing section with 3D elements
- **Introduction**: Brand introduction section
- **Horizontal Scroll**: Horizontal scrolling gallery
- **Track Mode**: On/off track content section
- **Helmets**: Helmet showcase gallery
- **Shop**: Store section with merchandise
- **Partners**: Partner/collaboration showcase
- **CTA**: Call-to-action section

## 📄 License

See [LICENSE](LICENSE) file for details.

**Design Attribution**: This project is based on designs and concepts from [DesignByte Studio](https://studio.designbyte.dev).

## 👨‍💻 Development

This project uses:
- TypeScript for type safety
- ESLint for code quality (if configured)
- Modern React patterns (hooks, functional components)
- CSS-in-JS via Tailwind utilities

## 📚 Additional Documentation

For detailed implementation notes and technical decisions, see the `local-docs/` directory (not tracked in git).

---

**Design by**: [DesignByte Studio](https://studio.designbyte.dev)  
**Implementation**: This repository  
Built with ❤️ for Lando Norris (LN4)
