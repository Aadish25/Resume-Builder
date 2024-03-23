import { createSlice } from "@reduxjs/toolkit";

export const EducationSlice = createSlice({
  name: "educationDetails",
  initialState: {
    educationArr: [
      {
        schoolName: "The University of Texas",
        schoolLocation: "Dallas",
        startDate: "September 2007",
        endDate: "August 2011",
        description: "Academic Awardee of AY 2007-2008",
        isOpen: true,
        degree: "Masters",
        fieldOfStudy: "Human Resources",
      },
    ],
  },
  reducers: {
    deleteEducationArr: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        educationArr: state.educationArr.filter((_, i) => i !== index),
      };
    },

    setEducationArr: (state) => {
      return {
        ...state,
        educationArr: [
          ...state.educationArr,
          {
            schoolName: "",
            schoolLocation: "",
            startDate: "",
            endDate: "",
            description: "",
            isOpen: false,
            degree: "",
            fieldOfStudy: "",
          },
        ],
      };
    },
    setEducationDetails: (state, action) => {
      const { index, name, value } = action.payload;

      return {
        ...state,
        educationArr: state.educationArr.map((item, i) => {
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
    setEducationOpen: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        educationArr: state.educationArr.map((item, i) => {
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
  setEducationArr,
  deleteEducationArr,
  setEducationDetails,
  setEducationOpen,
} = EducationSlice.actions;

export default EducationSlice.reducer;
