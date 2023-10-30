/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '420px',
      // デフォルトのブレイクポイントを展開
      ...require('tailwindcss/defaultTheme').screens,
    },
    extend: {},
  },
  plugins: [],
}