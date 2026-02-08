import { createBrowserRouter, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import SemanticLayout from "../layouts/SemanticLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <SemanticLayout />,
		children: [{ index: true, element: <Dashboard /> }],
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);
