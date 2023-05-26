import { Link } from 'react-router-dom'
import { usePlanetStore } from '../store/PlanetStore'
import sun from '../assets/images/white-sun.jpg'

export default function Header() {
  const { setSelectedPlanet } = usePlanetStore()

  return (
    <div
      className="absolute bottom-4 left-4 py-4 text-4xl lg:left-auto lg:right-8 lg:top-0"
      onClick={() => setSelectedPlanet('')}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={sun} height={50} width={50} alt="The Sun in white light" />
        <span className="pb-1">Solar System</span>
      </Link>
    </div>
  )
}
