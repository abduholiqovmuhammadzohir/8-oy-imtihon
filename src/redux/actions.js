import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likes: [],
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.likes.push(action.payload);
    },
    removeLike: (state, action) => {
      state.likes = state.likes.filter(id => id !== action.payload);
    },
  },
});

export const { addLike, removeLike } = musicSlice.actions;

export default musicSlice.reducer;
