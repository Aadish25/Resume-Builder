import { createSlice } from "@reduxjs/toolkit";

export const indexSlice = createSlice({
  name: "index",
  initialState: {
    index: 0,
  },
  reducers: {
    setIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIndex } = indexSlice.actions;

export default indexSlice.reducer;
