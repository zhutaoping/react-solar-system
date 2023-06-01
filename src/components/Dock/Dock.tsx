import { useMotionValue, motion } from 'framer-motion'
import { usePlanetStore } from '../../store/PlanetStore'
import { floatVariants } from '../../utils/animationVariants'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { PLANET_ICONS } from '../../constants'
import PlanetIcon from './PlanetIcon'

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
        className="absolute bottom-0 right-12 z-10 flex items-end rounded-2xl p-4 xl:right-2 xl:top-1/2 xl:-translate-y-1/2 xl:flex-col"
      >
        {PLANET_ICONS.map(p => (
          <PlanetIcon
            isXL={isXL}
            key={p.name}
            mouseMove={mouseMove}
            planet={p.name}
            img={p.icon}
            selectedPlanet={selectedPlanet}
            setSelectedPlanet={setSelectedPlanet}
          />
        ))}
      </ul>
      {selectedPlanet === '' ? (
        <motion.span
          variants={floatVariants}
          animate="animate"
          className="rocket absolute bottom-8 right-8 hidden sm:block"
          layoutId="rocket"
        >
          🚀
        </motion.span>
      ) : null}
    </nav>
  )
}
