import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'vide slice',
  initialState: {
    value: 0,
  },
  reducers: {
    getVideo: (state) => {
      console.log('video');
      state.value += 1;
    },
  },
});

export const { getVideo } = videoSlice.actions;
