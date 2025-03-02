import "../App.css";
import { createHashRouter } from "react-router-dom";
import Player from "../layouts/player";
import PlayerIndex from "../pages/Player/PlayerIndex";
import SearchResult from "../pages/Player/SearchResult";
import Web from "../layouts/Web";
import WebIndex from "../pages/Web/WebIndex";
import SubscriptionPlans from "../pages/Web/SubscriptionPlans";
import MemberCenter from "../pages/Web/MemberCenter";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import AdminHeader from "../layouts/AdminHeader";
import AdminInformation from "../pages/admin/AdminInformation";
import AdvertisementInformation from "../pages/admin/AdvertisementInformation";
import '../assets/scss/all.scss';

const router = createHashRouter([
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
  {
    path: "/player",
    element: <Player />,
    children: [
      {
        path: "",
        element: <PlayerIndex />
      },
      {
        path: "result",
        element: <SearchResult />
      }
    ]
  },{
    path: "",
    element: <Web />,
    children: [
      {
        path: "",
        element: <WebIndex />
      },
      {
        path: "/subscription_plans",
        element: <SubscriptionPlans />
      },{
        path: "/member_center",
        element: <MemberCenter/>
      }
    ]
  },{
    path: "login",
    element: <Login />
  },{
    path: "register",
    element: <Register />
  }
]);

export default router;