import { configureStore } from '@reduxjs/toolkit';
import awardsReducer from './slices/awards';

const store = configureStore({
  reducer: {
    awards: awardsReducer,
  },
});

export default store;
