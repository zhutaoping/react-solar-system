import { motion } from "framer-motion";
import SunVideo from "../../assets/videos/sun-clip.mp4";
import { videoVariants } from "../../aniVariants";

export default function MercuryVideo() {
	return (
		<motion.video
			variants={videoVariants}
			initial="enter"
			animate="center"
			exit="exit"
			className="h-full object-cover"
			src={SunVideo}
			autoPlay
			muted
			loop
			id="myVideo"
		/>
	);
}
