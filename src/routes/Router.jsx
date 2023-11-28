import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Membership from "../pages/Membership/Membership";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import AddPost from "../pages/Dashboard/AddPost/AddPost";
import MyPosts from "../pages/Dashboard/MyPosts/MyPosts";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import CommentsReport from "../pages/Dashboard/CommentsReport/CommentsReport";
import AddAnnouncement from "../pages/Dashboard/AddAnnouncement/AddAnnouncement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/membership",
        element: (
          <PrivateRoute>
            <Membership />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // user dashboard routes
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "add-post",
        element:<AddPost />,
      },
      {
        path: "my-posts",
        element: <MyPosts />,
      },

      // admin dashboard routes
      {
        path: "admin-profile",
        element:<AdminProfile />,
      },
      {
        path: "all-users",
        element: <AllUsers />
      },
      {
        path: "add-announcement",
        element: <AddAnnouncement />
      },
      {
        path: "reported-comments",
        element: <CommentsReport />
      }
    ]

  }
]);

export default router;
