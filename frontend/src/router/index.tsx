import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { paths } from "./paths";
import Home from "../cores/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: paths.home,
        element: <Home />,
      },
      {
        path: paths.trading,
        element: "Trading",
      },
      {
        path: paths.userProfile,
        element: "User Profile",
      },
    ],
  },
]);

export default router;
