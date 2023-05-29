import { useState } from 'react'
import SparkleInstance from './Sparkle'
import { SparkleState, generateSparkle } from './generateSparkle'
import { useRandomInterval } from '../../hooks/useRandomInterval'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { DEFAULT_COLOR } from '../../constants'
import range from '../../utils/range'
import Sparkle from './Sparkle'

interface Props {
  children: React.ReactNode
  color?: string
}

export default function Sparkles({
  color = DEFAULT_COLOR,
  children,
  ...delegated
}: Props) {
  const [sparkles, setSparkles] = useState<SparkleState[]>(() => {
    return range(3).map(() => generateSparkle(color))
  })

  const prefersReducedMotion = usePrefersReducedMotion()

  useRandomInterval(
    () => {
      const newSparkle = generateSparkle(color)

      const now = Date.now()

      const nextSparkles = sparkles.filter(sp => {
        const delta = now - sp.createdAt
        return delta < 750
      })

      nextSparkles.push(newSparkle)

      setSparkles(nextSparkles)
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  )

  return (
    <span className="wrapper relative inline-block">
      {sparkles.map(sp => (
        <Sparkle key={sp.id} color={sp.color} size={sp.size} style={sp.style} />
      ))}
      <strong className="child-wrapper relative z-[1] font-bold">
        {children}
      </strong>
    </span>
  )
}
