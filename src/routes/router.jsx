import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../components/Login/Login";

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
      {},
      {
        path: "/add-plants",
        element: <h1>This is /add-plants</h1>,
      },
    ],
  },
]);

export default router;
