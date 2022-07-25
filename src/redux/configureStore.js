import { configureStore } from '@reduxjs/toolkit';
import { videoSlice } from './videoSlice';

export default configureStore({
  reducer: {
    video: videoSlice.reducer,
  },
});
