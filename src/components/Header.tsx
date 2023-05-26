import { Link } from 'react-router-dom'
import { usePlanetStore } from '../store/PlanetStore'
import sun from '../assets/images/white-sun.jpg'
import { useMediaQuery } from '../hooks/useMediaQuery'

interface Props {
  children: React.ReactNode
}

export default function Header({ children }: Props) {
  const { setSelectedPlanet } = usePlanetStore()
  const isLarge = useMediaQuery('(min-width: 1024px)')

  function handleClick() {
    if (isLarge) {
      setSelectedPlanet('')
      return
    }

    //* open dialog
  }

  return (
    <div
      className="absolute bottom-4 left-4 z-10 py-4 text-4xl lg:left-auto lg:right-8 lg:top-0"
      onClick={handleClick}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src={sun} height={50} width={50} alt="The Sun in white light" />
        <span className="pb-1">Solar System</span>
      </Link>
      {children}
    </div>
  )
}
