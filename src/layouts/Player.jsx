import { Link, Outlet } from "react-router";
import { useEffect, useState } from "react";
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
				<div className="overlay bg-black top-0 bottom-0 start-0 end-0 d-block position-absolute z-3 opacity-75 d-flex justify-content-center align-items-center text-center flex-column">
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
			{isLoading && (
				<div className="overlay bg-black top-0 bottom-0 start-0 end-0 d-block position-absolute z-3 opacity-75 d-flex justify-content-center align-items-center text-center flex-column">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="64"
						height="64"
						viewBox="-10 -10 44 44"
						fill="none"
					>
						<defs>
							<filter
								id="glow"
								x="-100%"
								y="-100%"
								width="300%"
								height="300%"
							>
								{/* 強化發光效果，使用更高的 stdDeviation 和更亮的透明度 */}
								<feDropShadow
									dx="0"
									dy="0"
									stdDeviation="2"
									floodColor="white"
									floodOpacity="0.8"
								/>
								<feDropShadow
									dx="0"
									dy="0"
									stdDeviation="6"
									floodColor="white"
									floodOpacity="0.6"
								/>
								<feDropShadow
									dx="0"
									dy="0"
									stdDeviation="10"
									floodColor="white"
									floodOpacity="0.4"
								/>
							</filter>
						</defs>
						<path
							d="M2 12h2.49a2 2 0 0 0 1.93-1.46l2.35-8.36a.25.25 0 0 1 .48 0l2.35 19.64a.25.25 0 0 0 .48 0l2.35-8.36A2 2 0 0 1 19.52 12H22"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							pathLength="1"
							strokeDasharray="1"
							strokeDashoffset="1"
							filter="url(#glow)"
						>
							<animate
								attributeName="stroke-dashoffset"
								from="1"
								to="0"
								dur="1s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="stroke-opacity"
								values="0.3;0.9;0.3"
								dur="1s"
								repeatCount="indefinite"
							/>
						</path>
					</svg>
				</div>
			)}
		</>
	);
}
export default Player;
