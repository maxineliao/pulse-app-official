import "../App.css";
import { createHashRouter } from "react-router-dom";
import Player from "../pages/player";
import PlayerIndex from "../pages/Player/PlayerIndex";
import SearchResult from "../pages/Player/SearchResult";
import { element } from "prop-types";
import Web from "../pages/Web";
import WebIndex from "../pages/Web/WebIndex";
// import AdminHeader from "../layouts/AdminHeader";
// import AdminInformation from "../pages/admin/AdminInformation";

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
  // {
  //   path: "/admin",
  //   element: <AdminHeader />,
  //   children: [
  //     {
  //       path: "AdminInformation",
  //       element: <AdminInformation />,
  //     },
  //   ],
  // },
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
      }
    ]
  }
]);

export default router;