import MercuryContent from "./MercuryContent";
import MercuryVideo from "./MercuryVideo";

export default function Mercury() {
	return (
		<main className="flex h-screen gap-20 items-center">
			<MercuryVideo />
			<MercuryContent />
		</main>
	);
}
