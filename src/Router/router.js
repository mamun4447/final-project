import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/layout/Main";
import ErrorPage from "../components/ErrorPage";
import Services from "../components/Services";
import About from "../components/About";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import Order from "../components/Order";

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
        loader: () => fetch("https://greeho-sheba-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <Order />,
        loader: ({ params }) =>
          fetch(`https://greeho-sheba-server.vercel.app/services/${params.id}`),
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
      },
    ],
  },
]);

export default router;
