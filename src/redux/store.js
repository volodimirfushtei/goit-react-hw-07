import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "../redux/contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
