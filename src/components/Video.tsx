import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { videoFromTopVariants, videoVariants } from '../lib/animationVariants'

interface Props {
  src: string
  isSun?: boolean
  isMercury?: boolean
}

export default function Video({ src, isSun, isMercury }: Props) {
  const underMedium = useMediaQuery('(max-width: 829px)')

  return (
    <div
      className={`xs:-translate-y-1/3 sm:translate-y-0 ${
        isSun ? 'rotate-90 md:rotate-0 ' : ''
      } ${isMercury ? 'scale-90' : ''}`}
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
        key={underMedium.toString()}
        variants={underMedium && !isSun ? videoFromTopVariants : videoVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className={`md:h-screen ${isSun ? 'object-cover' : ''}`}
        src={src}
        autoPlay
        muted
        loop
      />
    </div>
  )
}
