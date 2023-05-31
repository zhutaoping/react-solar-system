import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { videoFromTopVariants, videoVariants } from '../utils/animationVariants'
import { useEffect, useState } from 'react'

interface Props {
  src?: string
  media?: HTMLImageElement
  isSun?: boolean
  isImage?: boolean
  isSaturn?: boolean
}

export default function Video({ media, src, isSun, isSaturn, isImage }: Props) {
  const [isPortrait, setIsPortrait] = useState(false)
  const checkPortrait = useMediaQuery('(orientation:portrait)')

  useEffect(() => {
    setIsPortrait(checkPortrait)
  }, [checkPortrait])

  return (
    <div
      className={`scale-[70%] xl:scale-[80%] ${
        isSun ? 'isSun !scale-100 portrait:rotate-90' : ''
      } ${isSaturn ? 'isSaturn !scale-100 place-self-start' : ''} 
    `}
    >
      {isImage && (
        <motion.img
          key={isSaturn ? '' : isPortrait.toString()}
          variants={isPortrait ? videoFromTopVariants : videoVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`${isSaturn ? 'isSaturn' : ''}`}
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
          key={isPortrait.toString()}
          variants={isPortrait && !isSun ? videoFromTopVariants : videoVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`${
            isSun ? 'isSun h-screen object-cover portrait:h-full' : ''
          }`}
          src={src}
          autoPlay
          muted
          loop
        />
      )}
    </div>
  )
}
