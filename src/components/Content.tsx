import { motion } from 'framer-motion'
import { contentItem, contentVariants } from '../utils/animationVariants'

interface Content {
  heading: string
  subheading: string
  description: string[]
}

interface Props {
  content: Content
  isSun?: boolean
}

export default function Content({ content, isSun }: Props) {
  return (
    <motion.article
      variants={contentVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="space-y-1 p-6 md:p-0"
    >
      <motion.h2
        variants={contentItem}
        className="mb-3 font-display text-xl md:text-lg xl:text-xl"
      >
        {content.heading}
        <span className="ml-4 text-xs">{content.subheading}</span>
      </motion.h2>
      <motion.p
        variants={contentItem}
        className="text-base md:text-sm xl:text-base"
      >
        {content.description[0]}
      </motion.p>
      <motion.p
        variants={contentItem}
        className="text-base md:text-sm xl:text-base"
      >
        {content.description[1]}
      </motion.p>
      <motion.p
        variants={contentItem}
        className="text-base md:text-sm xl:text-base"
      >
        {content.description[2]}
      </motion.p>
    </motion.article>
  )
}
