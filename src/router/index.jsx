import "../App.css";
import "../assets/scss/all.scss";
import { createHashRouter } from "react-router-dom";
import AdminHeader from "../layouts/AdminHeader";
import AdminInformation from "../pages/admin/AdminInformation";

const router = createHashRouter([
  //   {
  //     path: "/",
  //     element: <AdminHeader />,
  //     children: [
  //       {
  //         path: "",
  //         element: < />,
  //       },
  //     ],
  //   },
  {
    path: "/admin",
    element: <AdminHeader />,
    children: [
      {
        path: "AdminInformation",
        element: <AdminInformation />,
      },
    ],
  },
]);

export default router;
