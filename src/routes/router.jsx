import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Error page need to setup</h1>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/add-plants",
        element: <h1>This is /add-plants</h1>,
      },
    ],
  },
]);

export default router;
