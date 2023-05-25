import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Mercury from "./pages/mercury/Mercury";
import Layout from "./Layout";

export default function App() {
	const location = useLocation();

	return (
		<div className="App">
			{/* <Header /> */}
			{/* {isXL && <Dock />} */}
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="mercury" element={<Mercury />} />
					</Route>
				</Routes>
			</AnimatePresence>
		</div>
	);
}
