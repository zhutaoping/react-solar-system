import { motion } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { videoFromTopVariants, videoVariants } from '../utils/animationVariants'
import { useEffect, useRef, useState } from 'react'

interface Props {
  image?: HTMLImageElement
  videoSrc?: string
  videoPoster?: string
  isSun?: boolean
  isImage?: boolean
  isSaturn?: boolean
}

export default function Video({
  image,
  videoSrc,
  videoPoster,
  isSun,
  isSaturn,
  isImage,
}: Props) {
  const [isPortrait, setIsPortrait] = useState(false)
  const checkPortrait = useMediaQuery('(orientation:portrait)')
  const [canPlay, setCanPlay] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsPortrait(checkPortrait)
    if (isSun) return

    const bounds = ref.current?.getBoundingClientRect()

    if (bounds && animationComplete) {
      const posX = bounds.x + bounds.width / 2
      const posY = bounds.y + bounds.height / 2

      ref.current?.style.setProperty('--x', `${posX}px`)
      ref.current?.style.setProperty('--y', `${posY}px`)
    }
  }, [checkPortrait, animationComplete, isSun])

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
          src={image?.src}
          alt={image?.alt}
        />
      )}
      {!isImage && (
        <>
          <motion.img
            key={isPortrait.toString() + 'poster'}
            variants={isPortrait ? videoFromTopVariants : videoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationStart={() => setAnimationComplete(false)}
            onAnimationComplete={() => {
              setAnimationComplete(true)
            }}
            className={`${canPlay ? 'hidden' : ''}`}
            src={videoPoster}
            alt={videoPoster}
          />

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
            key={isPortrait.toString()}
            variants={
              isPortrait && !isSun ? videoFromTopVariants : videoVariants
            }
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationStart={() => setAnimationComplete(false)}
            onAnimationComplete={() => {
              setAnimationComplete(true)
            }}
            className={`${
              isSun ? 'isSun h-screen object-cover portrait:h-full' : ''
            } ${canPlay ? 'block' : 'hidden'} ${
              animationComplete ? 'setClipPath' : ''
            }`}
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            muted
            loop
            onCanPlayThrough={() => {
              setCanPlay(true)
            }}
          />
        </>
      )}
    </div>
  )
}
