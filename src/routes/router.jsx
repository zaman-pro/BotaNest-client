import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddPlant from "../pages/AddPlant/AddPlant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/addPlant",
        Component: AddPlant,
      },
    ],
  },
]);

export default router;
