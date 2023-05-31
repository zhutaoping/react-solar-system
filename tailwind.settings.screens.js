import { screensRem } from './tailwind.settings'

const remToPx = rem => {
  return `${rem * 16}px`
}

const settingsScreens = {
  sm: remToPx(screensRem.sm),
  md: remToPx(screensRem.md),
  lg: remToPx(screensRem.lg),
  xl: remToPx(screensRem.xl),
  '2xl': remToPx(screensRem['2xl']),
}

export default settingsScreens
