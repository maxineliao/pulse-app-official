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
import UsersSavedAlbums from "../pages/Player/UsersSavedAlbums";
import UsersFollowedArtists from "../pages/Player/UsersFollowedArtists";
import UsersRecentlyPlayed from "../pages/Player/UsersRecentlyPlayed";
import UsersSinglePlaylist from "../pages/Player/UsersSinglePlaylist";

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
        path: "index",
        element: <PlayerIndex />
      },
      {
        path: "result",
        element: <SearchResult />
      },
      {
        path: "saved_albums",
        element: <UsersSavedAlbums />
      },
      {
        path: "followed_artists",
        element: <UsersFollowedArtists />
      },
      {
        path: "recently_played",
        element: <UsersRecentlyPlayed />
      },
      {
        path: "my_playlist/:id",
        element: <UsersSinglePlaylist />
      },
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