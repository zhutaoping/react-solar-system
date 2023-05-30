import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { videoFromTopVariants, videoVariants } from '../utils/animationVariants'

interface Props {
  src?: string
  media?: HTMLImageElement
  isSun?: boolean
  isImage?: boolean
  isSaturn?: boolean
}

export default function Video({ media, src, isSun, isSaturn, isImage }: Props) {
  const underMedium = useMediaQuery('(max-width: 829px)')

  return (
    <div
      className={`scale-75 xs:-translate-y-1/3 sm:translate-y-0  ${
        isSun ? 'isSun rotate-90 !scale-100 md:rotate-0' : ''
      } ${isSaturn ? 'isSaturn !scale-100' : ''} 
    `}
    >
      {isImage && (
        <motion.img
          key={isSaturn ? '' : underMedium.toString()}
          variants={underMedium ? videoFromTopVariants : videoVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`md:h-screen ${isSaturn ? 'isSaturn' : ''}`}
          src={media?.src}
          alt={media?.alt}
        />
      )}
      {!isImage && (
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
          variants={
            underMedium && !isSun ? videoFromTopVariants : videoVariants
          }
          initial="enter"
          animate="center"
          exit="exit"
          className={`md:h-screen ${isSun ? 'isSun object-cover' : ''}`}
          src={src}
          autoPlay
          muted
          loop
        />
      )}
    </div>
  )
}
