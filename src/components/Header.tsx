"use client";
import { Link } from "react-router-dom";
import { usePlanetStore } from "../store/PlanetStore";
import sun from "../assets/images/white-sun.jpg";

export default function Header() {
	const { selectedPlanet, setSelectedPlanet } = usePlanetStore();

	return (
		<div
			className="absolute bottom-4 xl:top-0 left-4 xl:left-auto xl:right-8 text-4xl py-4"
			onClick={() => setSelectedPlanet("")}
		>
			<Link to="/" className="flex gap-2 items-center">
				<img src={sun} height={50} width={50} alt="The Sun in white light" />
				<span className="pb-1">Solar System</span>
			</Link>
			{/* {selectedPlanet === "" ? (
				<motion.span className="absolute top-4 -right-9" layoutId="rocket">
					🚀
				</motion.span>
			) : null} */}
		</div>
	);
}
