import { useMotionValue, motion } from 'framer-motion'
import { usePlanetStore } from '../../store/PlanetStore'
import { floatVariants } from '../../lib/animationVariants'
import PlanetIcon from './PlanetIcon'

import imgMercury from '../../assets/images/mercury.png'
import imgVenus from '../../assets/images/venus.png'
import imgEarth from '../../assets/images/earth.png'
import imgMars from '../../assets/images/mars.png'
import imgJupiter from '../../assets/images/jupiter.png'
import imgSaturn from '../../assets/images/saturn.png'
import imgUranus from '../../assets/images/uranus.png'
import imgNeptune from '../../assets/images/neptune.png'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const planets = [
  { name: 'mercury', img: imgMercury },
  { name: 'venus', img: imgVenus },
  { name: 'earth', img: imgEarth },
  { name: 'mars', img: imgMars },
  { name: 'jupiter', img: imgJupiter },
  { name: 'saturn', img: imgSaturn },
  { name: 'uranus', img: imgUranus },
  { name: 'neptune', img: imgNeptune },
]

export default function Dock() {
  const { selectedPlanet, setSelectedPlanet } = usePlanetStore()
  const isXL = useMediaQuery('(min-width: 1280px)')
  const mouseMove = useMotionValue(Infinity)

  return (
    <nav>
      <ul
        onMouseMove={e => {
          if (isXL) {
            mouseMove.set(e.pageY)
          } else {
            mouseMove.set(e.pageX)
          }
        }}
        onMouseLeave={() => mouseMove.set(Infinity)}
        className="absolute bottom-2 right-12 z-10 flex items-end rounded-2xl p-4 xl:right-2 xl:top-1/2 xl:-translate-y-1/2 xl:flex-col"
      >
        {planets.map(p => (
          <PlanetIcon
            isXL={isXL}
            key={p.name}
            mouseMove={mouseMove}
            planet={p.name}
            img={p.img}
            selectedPlanet={selectedPlanet}
            setSelectedPlanet={setSelectedPlanet}
          />
        ))}
      </ul>
      {selectedPlanet === '' ? (
        <motion.span
          variants={floatVariants}
          animate="animate"
          className="rocket absolute bottom-9 right-8 hidden lg:block"
          layoutId="rocket"
        >
          🚀
        </motion.span>
      ) : null}
    </nav>
  )
}
