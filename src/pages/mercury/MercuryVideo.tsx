import SunVideo from "../../assets/videos/sun-clip.mp4";

export default function MercuryVideo() {
	return (
		<video
			className="h-full object-cover"
			src={SunVideo}
			autoPlay
			muted
			loop
			id="myVideo"
		/>
	);
}

const variants = {
	enter: {
		x: -500,
	},
	center: {
		zIndex: 10,
		x: 0,
		opacity: 1,
	},
	exit: {
		zIndex: 0,
		x: -500,
		opacity: 0,
	},
};
