import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { planets } from '../constants'
import { useMediaQuery } from '../hooks/useMediaQuery'
import orbit from '../helper/orbit'

interface Props {
  expanded: boolean
}

export default function MobileMenu({ expanded }: Props) {
  const isSmall = useMediaQuery('(min-width: 640px)')

  useEffect(() => {
    const lis = document.querySelectorAll('ul li') as NodeListOf<HTMLElement>

    orbit({ lis, expanded, isSmall })
  }, [expanded, isSmall])

  return (
    <nav className={`orbit ${expanded ? 'expanded' : 'pointer-events-none'}`}>
      <ul className={`${expanded && 'expanded'}`}>
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
