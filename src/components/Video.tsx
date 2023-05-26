import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { videoFromTopVariants, videoVariants } from '../animationVariants'

interface Props {
  src: string
  isSun?: boolean
}

export default function MercuryVideo({ src, isSun }: Props) {
  const isSmall = useMediaQuery('(max-width: 400px)')

  return (
    <div
      className={`xs:-translate-y-1/3 sm:translate-y-0 ${
        isSun ? 'rotate-90 lg:rotate-0 ' : ''
      }`}
    >
      <motion.video
        /**
         ** <from stackoverflow>
         ** Because the component is already rendered and is
         ** still the same component even if the origin prop being
         ** passed to the component has changed. Add a key prop to
         ** the component with the isSmall value so that when the
         ** value changes, React will re-render the component.
         */
        key={isSmall.toString()}
        variants={isSmall && !isSun ? videoFromTopVariants : videoVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`lg:h-screen ${isSun ? 'object-cover' : 'first-letter:'}`}
        src={src}
        autoPlay
        muted
        loop
      />
    </div>
  )
}