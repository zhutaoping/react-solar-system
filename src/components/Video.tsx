import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { videoFromTopVariants, videoVariants } from '../utils/animationVariants'
import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

interface Props {
  src: string
  isSun?: boolean
  isMercury?: boolean
  isVenus?: boolean
  isEarth?: boolean
  isMars?: boolean
  isUranus?: boolean
  isNeptune?: boolean
  isImage?: boolean
  isJupiter?: boolean
  isSaturn?: boolean
}

export default function Video({
  src,
  isSun,
  isMercury,
  isVenus,
  isEarth,
  isMars,
  isJupiter,
  isSaturn,
  isUranus,
  isNeptune,
  isImage,
}: Props) {
  const [animationComplete, setAnimationComplete] = useState(false)

  const underMedium = useMediaQuery('(max-width: 829px)')
  const [ref, bounds] = useMeasure()

  useEffect(() => {
    console.log('bounds', bounds)
  }, [bounds])

  const onStart = () => {
    setAnimationComplete(false)
  }

  const onComplete = () => {
    setAnimationComplete(true)
  }

  const clipValue = 1000

  return (
    <div
      className={`scale-[0.8] xs:-translate-y-1/3 sm:translate-y-0 ${
        isSun ? 'isSun rotate-90 !scale-100 md:rotate-0' : ''
      } ${isSaturn ? '!scale-100' : ''}
    `}
    >
      {isImage && (
        <motion.img
          key={isSaturn ? '' : underMedium.toString()}
          variants={underMedium ? videoFromTopVariants : videoVariants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationStart={onStart}
          onAnimationComplete={onComplete}
          className={`md:h-screen`}
          src={src}
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
          ref={ref}
          custom={clipValue}
          key={underMedium.toString()}
          variants={
            underMedium && !isSun ? videoFromTopVariants : videoVariants
          }
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationStart={onStart}
          onAnimationComplete={onComplete}
          className={`md:h-screen ${isSun ? 'object-cover' : ''}`}
          src={src}
          autoPlay
          muted
          loop
        />
      )}
    </div>
  )
}
