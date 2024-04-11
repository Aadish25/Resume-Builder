import { createSlice } from "@reduxjs/toolkit";

export const PathSlice = createSlice({
  name: "chooseTempPath",
  initialState: {
    tempPath: "/editor/details",
  },
  reducers: {
    setPath: (state, action) => {
      state.tempPath = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPath } = PathSlice.actions;

export default PathSlice.reducer;
