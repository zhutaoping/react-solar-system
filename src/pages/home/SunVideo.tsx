import sunVideo from "../../assets/videos/sun-clip.mp4";

export default function SunVideo() {
	return (
		<video
			className="h-full object-cover"
			src={sunVideo}
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
		// zIndex: 10,
		x: 0,
	},
	exit: {
		// zIndex: 0,
		x: -500,
	},
};
