import { Link } from 'react-router-dom'
import { planets } from '../constants'

export default function MobileMenu() {
  return (
    <nav className="">
      <ul>
        {planets.map(p => (
          <li
            className="absolute left-0 top-1/2 -z-10 -translate-y-1/2"
            key={p.name}
          >
            <Link to={`/${p.name}`}>
              <img width={50} src={p.img} alt={`Picture of ${p.name}`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
