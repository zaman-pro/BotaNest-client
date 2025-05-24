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
import MyPlants from "../pages/MyPlants/MyPlants";
import Loading from "../pages/Loading/Loading";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import UpdatePlant from "../pages/UpdatePlant/UpdatePlant";

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
        path: "/allPlants",
        Component: AllPlants,
      },
      {
        path: "/addPlant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPlants",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/plants/:id",
        element: (
          <PrivateRoute>
            <PlantDetails></PlantDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a10-bota-nest-server-side.vercel.app/plants/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/updatePlant/:id",
        element: (
          <PrivateRoute>
            <UpdatePlant></UpdatePlant>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a10-bota-nest-server-side.vercel.app/plants/${params.id}`
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);

export default router;
