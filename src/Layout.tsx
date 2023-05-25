import { Outlet } from "react-router-dom";
import Dock from "./components/Dock/Dock";
import Header from "./components/Header";

export default function Layout() {
	return (
		<>
			<Header />
			<Dock />
			<Outlet />
		</>
	);
}
