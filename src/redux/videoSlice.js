import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'vide slice',
  initialState: {
    value: undefined,
  },
  reducers: {
    setWheater: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWheater } = videoSlice.actions;
