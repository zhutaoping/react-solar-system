import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Dock from "./components/Dock/Dock";
import Header from "./components/Header";
import Mercury from "./pages/mercury/Mercury";

export default function App() {
	const location = useLocation();

	return (
		<div className="App">
			{/* <BrowserRouter> */}
			<Header />
			<Dock />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/mercury" element={<Mercury />} />
				</Routes>
			</AnimatePresence>
			{/* </BrowserRouter> */}
		</div>
	);
}
