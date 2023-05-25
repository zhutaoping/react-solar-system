import { create } from "zustand";

interface PlanetStore {
	selectedPlanet: string;
	setSelectedPlanet: (planet: string) => void;
}

export const usePlanetStore = create<PlanetStore>()((set) => ({
	selectedPlanet: "",
	setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
}));
