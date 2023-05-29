import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { planets } from '../constants'
import { useMediaQuery } from '../hooks/useMediaQuery'
import orbiting from '../utils/orbiting'

interface Props {
  expanded: boolean
  sunEl: HTMLElement
  refHeader: React.RefObject<HTMLDivElement>
}

export default function MobileMenu({ expanded, sunEl, refHeader }: Props) {
  const isSmall = useMediaQuery('(min-width: 640px)')

  useEffect(() => {
    const lis = document.querySelectorAll(
      '.orbit ul li'
    ) as NodeListOf<HTMLElement>

    orbiting({ lis, sunEl, refHeader, expanded, isSmall })
  }, [expanded, sunEl, isSmall, refHeader])

  return (
    <nav className={`orbit ${expanded ? 'expanded' : 'pointer-events-none'}`}>
      <ul>
        {planets.map(p => (
          <li className={`${expanded && 'expanded'}`} key={p.name}>
            <Link to={`/${p.name}`}>
              <img
                className=""
                width={50}
                src={p.img}
                alt={`Picture of ${p.name}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
