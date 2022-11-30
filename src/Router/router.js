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
import DashLayout from "../components/layout/DashLayout";
import DashHome from "../components/Dashboard/DashHome";
import AddService from "../components/Dashboard/AddService";
import UserList from "../components/Dashboard/UserList";
import ProvidersList from "../components/Dashboard/ProvidersList";
import UsersOrder from "../components/Dashboard/Users/UsersOrder";
import UserHistory from "../components/Dashboard/Users/UserHistory";
import ProviderOrders from "../components/Dashboard/Provider/ProviderOrders";
import ProviderHistory from "../components/Dashboard/Provider/ProviderHistory";
import MyOrders from "../components/Dashboard/Provider/MyOrders";

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
        loader: () => fetch("http://localhost:8000/services"),
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:8000/services/${params.id}`),
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
        loader: () => fetch("http://localhost:8000/services"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome />,
      },
      {
        path: "/dashboard/users",
        element: <UserList />,
      },
      {
        path: "/dashboard/providers",
        element: <ProvidersList />,
      },
      {
        path: "/dashboard/add-service",
        element: <AddService />,
      },
      {
        path: "/dashboard/user-orders",
        element: <UsersOrder />,
      },
      {
        path: "/dashboard/user-history",
        element: <UserHistory />,
      },
      {
        path: "/dashboard/probider-orders",
        element: <ProviderOrders />,
      },
      {
        path: "/dashboard/provider-history",
        element: <ProviderHistory />,
      },
      {
        path: "/dashboard/provider-my_orders",
        element: <MyOrders />,
      },
    ],
  },
]);

export default router;
