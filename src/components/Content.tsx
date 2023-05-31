import { motion } from 'framer-motion'
import { contentItem, contentVariants } from '../utils/animationVariants'
import { useMediaQuery } from '../hooks/useMediaQuery'

interface Content {
  heading: string
  subheading: string
  description: string[]
}

interface Props {
  content: Content
  isSun?: boolean
}

export default function Content({ content }: Props) {
  const isMedium = useMediaQuery('(min-width: 768px)')

  return (
    <motion.article
      variants={contentVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="space-y-1 p-6 md:mr-7 md:p-0"
    >
      <motion.h2
        variants={contentItem}
        className={`mb-3 font-display text-xl md:text-lg xl:text-xl ${
          isMedium && 'portrait:text-3xl'
        }`}
      >
        {content.heading}
        <span
          className={`ml-4 text-xs xl:text-sm ${
            isMedium && 'portrait:text-lg'
          }`}
        >
          {content.subheading}
        </span>
      </motion.h2>
      <motion.p
        variants={contentItem}
        className={`text-base md:text-sm xl:text-base ${
          isMedium && 'portrait:text-lg'
        }`}
      >
        {content.description[0]}
      </motion.p>
      <motion.p
        variants={contentItem}
        className={`text-base md:text-sm xl:text-base ${
          isMedium && 'portrait:text-lg'
        }`}
      >
        {content.description[1]}
      </motion.p>
      <motion.p
        variants={contentItem}
        className={`text-base md:text-sm xl:text-base ${
          isMedium && 'portrait:text-lg'
        }`}
      >
        {content.description[2]}
      </motion.p>
    </motion.article>
  )
}
