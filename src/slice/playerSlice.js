import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    player: null,
    isPlaying: false,
    currentTrack: null,
    currentContext: null,
    volume: localStorage.getItem("pulse_player_volume") ? Number(localStorage.getItem("pulse_player_volume")) : 50,
    progress: null,
    repeatState: "off",
    deviceId: null,
    duration: null,
    image: null,
    trackName: null,
    artists: null,
    artistUri: null,
    shuffle: false,
}
const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: {
        setPlayer: (state, action) => {
            state.player = action.payload;
        },
		setIsPlaying: (state, action) => {
			state.isPlaying = action.payload;
		},
		setCurrentTrack: (state, action) => {
			state.currentTrack = action.payload;
		},
        setCurrentContext: (state, action) => {
			state.currentContext = action.payload;
		},
		setVolume: (state, action) => {
			state.volume = action.payload;
		},
		setProgress: (state, action) => {
			state.progress = action.payload;
		},
		setRepeatState: (state, action) => {
			state.repeatState = action.payload;
		},
		setDeviceId: (state, action) => {
			state.deviceId = action.payload;
		},
		setDuration: (state, action) => {
			state.duration = action.payload;
		},
		setImage: (state, action) => {
			state.image = action.payload;
		},
		setTrackName: (state, action) => {
			state.trackName= action.payload;
		},
		setArtists: (state, action) => {
			state.artists = action.payload;
		},
		setArtistUri: (state, action) => {
			state.artistUri = action.payload;
		},
        setShuffle: (state, action) => {
            state.shuffle= action.payload;
		},
        setCurrentTrackInfoToNull: (state) => {
			state.currentTrack = null;
			state.trackName = null;
			state.artists = null;
			state.image = null;
			state.currentContext = null;
			state.artistUri = null;
		},
	},
});

export const {
    setPlayer,
	setIsPlaying,
	setCurrentTrack,
    setCurrentContext,
	setVolume,
	setProgress,
	setRepeatState,
	setDeviceId,
	setDuration,
	setImage,
    setTrackName,
    setArtists,
    setArtistUri,
    setShuffle,
	setCurrentTrackInfoToNull
} = playerSlice.actions;
export default playerSlice.reducer;
