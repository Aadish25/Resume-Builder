import { createSlice } from "@reduxjs/toolkit";

export const additionalExpSlice = createSlice({
  name: "addExpDetails",
  initialState: {
    addExpArr: [
      {
        addExpTitle: "Club President",
        addExpSummary: "President of xyz club in abc college.",
        isOpen: true,
      },
      {
        addExpTitle: "Contest Ranks",
        addExpSummary: "Got 1 global rank in CodeChef 123 contest.",
        isOpen: false,
      },
    ],
  },
  reducers: {
    deleteAddExpArr: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        addExpArr: state.addExpArr.filter((_, i) => i !== index),
      };
    },

    setAddExpArr: (state) => {
      return {
        ...state,
        addExpArr: [
          ...state.addExpArr,
          {
            addExpTitle: "",
            addExpSummary: "",
            isOpen: false,
          },
        ],
      };
    },
    setAddExpDetails: (state, action) => {
      const { index, name, value } = action.payload;

      return {
        ...state,
        addExpArr: state.addExpArr.map((item, i) => {
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
    setAddExpOpen: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        addExpArr: state.addExpArr.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              isOpen: !item.isOpen,
            };
          }
          return {
            ...item,
            isOpen: false,
          };
        }),
      };
    },
  },
});

export const {
  setAddExpArr,
  setAddExpDetails,
  deleteAddExpArr,
  setAddExpOpen,
} = additionalExpSlice.actions;

export default additionalExpSlice.reducer;
