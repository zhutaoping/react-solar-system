import { motion } from 'framer-motion'
import { contentItem, contentVariants } from '../utils/animationVariants'
import Sparkles from './sparkle/Sparkles'

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
      className={`space-y-1 p-6 xs:-translate-y-full ${
        isSun ? 'sm:-translate-y-1/2 md:translate-y-0' : 'sm:translate-y-0'
      }`}
    >
      <motion.h2 variants={contentItem} className="mb-4 font-display text-4xl">
        {content.heading}
        <span className="ml-4 text-xl">{content.subheading}</span>
      </motion.h2>
      <motion.p variants={contentItem} className="text-lg">
        {content.description[0]}
      </motion.p>
      <motion.p variants={contentItem} className="text-lg">
        {content.description[1]}
      </motion.p>
      <motion.p variants={contentItem} className="text-lg">
        {content.description[2]}
      </motion.p>
    </motion.article>
  )
}
