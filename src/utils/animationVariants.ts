import { Variants } from 'framer-motion'

export const videoVariants = {
  enter: {
    scale: 1.5,
    rotate: -30,
    opacity: 0,
    x: -500,
    clipPath: 'circle(500px at center)',
  },
  center: (clipValue: number) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    x: 0,
    clipPath: `circle(${clipValue}px at center)`,
    transition: { type: 'tween', duration: 1, ease: 'easeOut' },
  }),
  exit: {
    // scale: 1.2,
    // rotate: -10,
    opacity: 0,
    x: -1000,
    clipPath: 'circle(500px at center)',
    transition: { type: 'tween', duration: 0.3, ease: 'easeIn' },
  },
}

export const videoFromTopVariants = {
  enter: {
    opacity: 0,
    y: -500,
    clipPath: 'circle(500px at center)',
  },
  center: (clipValue: number) => ({
    opacity: 1,
    y: 0,
    clipPath: `circle(${clipValue}px at center)`,
    transition: { type: 'tween', duration: 1, ease: 'easeOut' },
  }),
  exit: {
    opacity: 0,
    y: -1000,
    clipPath: 'circle(500px at center)',
    transition: { type: 'tween', duration: 0.3, ease: 'easeIn' },
  },
}

export const contentVariants = {
  hidden: {
    // opacity: 0,
  },
  show: {
    // opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    // opacity: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const contentItem = {
  hidden: {
    opacity: 0,
    x: 300,
    y: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -5000,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
}

export const floatVariants: Variants = {
  animate: {
    scale: 1.5,
    y: [0, 10, 0],
    transition: {
      scale: {
        duration: 0.2,
      },
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
}
