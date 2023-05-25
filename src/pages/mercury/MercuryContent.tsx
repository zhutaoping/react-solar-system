import { motion } from "framer-motion";
import { contentItem, contentVariants } from "../../aniVariants";

export default function MercuryContent() {
	return (
		<motion.article
			variants={contentVariants}
			initial="hidden"
			animate="show"
			exit="exit"
			className="space-y-1"
		>
			<motion.h2 variants={contentItem} className="text-4xl font-display">
				Mercury
			</motion.h2>
			<motion.p variants={contentItem} className="text-lg">
				contents
			</motion.p>
			<motion.p variants={contentItem} className="text-lg">
				Lorem ipsum dolor sit amet.
			</motion.p>
			<motion.p variants={contentItem} className="text-lg">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ex
			</motion.p>
		</motion.article>
	);
}
