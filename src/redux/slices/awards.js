import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {},
  state: 'loading',
  error: null,
};

const awardSlice = createSlice({
  name: 'awards',
  initialState,
});

export default awardSlice.reducer;
