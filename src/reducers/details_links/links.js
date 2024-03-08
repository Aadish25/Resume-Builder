import { createSlice } from "@reduxjs/toolkit";

export const linksSlice = createSlice({
  name: "details",
  initialState: {
    linksArr: [],
  },
  reducers: {
    setLinks: (state, action) => {
      const { index, name, value } = action.payload;
      return {
        ...state,
        linksArr: state.linksArr.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              [name]: value,
            };
          }
          return item;
        }),
      };
    },
    deleteLinks: (state, action) => {
      const { index } = action.payload;
      return {
        ...state,
        linksArr: state.linksArr.filter((_, i) => i !== index),
      };
    },

    setLinksArr: (state) => {
      return {
        ...state,
        linksArr: [...state.linksArr, { description: "", link: "" }],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLinks, setLinksArr, deleteLinks } = linksSlice.actions;

export default linksSlice.reducer;
