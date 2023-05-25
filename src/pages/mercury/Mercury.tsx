import MercuryContent from "./MercuryContent";
import MercuryVideo from "./MercuryVideo";

export default function Mercury() {
	return (
		<main className="flex flex-col xl:flex-row sm:h-screen 2xl:gap-20 items-center">
			<MercuryVideo />
			<MercuryContent />
		</main>
	);
}
