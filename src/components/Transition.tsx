import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

export default function Transition({ children }: Props) {
	const location = useLocation();

	return (
		<AnimatePresence initial={true} mode="wait">
			<motion.div
				key={location.pathname}
				variants={variants}
				initial="enter"
				animate="center"
				exit="exit"
				transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
			>
				{children}
			</motion.div>
			//{" "}
		</AnimatePresence>
	);
}

const variants = {
	enter: {
		opacity: 0,
		x: -1000,
		// transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
	},
	center: {
		// zIndex: 10,
		opacity: 1,
		x: 0,
		// transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
	},
	exit: {
		// zIndex: 0,
		x: -1000,
		// transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
	},
};
