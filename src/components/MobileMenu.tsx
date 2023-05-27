import { Link } from 'react-router-dom'
import { planets } from '../constants'
import { useEffect } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

interface Props {
  expanded: boolean
}

export default function MobileMenu({ expanded }: Props) {
  const isSmall = useMediaQuery('(min-width: 640px)')

  useEffect(() => {
    const lis = document.querySelectorAll('ul li') as NodeListOf<HTMLElement>

    if (!expanded) {
      lis.forEach((item, index) => {
        item.style.setProperty(`--x${index + 1}`, `0px`)
        item.style.setProperty(`--y${index + 1}`, `0px`)
      })
    } else {
      const radius = isSmall ? 200 : 150
      const step = Math.PI / (180 * 180)
      let angle = 0
      let myReq: number

      const orbit = () => {
        lis.forEach((item, index) => {
          if (isSmall) {
            item.classList.add('isSmall')
          } else {
            item.classList.remove('isSmall')
          }

          item.style.setProperty(
            `--x${index + 1}`,
            `${radius * Math.cos((index * 45 * Math.PI) / 180 + angle)}px`
          )
          item.style.setProperty(
            `--y${index + 1}`,
            `${radius * Math.sin((index * 45 * Math.PI) / 180 + angle)}px`
          )
          angle += step
        })
        myReq = window.requestAnimationFrame(orbit)
      }

      window.requestAnimationFrame(orbit)

      // for (const [idx, li] of lis.entries()) {
      lis.forEach(li => {
        li.addEventListener('mouseenter', () => {
          window.cancelAnimationFrame(myReq)
        })

        li.addEventListener('mouseleave', () => {
          window.requestAnimationFrame(orbit)
        })
      })

      return () => {
        window.cancelAnimationFrame(myReq)
      }
    }
  }, [expanded, isSmall])

  return (
    <nav className={`orbit ${expanded ? 'expanded' : 'pointer-events-none'}`}>
      <ul className={`${expanded && 'expanded'}`}>
        {planets.map(p => (
          <li
            // layout
            className={`${expanded && 'expanded'}`}
            key={p.name}
          >
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
