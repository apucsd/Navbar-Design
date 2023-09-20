import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>, //main layout
    errorElement: <ErrorPage></ErrorPage>, //error page
    children: [
      {
        path: "/",
        element: <Home></Home>, //home page
      },
    ],
  },
]);

export default router;
