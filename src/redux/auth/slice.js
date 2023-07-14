import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, actions) => {
        state.error = null;
      })
      .addCase(register.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(login.fulfilled, (state, actions) => {
        state.error = null;
        state.isLoggedIn = true;
        state.user = actions.payload.user;
        state.token = actions.payload.token;
      })
      .addCase(login.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, email: null };
      })
      .addCase(logout.rejected, (state, actions) => {
        state.error = actions.payload;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, actions) => {
        state.error = null;
        state.isLoggedIn = true;
        state.user = actions.payload;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, actions) => {
        state.isRefreshing = false;
        state.error = actions.payload;
      }),
});
export const authReducer = authSlice.reducer;
