import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const userData = createSlice({
  name: 'data',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addData(state, { payload }) {
      state.items.push(payload);
    },
    deleteContacts(state, { payload }) {
      state.items = state.items.filter(el => el.id !== payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const dataReducer = persistReducer(persistConfig, userData.reducer);

// Генераторы экшенов и редюсеров
export const { filterQuery } = userFilter.actions;
export const { deleteContacts, addData } = userData.actions;

/////
// SELECTORS
////
export const getDataArray = state => state.data.items;
