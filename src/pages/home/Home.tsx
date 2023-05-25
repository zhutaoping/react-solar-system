import SunContent from "./SunContent";
import SunVideo from "./SunVideo";

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row sm:h-screen 2xl:gap-20 items-center">
			<SunVideo />
			<SunContent />
		</main>
	);
}
