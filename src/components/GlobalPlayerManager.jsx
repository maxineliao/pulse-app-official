import { useEffect } from "react";
import { useLocation } from "react-router";
import { useSpotifyPlayer } from "../hooks/useSpotifyPlayer";
import { useDispatch } from "react-redux";
import { useSpotifyInitializer } from "../hooks/useSpotifyInitializer";
import { clearPlayerState } from "../slice/playerSlice";
export const GlobalPlayerManager = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { player, pause } = useSpotifyPlayer();

  useSpotifyInitializer();

  useEffect(() => {
    if (!location.pathname || location.pathname.startsWith("/player")) return;

    let retryCount = 0;
    const tryPause = async () => {
      if (player && typeof player.pause === "function") {
        // console.log("🎧 離開播放器頁面，嘗試暫停播放");
        await pause();
        dispatch(clearPlayerState());
      } else if (retryCount < 10) {
        retryCount++;
        setTimeout(tryPause, 200);
      } else {
        // console.log("無法暫停播放器，player 未初始化");
      }
    };

    tryPause();
  }, [location.pathname]);
  return null;
};
