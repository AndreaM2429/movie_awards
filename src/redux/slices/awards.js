/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://search.imdbot.workers.dev/?q=Niram';

export const getMoviesInfo = createAsyncThunk('get/movies', async (thunkAPI) => {
  try {
    const resp = axios.get(url);
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

const initialState = {
  movies: [],
  status: 'loading',
  error: null,
};

const awardSlice = createSlice({
  name: 'awards',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getMoviesInfo.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        const info = action.payload.data.description;
        state.movies = info;
      });
  },
});

export default awardSlice.reducer;
