import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddPlant from "../pages/AddPlant/AddPlant";
import AllPlants from "../pages/AllPlants/AllPlants";
import PrivateRoute from "../provider/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

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

      { path: "/register", Component: Register },
      { path: "/login", Component: Login },
      { path: "/forgotPassword", Component: ForgotPassword },
      {
        path: "/addPlant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
      {
        path: "/allPlants",
        element: (
          <PrivateRoute>
            <AllPlants />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://a10-bota-nest-server-side.vercel.app/plants"),

        hydrateFallbackElement: <h1>Loading...</h1>,
      },
    ],
  },
]);

export default router;
