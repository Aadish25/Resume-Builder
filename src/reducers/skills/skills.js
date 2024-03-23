import { createSlice } from "@reduxjs/toolkit";

export const SkillsSlice = createSlice({
  name: "skills",
  initialState: {
    skillsArr: ["React JS", "Tailwind CSS", "Node JS", "Javascript"],
  },
  reducers: {
    deleteSkill: (state, action) => {
      const index = action.payload;
      return {
        ...state,
        skillsArr: state.skillsArr.filter((_, i) => i !== index),
      };
    },

    setSkillsArr: (state) => {
      return {
        ...state,
        skillsArr: [...state.skillsArr, ""],
      };
    },
    setSkills: (state, action) => {
      const { index, value } = action.payload;
      return {
        ...state,
        skillsArr: state.skillsArr.map((item, i) => {
          if (i === index) {
            return value;
          }
          return item;
        }),
      };
    },
  },
});

export const {
  setSkillsArr,
  deleteSkill,

  setSkills,
} = SkillsSlice.actions;

export default SkillsSlice.reducer;
