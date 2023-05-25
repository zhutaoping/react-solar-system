import { useMotionValue, motion, useAnimate, Variants } from "framer-motion";
import { usePlanetStore } from "../../store/PlanetStore";
import PlanetIcon from "./PlanetIcon";

import imgMercury from "../../assets/images/mercury.png";
import imgVenus from "../../assets/images/venus.png";
import imgEarth from "../../assets/images/earth.png";
import imgMars from "../../assets/images/mars.png";
import imgJupiter from "../../assets/images/jupiter.png";
import imgSaturn from "../../assets/images/saturn.png";
import imgUranus from "../../assets/images/uranus.png";
import imgNeptune from "../../assets/images/neptune.png";

const planets = [
	{ name: "mercury", img: imgMercury },
	{ name: "venus", img: imgVenus },
	{ name: "earth", img: imgEarth },
	{ name: "mars", img: imgMars },
	{ name: "jupiter", img: imgJupiter },
	{ name: "saturn", img: imgSaturn },
	{ name: "uranus", img: imgUranus },
	{ name: "neptune", img: imgNeptune },
];

export default function Dock() {
	const { selectedPlanet, setSelectedPlanet } = usePlanetStore();
	const [scope, animate] = useAnimate();

	// useEffect(() => {
	// 	// This "li" selector will only select children
	// 	// of the element that receives `scope`.
	// 	animate("span", { scale: 1.2 });
	// });

	const mouseY = useMotionValue(Infinity);

	return (
		<nav ref={scope}>
			<ul
				onMouseMove={(e) => {
					mouseY.set(e.pageY);
				}}
				onMouseLeave={() => mouseY.set(Infinity)}
				className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col  items-end rounded-2xl  p-4"
			>
				{planets.map((p) => (
					<PlanetIcon
						key={p.name}
						mouseY={mouseY}
						planet={p.name}
						img={p.img}
						selectedPlanet={selectedPlanet}
						setSelectedPlanet={setSelectedPlanet}
					/>
				))}
			</ul>
			{selectedPlanet === "" ? (
				<motion.span
					variants={float}
					animate="animate"
					className="rocket absolute bottom-8 right-8"
					layoutId="rocket"
				>
					🚀
				</motion.span>
			) : null}
		</nav>
	);
}

const float: Variants = {
	animate: {
		scale: 1.5,
		y: [0, 10, 0],
		transition: {
			scale: {
				duration: 0.2,
			},
			repeat: Infinity,
			duration: 2,
			repeatType: "reverse",
			ease: "easeInOut",
		},
	},
};
