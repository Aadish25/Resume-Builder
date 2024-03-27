import { createSlice } from "@reduxjs/toolkit";

export const SummarySlice = createSlice({
  name: "summary",
  initialState: {
    summaryDesc:
      "Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
  },
  reducers: {
    setSummary: (state, action) => {
      state.summaryDesc = action.payload.value;
    },
  },
});

export const { setSummary } = SummarySlice.actions;

export default SummarySlice.reducer;
