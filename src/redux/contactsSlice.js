import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { deleteContacts, addContacts } from "../redux/contactsOps.js";
import { createSelector } from "reselect";
import { fetchContacts } from "../redux/contactsOps";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addMatcher(
        isAnyOf(
          addContacts.pending,
          deleteContacts.pending,
          fetchContacts.pending
        ),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          addContacts.rejected,
          deleteContacts.rejected,
          fetchContacts.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [(state) => state.contacts.items, selectNameFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const contactReducer = contactsSlice.reducer;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// export const selectContacts = (state) => state.contacts.items;
