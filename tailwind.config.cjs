/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3CAC88',
          dark: '#348E6D',
          light: '#5AC5A0',
        },
        secondary: {
          DEFAULT: '#99D2B4',
          dark: '#7ABE9A',
          light: '#B1DEC9',
        },
        accent: '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}