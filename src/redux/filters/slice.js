import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

// export const selectFilter = (state) => state.filters.name;
