/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        md: '830px',
      },
      fontFamily: {
        display: ['var(--font-exo-2)'],
      },
    },
  },
  plugins: [],
}
