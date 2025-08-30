# Zehna 🌟

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.13.4-ff6e43?logo=astro)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.10-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

A modern, responsive AI-powered mental health and wellness platform built with [Astro](https://astro.build/), featuring a comprehensive design system, multi-language support, and advanced UI components.

![Zehna Preview](public/images/8.jpg)

## 🌟 Key Products

- **Multi-language Support**: Full i18n with RTL/LTR layout support (English & Persian)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Comprehensive Design System**: Color palette, typography, components, and animations
- **Modern UI Components**: Interactive elements, testimonials, statistics, and more
- **Performance Optimized**: Fast loading with Astro's island architecture
- **Easy to Extend**: Well-structured codebase for customization
- **Dark Mode Support**: Theme switching with persistence
- **Accessibility Ready**: WCAG compliant components and patterns

## 🌍 Languages Supported

- English (LTR)
- Persian/Farsi (RTL)

## 🎨 Design System

Zehna includes a comprehensive design system with:

### Tailwind CSS

Utility-first CSS framework for rapid UI development with custom configurations.

### Color Palette

- **Primary**: Teal (#3CAC88) - Main accents and interactive elements
- **Secondary**: Light Teal (#99D2B4) - Secondary accents
- **Accent**: Pink (#ec4899) - Special highlights
- **Element Colors**: Fire (Orange/Red), Earth (Green), Air (Blue), Water (Cyan)
- **Neutrals**: Carefully balanced grays for backgrounds, text, and borders

### Typography

- **Headings**: Montserrat (serif-like) - Elegant and modern
- **Body Text**: Inter (sans-serif) - Highly readable
- **Persian Text**: IRANSans - Custom Persian font support

### Components

- Buttons (Primary, Secondary, Outline)
- Cards with hover effects
- Form elements
- Interactive mental health tools
- Animated elements

### Responsive Design

Mobile-first approach with responsive utilities for all screen sizes.

### RTL Support

Full support for right-to-left languages with proper text alignment and layout adjustments.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ismailabashidze/Zehna.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Zehna
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at `http://localhost:4321`.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 📁 Project Structure

```
zehna/
├── public/
│   ├── favicon.svg
│   └── pattern.svg
├── src/
│   ├── components/
│   │   ├── LanguageSwitcher.astro
│   │   ├── NewsletterSignup.astro
│   │   ├── Statistics.astro
│   │   ├── Testimonials.astro
│   ├── fonts/
│   │   └── IRANSans Web Fonts
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── blog.astro
│   │   ├── community.astro
│   │   ├── contact.astro
│   │   ├── design-system.astro
│   │   ├── faq.astro
│   │   ├── features.astro
│   │   ├── pricing.astro
│   │   ├── team.astro
│   │   └── fa/ (Persian translations)
│   ├── scripts/
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── i18n.js
├── astro.config.mjs
├── tailwind.config.cjs
├── postcss.config.cjs
└── package.json
```

## 🧩 Key Components

### Theme Components

Zehna provides a rich set of reusable components:

- **Interactive Data Visualizations**: Dynamic charts and data displays
- **Testimonial Carousels**: Animated customer feedback sections
- **Statistics Displays**: Animated counters and data visualization
- **Language Switchers**: Seamless multilingual support
- **Navigation Elements**: Responsive menus and breadcrumbs

### Layout Components

- **MainLayout**: Complete page structure with header, footer, and navigation
- **Card-based Layouts**: Flexible grid systems for content organization
- **Responsive Grids**: Adaptive layouts for all screen sizes

## 🌐 Internationalization (i18n)

The theme supports multiple languages through a custom i18n implementation:

- Language detection based on URL paths
- RTL layout support for right-to-left languages
- Custom fonts for different language scripts
- Translation utilities in `src/utils/i18n.js`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure responsive design is maintained

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed information on our code of conduct and development process.

## 📝 TODO for Future Development

For a detailed roadmap of planned theme improvements and enhancements, see [TODO.md](TODO.md).

- [ ] Expand design system with more thematic variations
- [ ] Add interactive components for data visualization
- [ ] Implement advanced animation and transition effects
- [ ] Create additional theme variations and customization options
- [ ] Enhance internationalization support for more languages
- [ ] Improve accessibility features and compliance
- [ ] Optimize performance for better user experience
- [ ] Add responsive design enhancements for all devices
- [ ] Implement dark mode and theme switching
- [ ] Create comprehensive documentation and examples

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Design inspired by modern mental health applications
- Design system principles based on modern UI/UX practices
- Persian font support with IRANSans
- Images from [Picsum Photos](https://picsum.photos/) for demonstration

## 📸 Screenshots

![Homepage](public/images/8.jpg)

*Homepage with animated background elements*