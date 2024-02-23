import { configureStore } from '@reduxjs/toolkit';
import awardsReducer from './slices/awards';

const store = configureStore({
  reducer: {
    movies: awardsReducer,
  },
});

export default store;
