import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSpotifyAccessToken } from "../slice/spotifyAuthSlice";
import {
	setCurrentTrack,
	setCurrentContext,
	setIsPlaying,
	setProgress,
	setRepeatState,
	setDuration,
	setImage,
	setTrackName,
	setArtists,
	setArtistUri,
	setShuffle,
	setDeviceId,
} from "../slice/playerSlice";
import { useLocation } from "react-router";
import { usePlayerContext } from "../contexts/PlayerContext";

export const useSpotifyInitializer = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector(selectSpotifyAccessToken);
	const location = useLocation();
	const { setPlayer } = usePlayerContext();

	const volume = useSelector((state) => state.player.volume);
	const isPlayerInitialized = useRef(false);

	useEffect(() => {
		if (!accessToken) return;

		if (window.Spotify) {
			setupPlayer();
		} else {
			window.onSpotifyWebPlaybackSDKReady = setupPlayer;
		}

		return () => {
			if (!location.pathname.startsWith("/player")) {
				setPlayer(null);
				isPlayerInitialized.current = false;
			}
		};
	}, [accessToken]);

	const setupPlayer = () => {
		if (isPlayerInitialized.current) return;

		const spotifyPlayer = new window.Spotify.Player({
			name: "PULSE Web Player",
			getOAuthToken: (cb) => cb(accessToken),
			volume: volume / 100,
		});

		spotifyPlayer.addListener("player_state_changed", (state) => {
			if (!state) return;
			const currentTrack = state?.track_window?.current_track;

			if (!currentTrack || !currentTrack.album) return; // 防止 null

			dispatch(setCurrentTrack(currentTrack.uri));
			dispatch(setCurrentContext(state.context?.uri || null));
			dispatch(setIsPlaying(!state.paused));
			dispatch(setProgress(state.position));
			dispatch(
				setRepeatState(
					Number(state.repeat_mode) === 1
						? "context"
						: Number(state.repeat_mode) === 2
						? "track"
						: "off"
				)
			);
			dispatch(setDuration(state.duration));
			dispatch(setImage(currentTrack.album.images[0].url));
			dispatch(setTrackName(currentTrack.name));
			dispatch(
				setArtists(currentTrack.artists.map((a) => a.name).join(", "))
			);
			dispatch(setArtistUri(currentTrack.artists[0]?.uri));
			dispatch(setShuffle(state.shuffle));
		});

		spotifyPlayer.addListener("ready", ({ device_id }) => {
			// console.log("🎧 Spotify Player ready:", device_id);
			dispatch(setDeviceId(device_id));
		});

		spotifyPlayer.addListener("initialization_error", ({ message }) =>
			console.error("Init error:", message)
		);
		spotifyPlayer.addListener("authentication_error", ({ message }) =>
			console.error("Auth error:", message)
		);
		spotifyPlayer.addListener("account_error", ({ message }) =>
			console.error("Account error:", message)
		);
		spotifyPlayer.addListener("not_ready", ({ device_id }) =>
			console.warn("Player not ready:", device_id)
		);

		spotifyPlayer.connect();
		setPlayer(spotifyPlayer);
		isPlayerInitialized.current = true;
	};
};
