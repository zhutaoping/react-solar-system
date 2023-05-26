import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = () => {
			setMatches(media.matches);
		};

		if (typeof media.addEventListener === "function") {
			media.addEventListener("change", listener);
		} else {
			// media.addListener(listener);
		}

		return () => {
			if (typeof media.removeEventListener === "function") {
				media.removeEventListener("change", listener);
			} else {
				// media.removeListener(listenerList);
			}
		};
	}, [matches, query]);

	return matches;
}

// const isSmall = useMediaQuery("(max-width: 480px)");
// const isMedium = useMediaQuery("(max-width: 7680px)");
// const isLarge = useMediaQuery("(max-width: 1024px)");
// const isXL = useMediaQuery("(max-width: 1280px)");
