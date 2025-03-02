import "../App.css";
import "../assets/scss/all.scss";
import { createHashRouter } from "react-router-dom";
import AdminHeader from "../layouts/AdminHeader";
import AdminInformation from "../pages/admin/AdminInformation";
import AdvertisementInformation from "../pages/admin/AdvertisementInformation";

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
      {
        path: "AdvertisementInformation",
        element: <AdvertisementInformation />,
      },
    ],
  },
]);

export default router;
