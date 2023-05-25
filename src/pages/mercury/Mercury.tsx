import MercuryContent from "./MercuryContent";
import MercuryVideo from "./MercuryVideo";
import { motion } from "framer-motion";

export default function Mercury() {
	return (
		<motion.main
			variants={variants}
			initial="enter"
			animate="center"
			exit="exit"
			transition={{ type: "tween", bounce: 1, ease: "easeInOut" }}
			className="flex h-screen gap-20 items-center"
		>
			<MercuryVideo />
			<MercuryContent />
		</motion.main>
	);
}

const variants = {
	enter: {
		opacity: 0,
		x: -1000,
	},
	center: {
		// zIndex: 10,
		opacity: 1,
		x: 0,
	},
	exit: {
		// zIndex: 0,
		opacity: 0,
		x: -1000,
	},
};
