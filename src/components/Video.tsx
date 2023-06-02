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
  const [posterAnimationComplete, setPosterAnimationComplete] = useState(false)
  // const [position, setPosition] = useState({ x: 0, y: 0 })

  const refVideo = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsPortrait(checkPortrait)
    // if (isSun || !animationComplete) return

    // let bounds = null
    // bounds = refVideo.current?.getBoundingClientRect()

    // if (bounds) {
    //   const posX = bounds.x + bounds.width / 2
    //   const posY = bounds.y + bounds.height / 2
    //   console.log('posX: ', posX)
    //   console.log('posY: ', posY)
    //   setPosition({ x: posX, y: posY })

    //   refVideo.current?.style.setProperty('--x', `${position.x}px`)
    //   refVideo.current?.style.setProperty('--y', `${position.y}px`)
    // }
  }, [checkPortrait, isSun])

  return (
    <div
      className={`scale-[70%] xl:scale-[80%] ${
        isSun ? '!scale-100 portrait:rotate-90' : ''
      } ${isSaturn ? '!scale-100 place-self-start' : ''} 
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
            variants={
              isPortrait && !isSun ? videoFromTopVariants : videoVariants
            }
            initial="enter"
            animate="center"
            exit="exit"
            onAnimationStart={() => setPosterAnimationComplete(false)}
            onAnimationComplete={() => {
              setPosterAnimationComplete(true)
            }}
            className={`${
              isSun ? 'isSun h-screen object-cover portrait:h-full ' : ''
            } ${canPlay && posterAnimationComplete ? 'hidden' : ''}`}
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
            ref={refVideo}
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
            className={`video ${
              isSun ? 'isSun h-screen object-cover portrait:h-full ' : ''
            } ${canPlay && posterAnimationComplete ? 'block' : 'hidden'} ${
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
