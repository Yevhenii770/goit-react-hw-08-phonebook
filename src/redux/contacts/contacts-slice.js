import { createSlice } from '@reduxjs/toolkit';
import authOperations from '../auth/auth-operations';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

export const userFilter = createSlice({
  name: 'filter',
  initialState: {
    filterValue: '',
  },
  reducers: {
    filterQuery(state, action) {
      state.filterValue = action.payload;
    },
  },
});

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContacts.pending, handlePending)
      .addCase(deleteContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      }),
});

export const contactsReducer = contactSlice.reducer;
export const { filterQuery } = userFilter.actions;
