import { useMotionValue, motion, useAnimate } from "framer-motion";
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
import { floatVariants } from "../../animationVariants";

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

	const mouseY = useMotionValue(Infinity);

	return (
		<nav ref={scope}>
			<ul
				onMouseMove={(e) => {
					mouseY.set(e.pageY);
				}}
				onMouseLeave={() => mouseY.set(Infinity)}
				className="absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-2 flex xl:flex-col xl:items-end rounded-2xl p-4 bottom-2"
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
					variants={floatVariants}
					animate="animate"
					className="hidden sm:block rocket absolute bottom-8 right-8"
					layoutId="rocket"
				>
					🚀
				</motion.span>
			) : null}
		</nav>
	);
}
