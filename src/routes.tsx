import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Marriage from "./pages/Marriage";
import Share from "./pages/Share";

const router = createBrowserRouter([
  { path: "/", element: <Marriage /> },
  { path: "/marriage", element: <Marriage /> },
  { path: "/share", element: <Share /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
