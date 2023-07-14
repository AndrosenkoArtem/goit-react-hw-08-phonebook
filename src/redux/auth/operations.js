import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://phonebook-back-node-js.vercel.app/api/';

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
      await axios.post('/users/signup', user);
      toast.success('please confirm your email');
    } catch (error) {
      toast.error('this email is already registered');
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
      const useer = await axios.get('/users/current');
      return useer.data;
      // return response.data;
    } catch (error) {
      toast.error('The address or password was entered in error');
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
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
