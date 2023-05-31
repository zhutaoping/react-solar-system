import { MouseEvent, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAnimate } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePlanetStore } from '../store/PlanetStore'
import MobileMenu from './MobileMenu'
import sun from '/assets/images/white-sun.webp'

interface Props {
  height: number
  width: number
}

export default function Header({ height, width }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [wxy, setWXY] = useState({ width: 0, x: 0, y: 0 })
  const [isPortrait, setIsPortrait] = useState(false)

  const checkPortrait = useMediaQuery('(orientation:portrait)')

  useEffect(() => {
    setIsPortrait(checkPortrait)
  }, [checkPortrait])

  const { setSelectedPlanet } = usePlanetStore()
  const [scope, animate] = useAnimate()
  const isSmall = useMediaQuery('(min-width: 640px)')
  const isMedium = useMediaQuery('(min-width: 768px)')
  const navigate = useNavigate()

  const refHeader = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const client = scope.current.getBoundingClientRect()
    setWXY({ width: client.width, x: client.x, y: client.y })
  }, [scope])

  useEffect(() => {
    if (!isPortrait) return
    if (!expanded) {
      animate(
        scope.current,
        {
          x: 0,
          y: 0,
          scale: 1,
        },
        { duration: 0.7, ease: 'easeInOut' }
      )
      return
    }

    const posX = width / 2 - wxy.width / 2 - wxy.x
    const posY = height / 2 - wxy.width / 2 - wxy.y

    animate(
      scope.current,
      {
        x: posX,
        y: posY,
        scale: isSmall ? 2 : 1.5,
      },
      { duration: 0.1, ease: 'easeInOut' }
    )
  }, [expanded, height, width, wxy, isMedium, animate, scope, isSmall])

  function handleClick(e: MouseEvent) {
    const targetEl = e.target as HTMLElement

    if (!isPortrait) {
      setSelectedPlanet('')
      return
    }

    if (expanded && targetEl.classList.contains('sun-img')) {
      setSelectedPlanet('')
      navigate('/')
    }

    setExpanded(prev => !prev)
  }

  return (
    <div
      ref={refHeader}
      className="header absolute left-auto right-8 top-0 z-10 h-fit py-4 text-2xl md:text-lg portrait:bottom-0 portrait:left-4 portrait:top-auto"
      onClick={e => handleClick(e)}
    >
      {isPortrait && (
        <div className="flex items-center gap-2">
          <img
            ref={scope}
            className={`sun-img ${expanded && 'expanded'}`}
            src={sun}
            height={40}
            width={40}
            alt="The Sun in white light"
          />
          <span className="pb-1">Solar System</span>
        </div>
      )}
      {!isPortrait && (
        <Link to="/" className="flex items-center gap-2">
          <img
            ref={scope}
            className={`sun-img md:scale-75 xl:scale-100 ${
              expanded && 'expanded'
            }`}
            src={sun}
            height={40}
            width={40}
            alt="The Sun in white light"
          />
          <span className="pb-1">Solar System</span>
        </Link>
      )}
      {isPortrait && (
        <MobileMenu
          expanded={expanded}
          sunEl={scope.current}
          refHeader={refHeader}
        />
      )}
    </div>
  )
}
