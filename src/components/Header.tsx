import { Link } from 'react-router-dom'
import { usePlanetStore } from '../store/PlanetStore'
import sun from '../assets/images/white-sun.jpg'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'

interface Props {
  children: React.ReactNode
  height: number
  width: number
}

export default function Header({ children, height, width }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [wxy, setWXY] = useState({ width: 0, x: 0, y: 0 })
  const isMobile = useMediaQuery('(max-width: 400px)')
  const isMedium = useMediaQuery('(min-width: 830px)')

  const { setSelectedPlanet } = usePlanetStore()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const client = scope.current.getBoundingClientRect()
    setWXY({ width: client.width, x: client.x, y: client.y })
  }, [scope])

  useEffect(() => {
    if (isMedium) return
    if (!expanded) {
      animate(
        scope.current,
        {
          x: 0,
          y: 0,
        },
        { duration: 0.3, ease: 'easeInOut' }
      )
      return
    }

    const posX = width / 2 - wxy.width / 2 - wxy.x
    const posY = height / 3

    animate(
      scope.current,
      {
        x: posX,
        y: -posY,
      },
      { duration: 0.3, ease: 'easeInOut' }
    )
  }, [expanded, height, width, wxy, isMedium, animate, scope])

  function handleClick() {
    if (isMedium) {
      setSelectedPlanet('')
      return
    }
    setExpanded(!expanded)
  }

  return (
    <div
      className="header absolute bottom-4 left-4 z-10 py-4 text-4xl md:left-auto md:right-8 md:top-0"
      onClick={handleClick}
    >
      {!isMedium && (
        <nav className="flex items-center gap-2">
          <img
            ref={scope}
            className={`sun-img bg-transparent ${expanded && 'expanded'}`}
            src={sun}
            height={50}
            width={50}
            alt="The Sun in white light"
          />
          <span className="pb-1">Solar System</span>
        </nav>
      )}
      {isMedium && (
        <Link to="/" className="flex items-center gap-2">
          <img
            ref={scope}
            className={`sun-img bg-transparent ${expanded && 'expanded'}`}
            src={sun}
            height={50}
            width={50}
            alt="The Sun in white light"
          />
          <span className="pb-1">Solar System</span>
        </Link>
      )}
      {children}
    </div>
  )
}
