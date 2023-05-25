import { motion } from "framer-motion";
import { contentItem, contentVariants } from "../../aniVariants";

export default function SunContent() {
	return (
		<motion.article
			variants={contentVariants}
			initial="hidden"
			animate="show"
			exit="exit"
			className="space-y-1"
		>
			<motion.h2
				variants={contentItem}
				className="text-4xl font-display overflow-hidden"
			>
				Sun
			</motion.h2>
			<motion.p variants={contentItem} className="text-lg">
				Accounts for 99.86% of the mass in the solar system
			</motion.p>
			<motion.p variants={contentItem} className="text-lg">
				Almost a perfect sphere
			</motion.p>
			<motion.p variants={contentItem} className="text-lg">
				One day the Sun will consume the Earth
			</motion.p>
		</motion.article>
	);
}
