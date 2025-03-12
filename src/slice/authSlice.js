import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: !!localStorage.getItem('pulseToken'),
    },
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem('pulseToken');
        }
    }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;