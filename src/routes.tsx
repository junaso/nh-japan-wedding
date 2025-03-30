import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Marriage from "./pages/Marriage";
import Share from "./pages/Share";
import Wedding from "./pages/Wedding";

const router = createBrowserRouter([
  { path: "/", element: <Marriage /> },
  { path: "/marriage", element: <Marriage /> },
  { path: "/wedding", element: <Wedding /> },
  { path: "/share", element: <Share /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
