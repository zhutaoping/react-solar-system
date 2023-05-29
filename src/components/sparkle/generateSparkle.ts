import { random } from '../../utils/random'

export type SparkleState = {
  id: string
  createdAt: number
  color: string
  size: number
  style: {
    top: string
    left: string
    zIndex: number
  }
}

export const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      // Pick a random spot in the available space
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      zIndex: 2,
    },
  }

  return sparkle
}
