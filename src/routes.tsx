import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Mercury from "./pages/mercury/Mercury";
import Home from "./pages/home/Home";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <App />,
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
