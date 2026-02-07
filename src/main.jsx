import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { GadgetProvider } from "./context/GadgetContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GadgetProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </GadgetProvider>
  </StrictMode>
);
