import { useAnimate } from 'framer-motion'
import { MouseEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sun from '../assets/images/white-sun.jpg'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePlanetStore } from '../store/PlanetStore'
import MobileMenu from './MobileMenu'

interface Props {
  height: number
  width: number
}

export default function Header({ height, width }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [wxy, setWXY] = useState({ width: 0, x: 0, y: 0 })

  const { setSelectedPlanet } = usePlanetStore()
  const [scope, animate] = useAnimate()
  const isSmall = useMediaQuery('(min-width: 640px)')
  const underMedium = useMediaQuery('(max-width: 829px)')
  const isMedium = useMediaQuery('(min-width: 830px)')
  const navigate = useNavigate()

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
          scale: 1,
        },
        { duration: 0.1, ease: 'easeInOut' }
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
        scale: 1.5,
      },
      { duration: 0.1, ease: 'easeInOut' }
    )
  }, [expanded, height, width, wxy, isMedium, animate, scope, isSmall])

  function handleClick(e: MouseEvent) {
    const targetEl = e.target as HTMLElement

    if (isMedium) {
      setSelectedPlanet('')
      return
    }

    if (expanded && targetEl.classList.contains('sun-img')) navigate('/')

    setExpanded(prev => !prev)
  }

  return (
    <div
      className="header absolute bottom-4 left-4 z-10 h-fit py-4 text-4xl md:left-auto md:right-8 md:top-0"
      onClick={e => handleClick(e)}
    >
      {!isMedium && (
        <nav className="flex items-center gap-2">
          <img
            ref={scope}
            className={`sun-img ${expanded && 'expanded'}`}
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
            className={`sun-img ${expanded && 'expanded'}`}
            src={sun}
            height={50}
            width={50}
            alt="The Sun in white light"
          />
          <span className="pb-1">Solar System</span>
        </Link>
      )}
      {underMedium && <MobileMenu expanded={expanded} />}
    </div>
  )
}
