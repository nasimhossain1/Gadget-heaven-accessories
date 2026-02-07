import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import CategoryGadgets from "../pages/CategoryGadgets";
import ProductDetails from "../pages/ProductDetails";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { index: true, element: <CategoryGadgets /> },
          { path: "category/:categoryName", element: <CategoryGadgets /> }
        ]
      },
      {
        path: "details/:id",
        element: <ProductDetails />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);
