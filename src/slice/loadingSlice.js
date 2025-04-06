import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    playerDataLoading: false
};
const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setPlayerLoading: (state, action) => {
            state.playerDataLoading = action.payload
        },
    },
});

export const { setPlayerLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
