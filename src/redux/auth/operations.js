import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  addHeaderToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearHeaderToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', user);
      token.addHeaderToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', user);
      token.addHeaderToken(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (user, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', user);
      token.clearHeaderToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      token.addHeaderToken(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
