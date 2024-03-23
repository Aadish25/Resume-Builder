import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projectDetails",
  initialState: {
    projectsArr: [
      {
        projectTitle: "FurniNow",
        projectLink: "http://www.google.com",
        projectSummary:
          "It is a furniture e-commerce web application uses React.Js for the front-end to create an interactive user interface. On the back-end, it employs Express.Js and Node.Js for server-side operations, while MongoDB handles data storage. This combination of technologies enables you to build a dynamic, responsive, and scalable platform for selling furniture online.",
        isOpen: true,
      },
      {
        projectTitle: "Personal Portfolio",
        projectLink: "http://www.google.com",
        projectSummary:
          "It is my Portfolio which is built in MERN and i use EmailJS for sending the emails",
        isOpen: false,
      },
    ],
  },
  reducers: {
    deleteProjectArr: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        projectsArr: state.projectsArr.filter((_, i) => i !== index),
      };
    },

    setProjectArr: (state) => {
      return {
        ...state,
        projectsArr: [
          ...state.projectsArr,
          {
            projectTitle: "",
            projectLink: "",
            projectSummary: "",
            isOpen: false,
          },
        ],
      };
    },
    setProjectDetails: (state, action) => {
      const { index, name, value } = action.payload;

      return {
        ...state,
        projectsArr: state.projectsArr.map((item, i) => {
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
    setProjectOpen: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        projectsArr: state.projectsArr.map((item, i) => {
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
  setProjectArr,
  deleteProjectArr,
  setProjectDetails,
  setProjectOpen,
} = projectsSlice.actions;

export default projectsSlice.reducer;
