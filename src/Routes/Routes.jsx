import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../Components/CoffeeCard";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCard />,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCard />,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      { path: "/coffees", element: <Coffees /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

export default routes;
