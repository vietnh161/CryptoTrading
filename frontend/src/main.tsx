import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import router from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
