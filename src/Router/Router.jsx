import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Signin from "../Pages/Signin/Signin";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import JobsApply from "../Pages/JobApply/JobsApply";

import MyApplications from "../Pages/MyApplication/MyApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    errorElement: <p> error</p>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
        hydrateFallbackElement: <p>loading</p>,
      },

      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobsApply></JobsApply>
          </PrivateRoutes>
        ),
      },

      {
        path: "/myApplication",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: Signin,
      },
    ],
  },
]);
