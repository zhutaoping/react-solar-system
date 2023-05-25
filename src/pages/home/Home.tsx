import SunContent from "./SunContent";
import SunVideo from "./SunVideo";

export default function Home() {
	return (
		<main className="flex h-screen gap-20 items-center">
			<SunVideo />
			<SunContent />
		</main>
	);
}
