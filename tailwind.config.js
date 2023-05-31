/** @type {import('tailwindcss').Config} */

import settingsFontSizes from './tailwind.settings.fontSizes'
import settingsScreens from './tailwind.settings.screens'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: settingsScreens,
      fontSize: settingsFontSizes,
      fontFamily: {
        display: ['var(--font-exo-2)'],
      },
    },
  },
  plugins: [],
}
