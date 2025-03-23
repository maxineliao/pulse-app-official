import { playTrack, pauseTrack, getDevices, playbackShuffle } from "../utils/spotifyApi";
import { useSelector, useDispatch } from "react-redux";
import {
	setIsPlaying,
	setCurrentTrack,
	setProgress,
	setVolume,
	setRepeatState,
	setDeviceId,
	setDuration,
	setImage,
	setTrackName,
	setArtists,
    setShuffle,
} from "../slice/playerSlice";
import { useEffect, useRef, useState } from "react";
import { selectSpotifyAccessToken } from "../slice/spotifyAuthSlice";

export const useSpotifyPlayer = () => {
	const dispatch = useDispatch();
	const [player, setPlayer] = useState();
	const accessToken = useSelector(selectSpotifyAccessToken);
	const deviceId = useSelector((state) => state.player.deviceId);
	const playing = useSelector((state) => state.player.isPlaying);
    const shuffleStateRef = useRef(null);
    shuffleStateRef.current = useSelector((state) => state.player.shuffle);
    // useEffect(() => {
    //     console.log(shuffleState);
    // },[])
	useEffect(() => {
		if (!accessToken) return;

		const initializePlayer = () => {
			if (!window.Spotify) {
				console.log("Spotify SDK Not Ready");
				return;
			}
			if (player) return;

			const spotifyPlayer = new window.Spotify.Player({
				name: "PULSE Web Player",
				getOAuthToken: (cb) => {
					cb(accessToken);
				},
				volume: 0.5,
			});

			spotifyPlayer.addListener("player_state_changed", (state) => {
				if (!state) return;
				console.log(state);
				dispatch(setCurrentTrack(state.track_window.current_track.uri));
				dispatch(setIsPlaying(!state.paused));
				dispatch(setProgress(state.position));
				dispatch(setRepeatState(state.repeat_mode));
				dispatch(setDuration(state.duration));
				dispatch(setImage(state.track_window.current_track.album.images[0].url));
				dispatch(setTrackName(state.track_window.current_track.name));
				dispatch(setArtists(state.track_window.current_track.artists.map((artist) => artist.name).join(", ")));
				dispatch(setShuffle(state.shuffle));
			});

			spotifyPlayer.addListener("ready", ({ device_id }) => {
				dispatch(setDeviceId(device_id));
				console.log("Ready with Device ID", device_id);
			});

			spotifyPlayer.addListener("not_ready", ({ device_id }) => {
				console.log("Device ID has gone offline", device_id);
			});

			spotifyPlayer.addListener("initialization_error", ({ message }) => {
				console.error(message);
			});

			spotifyPlayer.addListener("authentication_error", ({ message }) => {
				console.error(message);
			});

			spotifyPlayer.addListener("account_error", ({ message }) => {
				console.error(message);
			});

			spotifyPlayer.connect();
			setPlayer(spotifyPlayer);
		};

		if (window.Spotify) {
			initializePlayer();
		} else {
			window.onSpotifyWebPlaybackSDKReady = initializePlayer;
		}

		return () => player && player.disconnect();
	}, [accessToken, dispatch]);

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
		if (player) {
			await pauseTrack(accessToken);
			dispatch(setIsPlaying(false));
		}
	};

	const togglePlay = () => {
		if (!player || typeof player.pause !== "function") {
			console.log("Player is not ready yet");
			return;
		}

		if (!playing) {
			player.resume().then(() => {
				dispatch(setIsPlaying(true));
			});
		} else {
			player.pause().then(() => {
				dispatch(setIsPlaying(false));
			});
		}
	};

	const skipToNext = () => {
		if (!player || typeof player.pause !== "function") {
			console.log("Player is not ready yet");
			return;
		}

		player.nextTrack().then(() => {
			console.log("跳至下一首");
		}).catch((error) => {
			console.log(error);
		});
	};

	const skipToPrev = () => {
		if (!player || typeof player.pause !== "function") {
			console.log("Player is not ready yet");
			return;
		}

		player.previousTrack().then(() => {
			console.log("跳至上一首");
		}).catch((error) => {
			console.log(error);
		});
	};

	const toggleShuffle = async () => {
		if (!player || typeof player.pause !== "function") {
			console.log("Player is not ready yet");
			return;
		}

		await playbackShuffle(accessToken, !shuffleStateRef.current);
		console.log(`shuffle state: ${shuffleStateRef.current}`);
	};

	return { play, pause, getUserDevices, togglePlay, player, skipToNext, skipToPrev, toggleShuffle };
};
