import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/layout/Main";
import ErrorPage from "../components/ErrorPage";
import Services from "../components/Services";
import About from "../components/About";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import Order from "../components/Order";
import Dashboard from "../components/Dashboard";
import PrivateRoute from "../components/PrivetRoutes/PrivateRoute";

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
        path: "/dashboard",
        element: <Dashboard />,
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
]);

export default router;
