import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    firstName: "Chris",
    lastName: "Candidate",
    jobTitle: "Human Resource Manager",
    email: "email@youremail.com",
    phone: "9876543210",
    address: "2003 Sunny Lane",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    zipCode: "123465",
  },
  reducers: {
    setDetails: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
