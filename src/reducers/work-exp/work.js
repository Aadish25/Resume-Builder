import { createSlice } from "@reduxjs/toolkit";

export const workExpSlice = createSlice({
  name: "worksDetails",
  initialState: {
    workArr: [
      {
        positionTitle: "Software Engineer",
        companyName: "FiftyFive Technologies",
        startDate: "June 2023",
        endDate: "August 2023",
        workSummary:
          "Implement effective company policies to ensure that all practices comply with labor and employment regulations Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met",
        isOpen: true,
      },
      {
        positionTitle: "Software Engineer",
        companyName: "FiftyFive Technologies",
        startDate: "June 2023",
        endDate: "August 2023",
        workSummary:
          "Implement effective company policies to ensure that all practices comply with labor and employment regulations Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met",
        isOpen: false,
      },
    ],
  },
  reducers: {
    deleteWorkArr: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        workArr: state.workArr.filter((_, i) => i !== index),
      };
    },

    setWorkArr: (state) => {
      return {
        ...state,
        workArr: [
          ...state.workArr,
          {
            positionTitle: "",
            companyName: "",
            startDate: "",
            endDate: "",
            workSummary: "",
            isOpen: false,
          },
        ],
      };
    },
    setWorkDetails: (state, action) => {
      const { index, name, value } = action.payload;

      return {
        ...state,
        workArr: state.workArr.map((item, i) => {
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
    setWorkOpen: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        workArr: state.workArr.map((item, i) => {
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

export const { setWorkArr, deleteWorkArr, setWorkDetails, setWorkOpen } =
  workExpSlice.actions;

export default workExpSlice.reducer;
