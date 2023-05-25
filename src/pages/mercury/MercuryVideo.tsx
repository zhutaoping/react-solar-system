import { motion } from "framer-motion";
import mercuryVideo from "../../assets/videos/mercury-clip-s.mp4";
import { videoFromTopVariants, videoVariants } from "../../aniVariants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function MercuryVideo() {
	const isSmall = useMediaQuery("(max-width: 400px)");

	return (
		<div className="h-full">
			<motion.video
				/**
				 ** <from stackoverflow>
				 ** Because the component is already rendered and is
				 ** still the same component even if the origin prop being
				 ** passed to the component has changed. Add a key prop to
				 ** the component with the isSmall value so that when the
				 ** value changes, React will re-render the component.
				 */
				key={isSmall.toString()}
				variants={isSmall ? videoFromTopVariants : videoVariants}
				initial="enter"
				animate="center"
				exit="exit"
				className="h-full"
				src={mercuryVideo}
				autoPlay
				muted
				loop
			/>
		</div>
	);
}
