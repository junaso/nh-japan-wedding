import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Invitation from "./pages/Invitation";
import Location from "./pages/Location";
import Gallery from "./components/Gallery";
import Guestbook from "./pages/Guestbook";
import Share from "./pages/Share";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/invitation", element: <Invitation /> },
  { path: "/location", element: <Location /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/guestbook", element: <Guestbook /> },
  { path: "/share", element: <Share /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
