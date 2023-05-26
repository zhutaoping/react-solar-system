import { useRef } from 'react'
import { MotionValue, motion, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  mouseY: MotionValue
  planet: string
  img: string
  selectedPlanet: string
  setSelectedPlanet: (planet: string) => void
}

export default function PlanetIcon({
  mouseY,
  planet,
  img,
  selectedPlanet,
  setSelectedPlanet,
}: Props) {
  const ref = useRef<HTMLLIElement>(null)

  //* distance = mouseY minus the center of the icon
  const distance = useTransform(mouseY, val => {
    //* nullish coalescing operator: null and undefined
    //* not falsy: false, 0, NaN, ""(empty string)
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, width: 0 }
    return val - bounds.y - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40])

  const width = useSpring(widthSync, {
    stiffness: 200,
    mass: 0.1,
    damping: 15,
  })

  return (
    <motion.li
      onClick={() => setSelectedPlanet(planet)}
      key={planet}
      whileTap={{ rotateZ: 360 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      ref={ref}
      style={{ width }}
      className="relative aspect-square w-10 rounded-full  "
    >
      <Link to={`${planet}`}>
        <img
          src={img}
          className="h-full w-full object-contain"
          height={500}
          width={500}
          alt={`Picture of the ${planet}}`}
        />
      </Link>
      {planet === selectedPlanet ? (
        <motion.span className="absolute top-0" layoutId="rocket">
          🚀
        </motion.span>
      ) : null}
    </motion.li>
  )
}
