import { createSlice } from '@reduxjs/toolkit';
import contactsOperation from './contacts-operation';

const initialState = {
  user: [],
  isLoggedIn: false,
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsOperation.addContacts.fulfilled, (state, action) => {
        state.user.push(action.payload);
      })
      .addCase(contactsOperation.getContacts.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(contactsOperation.removeContacts.fulfilled, (state, action) => {
        state.user = state.user.filter(value => value.id !== action.payload.id);
      });
  },
});

export default contactSlice.reducer;
