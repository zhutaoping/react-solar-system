import { motion } from "framer-motion";
import sunVideo from "../../assets/videos/sun-clip.mp4";
import { videoVariants } from "../../aniVariants";

export default function SunVideo() {
	return (
		<div className="sun-vid-wrapper h-full rotate-90 lg:rotate-0">
			<motion.video
				variants={videoVariants}
				initial="enter"
				animate="center"
				exit="exit"
				className="h-full"
				src={sunVideo}
				autoPlay
				muted
				loop
			/>
		</div>
	);
}
