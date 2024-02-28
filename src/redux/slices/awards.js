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

const setKeys = (moviesArr) => {
  const keys = Object.keys(moviesArr[0]);
  const movies = moviesArr.map((movie) => ({
    title: movie[keys[0]],
    year: movie[keys[1]],
    movie_id: movie[keys[2]],
    rank: movie[keys[3]],
    actors: movie[keys[4]],
    aka: movie[keys[5]],
    url: movie[keys[6]],
    iv: movie[keys[7]],
    poster_img: movie[keys[8]],
  }));
  return movies;
};

const awardSlice = createSlice({
  name: 'awards',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getMoviesInfo.fulfilled, (state, action) => {
        state.status = 'Succeeded';
        const info = action.payload.data.description;
        state.movies = setKeys(info);
      });
  },
});

export default awardSlice.reducer;
