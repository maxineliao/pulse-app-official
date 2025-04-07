import { Link, Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";
import {
	logoutSpotify,
	selectSpotifyAccessToken,
	selectSpotifyRefreshToken,
} from "../slice/spotifyAuthSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PlayerHeader from "../components/Player/PlayerHeader";
import PlayerSideMenu from "../components/Player/PlayerSideMenu";
import PlayerComp from "../components/Player/PlayerComp";
import { Loading } from "../components/loading";

function Player() {
	const dispatch = useDispatch();
	const { refreshAccessToken } = useSpotifyAuth();
	const isAuth = useSelector((state) => state.auth.isAuth);
	const spotifyAccessToken = useSelector(selectSpotifyAccessToken);
	const spotifyRefreshToken = useSelector(selectSpotifyRefreshToken);
	const isLoading = useSelector((state) => state.loading.playerDataLoading);
	const isSpotifyAuth = isAuth && spotifyAccessToken && spotifyRefreshToken;

	useEffect(() => {
		if (isAuth) {
			if (spotifyAccessToken && spotifyRefreshToken) {
				refreshAccessToken();
			} else {
				dispatch(logoutSpotify());
			}
		}
		// if (!document.getElementById("spotify-sdk")) {
		// 	const script = document.createElement("script");
		// 	script.id = "spotify-sdk"; // 確保只插入一次
		// 	script.src = "https://sdk.scdn.co/spotify-player.js";
		// 	script.async = true;
		// 	document.body.appendChild(script);
		// }
	}, []);

	return (
		<>
			<PlayerHeader />
			<div className="container-fluid">
				<div className="row d-flex flex-lg-row flex-column-reverse">
					<div className="col-lg-3 col-12 player-scrollbar player-scrollbar-sm">
						<PlayerSideMenu />
					</div>
					<Outlet />
				</div>
			</div>
			<PlayerComp />
			{!isSpotifyAuth && (
				<div className="overlay bg-black top-0 bottom-0 start-0 end-0 d-block position-absolute z-3 opacity-75 d-flex justify-content-center align-items-center text-center flex-column h-100 position-fixed">
					<p>
						請先登入並連結 Spotify Premium 帳號
						<br />
						以體驗完整播放器功能
					</p>
					<Link to="/member_center" className="btn btn-primary">
						會員中心
					</Link>
				</div>
			)}
			{isLoading && <Loading />}
		</>
	);
}
export default Player;
