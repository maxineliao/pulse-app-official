import {
	playTrack,
	pauseTrack,
	getDevices,
	playbackShuffle,
	repeatMode,
} from "../utils/spotifyApi";
import { useSelector, useDispatch } from "react-redux";
import {
	setIsPlaying,
	setCurrentTrack,
	setProgress,
	setVolume,
	setRepeatState,
	setDuration,
	setImage,
	setTrackName,
	setArtists,
	setShuffle,
	setCurrentContext,
	setArtistUri,
} from "../slice/playerSlice";
import { useRef } from "react";
import { selectSpotifyAccessToken } from "../slice/spotifyAuthSlice";
import { usePlayerContext } from "../contexts/PlayerContext";

export const useSpotifyPlayer = () => {
	const dispatch = useDispatch();
	const accessToken = useSelector(selectSpotifyAccessToken);
	const deviceId = useSelector((state) => state.player.deviceId);
	const playing = useSelector((state) => state.player.isPlaying);

	const shuffleStateRef = useRef(null);
	shuffleStateRef.current = useSelector((state) => state.player.shuffle);

	const currentVolumeRef = useRef(null);
	currentVolumeRef.current = useSelector((state) => state.player.volume);

	const repeatStateRef = useRef(null);
	repeatStateRef.current = useSelector((state) => state.player.repeatState);

	const { player } = usePlayerContext();

	const getUserDevices = () => {
		getDevices(accessToken);
	};

	const play = async (context, offsetUri) => {
		if (player) {
			await playTrack(accessToken, context, offsetUri, deviceId);
			dispatch(setIsPlaying(true));
		}
	};

	const pause = async () => {
		if (!player || typeof player.pause !== "function" || !accessToken) {
			console.log("Player is not ready yet");
			return;
		}
		await pauseTrack(accessToken);
		dispatch(setIsPlaying(false));
	};

	const togglePlay = () => {
		if (!player || typeof player.pause !== "function" || !accessToken) {
			console.log("Player is not ready yet");
			return;
		}
		if (!playing) {
			player.resume().then(() => dispatch(setIsPlaying(true)));
		} else {
			player.pause().then(() => dispatch(setIsPlaying(false)));
		}
	};

	const skipToNext = () => {
		if (!player || typeof player.pause !== "function" || !accessToken) return;
		player.nextTrack().catch(console.log);
	};

	const skipToPrev = () => {
		if (!player || typeof player.pause !== "function" || !accessToken) return;
		player.previousTrack().catch(console.log);
	};

	const toggleShuffle = async () => {
		if (!player || typeof player.pause !== "function" || !accessToken) return;
		await playbackShuffle(accessToken, !shuffleStateRef.current);
	};

	const volumeControl = (newVolume) => {
		if (!player || typeof player.pause !== "function" || !accessToken) return;
		player.setVolume(newVolume / 100).then(() => {
			dispatch(setVolume(newVolume));
			localStorage.setItem("pulse_player_volume", newVolume);
		});
	};

	const getCurrentVolume = () => {
		if (!player || typeof player.pause !== "function" || !accessToken) return;
		player.getVolume().then((volume) => {
			console.log(`Current volume: ${volume * 100}%`);
		});
	};

	const setRepeatMode = async () => {
		if (!player || typeof player.pause !== "function" || !accessToken) return;
		let newMode = repeatStateRef.current === "off" ? "track" : repeatStateRef.current === "track" ? "context" : "off";
		await repeatMode(accessToken, newMode, deviceId);
	};

	return {
		play,
		pause,
		togglePlay,
		skipToNext,
		skipToPrev,
		toggleShuffle,
		volumeControl,
		getCurrentVolume,
		setRepeatMode,
		getUserDevices,
		player,
	};
};
