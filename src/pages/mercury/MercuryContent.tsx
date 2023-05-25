import { motion } from "framer-motion";
import { contentItem, contentVariants } from "../../aniVariants";

export default function MercuryContent() {
	return (
		<motion.article
			variants={contentVariants}
			initial="hidden"
			animate="show"
			exit="exit"
			className="space-y-1 ml-0 p-4"
		>
			<motion.h2 variants={contentItem} className="text-4xl font-display mb-4">
				Mercury
				<span className="ml-4 text-xl">planet</span>
			</motion.h2>
			<motion.p variants={contentItem} className="text-lg">
				On Mercury, a single day is two years long
			</motion.p>
			<motion.p variants={contentItem} className="text-lg">
				Has organic material and water ice
			</motion.p>
			<motion.p variants={contentItem} className="text-lg">
				Maidenless... I mean moonless
			</motion.p>
		</motion.article>
	);
}
