import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page";
import Mercury from "./pages/mercury/Mercury";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "mercury",
				element: <Mercury />,
			},
		],
	},
]);

export default router;

{
	/* <AnimatePresence exitBeforeEnter>
	<Routes location={location} key={location.pathname}>
		<Route path="/" element={<HomePage />} />
	</Routes>
</AnimatePresence>; */
}
