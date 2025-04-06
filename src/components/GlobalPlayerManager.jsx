import { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useSpotifyInitializer } from "../hooks/useSpotifyInitializer";
import { setCurrentTrackInfoToNull } from "../slice/playerSlice";
import { usePlayerContext } from "../contexts/PlayerContext";

export const GlobalPlayerManager = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { player, setPlayer } = usePlayerContext();

	useSpotifyInitializer();

	useEffect(() => {
		if (!window.Spotify) return;
		if (!location.pathname || location.pathname.startsWith("/player")) return;

		// 離開 /player 頁面，清除播放器
		if (player && typeof player.disconnect === "function") {

			// 1. 移除 player_state_changed 監聽器（防止 Redux 被覆蓋）
			player.removeListener("player_state_changed");

			// 2. 延後斷線與清除 Redux，避免競爭條件
			setTimeout(() => {
				player.disconnect();
				setPlayer(null);
				dispatch(setCurrentTrackInfoToNull());
				// console.log("播放器已斷線，資訊已清除");
			}, 0);
		}
	}, [location.pathname]);

	return null;
};