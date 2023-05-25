import { motion } from "framer-motion";
import sunVideo from "../../assets/videos/sun-clip.mp4";
import { videoVariants } from "../../aniVariants";

export default function SunVideo() {
	return (
		<motion.video
			variants={videoVariants}
			initial="enter"
			animate="center"
			exit="exit"
			className="h-full object-cover"
			src={sunVideo}
			autoPlay
			muted
			loop
			id="myVideo"
		/>
	);
}
