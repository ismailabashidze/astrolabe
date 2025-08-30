# Zehna Project Context

## Project Overview

**Zehna** is a modern, responsive, AI-powered mental health and wellness platform built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). 

The project aims to provide a comprehensive platform for mental wellness, combining psychological insights with modern technology. It features a design system, multi-language support (English & Persian with RTL/LTR layout), and advanced UI components. The application is performance-optimized using Astro's island architecture.

Key technologies used:
- **Astro**: For building the static site.
- **Tailwind CSS**: For styling.
- **Alpine.js**: For lightweight interactivity.

## Building and Running

**Prerequisites:**
- Node.js (v18 or later)
- npm, yarn, or pnpm

The development server is already running on port 4321, so I don't need to start a new one.

**Development:**
Astro handles hot-reloading and development server setup.
```bash
# The dev server is already running, so this is not needed
# npm run dev
# or
# yarn dev
# or
# pnpm dev
```

**Building for Production:**
To create a production build:
```bash
npm run build
# or
yarn build
# or
pnpm build
```
The build output will be in the `dist/` directory.

**Previewing Production Build:**
To preview the production build locally:
```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure
```
C:\projects\zehna\landings\zehna - company\
├── public/                 # Static assets (images, fonts, favicon)
├── src/
│   ├── components/         # Reusable Astro components (e.g., charts, testimonials)
│   ├── fonts/              # Custom fonts (e.g., IRANSans for Persian)
│   ├── layouts/            # Page layouts (e.g., MainLayout)
│   ├── pages/              # Page routes (e.g., index.astro, about.astro, fa/ for Persian)
│   ├── scripts/            # Client-side JavaScript (if any)
│   ├── styles/             # Global CSS files
│   └── utils/              # Utility functions (e.g., i18n.js for translations)
├── astro.config.mjs        # Astro configuration (integrations, i18n)
├── tailwind.config.cjs     # Tailwind CSS configuration
├── postcss.config.cjs      # PostCSS configuration
└── package.json            # Project dependencies and scripts
```

## Development Conventions

- **Multi-language Support**: Implemented via a custom utility (`src/utils/i18n.js`) with translations stored in a JavaScript object. Language is determined by URL path (`/` for English, `/fa/` for Persian).
- **RTL Support**: Handled by the i18n utility and Tailwind CSS.
- **Styling**: Primarily done with Tailwind CSS classes directly in Astro components. Global styles are in `src/styles/`.
- **Component Structure**: Components are built using Astro's component syntax (`.astro` files), which can include HTML, CSS (scoped or global), and JavaScript/TypeScript.
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities.
- **Routing**: File-based routing in the `src/pages/` directory. Nested folders create nested routes.

## Key Directories and Files

- `src/pages/index.astro`: The main landing page, showcasing various features, components, and sections like hero, statistics, features, sample chart, testimonials, FAQ, and CTA.
- `src/layouts/MainLayout.astro`: The main layout component, likely including the header, footer, and overall page structure.
- `src/components/`: Contains reusable UI components like charts, zodiac signs, testimonials, newsletter signup, and statistics.
- `src/utils/i18n.js`: Implements the internationalization system, including translation strings and RTL detection.
- `astro.config.mjs`: Configures Astro integrations (Tailwind, Partytown) and i18n settings.
- `tailwind.config.cjs`: Configures the Tailwind CSS framework.
- `package.json`: Defines project dependencies and scripts.

## Important User Preferences

- The development server is already running on port 4321 (Astro project), so I should not run `pnpm dev` or similar commands.
- The user is on a Windows system (`win32`).