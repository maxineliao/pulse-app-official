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
import "../assets/scss/all.scss";
import UsersSavedAlbums from "../pages/Player/UsersSavedAlbums";
import UsersFollowedArtists from "../pages/Player/UsersFollowedArtists";
import SinglePlaylist from "../pages/Player/SinglePlaylist";
import SearchSong from "../pages/Player/SearchTrack";
import SearchArtist from "../pages/Player/SearchArtist";
import SearchAlbum from "../pages/Player/SearchAlbum";
import SearchPlaylist from "../pages/Player/SearchPlaylist";
import AlbumTrackDetail from "../pages/Player/AlbumTrackDetail";
import ArtistDetail from "../pages/Player/ArtistDetail";
import UsersPlaylists from "../pages/Player/UsersPlaylists";
import App from "../layouts/App";
import ViewCategories from "../pages/Player/ViewCategories";
import CategoryResult from "../pages/Player/CategoryResult";
import SubscriptionPayment from "../pages/Web/SubscriptionPayment";

const router = createHashRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "player",
				element: <Player />,
				children: [
					{
						path: "",
						element: <PlayerIndex />,
					},
					{
						path: "categories",
						element: <ViewCategories />,
					},
					{
						path: "categories/:id",
						element: <CategoryResult />,
					},
					{
						path: "result",
						element: <SearchResult />,
					},
					{
						path: "saved_albums",
						element: <UsersSavedAlbums />,
					},
					{
						path: "search_tracks",
						element: <SearchSong />,
					},
					{
						path: "search_artists",
						element: <SearchArtist />,
					},
					{
						path: "search_albums",
						element: <SearchAlbum />,
					},
					{
						path: "search_playlists",
						element: <SearchPlaylist />,
					},
					{
						path: "albumTrack_detail",
						element: <AlbumTrackDetail />,
					},
					{
						path: "artist_detail",
						element: <ArtistDetail />,
					},
					{
						path: "followed_artists",
						element: <UsersFollowedArtists />,
					},
					{
						path: "playlist/:id",
						element: <SinglePlaylist />,
					},
					{
						path: "my_playlists",
						element: <UsersPlaylists />,
					},
				],
			},
			{
				path: "",
				element: <Web />,
				children: [
					{
						path: "",
						element: <WebIndex />,
					},
					{
						path: "subscription_plans",
						element: <SubscriptionPlans />,
					},
					{
						path: "member_center",
						element: <MemberCenter />,
					},
					{
						path: "payment",
						element: <SubscriptionPayment />,
					},
				],
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

export default router;
