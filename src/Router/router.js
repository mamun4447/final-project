import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/layout/Main";
import ErrorPage from "../components/ErrorPage";
import Services from "../components/Services";
import About from "../components/About";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import Order from "../components/Order";
import PrivateRoute from "../components/PrivetRoutes/PrivateRoute";
import SideNav from "../components/Dashboard/SideNav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
        loader: () => fetch("http://localhost:5000/services"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <SideNav />,
  },
]);

export default router;
