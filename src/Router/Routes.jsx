import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/secret',
                element: <PrivateRoutes><Secret /></PrivateRoutes>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><DashBoard /></PrivateRoutes>,
        children: [
            // Normal user routes
            {
                path: 'userHome',
                element: <UserHome />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory />
            },

            // Admin routes
            {
                path: 'adminHome',
                element: <AdminRoutes><AdminHome /></AdminRoutes>
            },
            {
                path: 'addItems',
                element: <AdminRoutes><AddItems /></AdminRoutes>
            },
            {
                path: 'manageItems',
                element: <AdminRoutes><ManageItems /></AdminRoutes>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoutes><UpdateItem /></AdminRoutes>,
                loader: ({params}) => fetch(`https://server-two-ivory.vercel.app/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoutes><AllUsers /></AdminRoutes>
            },
        ]
    }
]);