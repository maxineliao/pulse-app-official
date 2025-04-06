import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import spotifyAuthReducer from './slice/spotifyAuthSlice';
import playerReducer from './slice/playerSlice';
import loadingReducer from './slice/loadingSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        spotifyAuth: spotifyAuthReducer,
        player: playerReducer,
        loading: loadingReducer,
    }
});