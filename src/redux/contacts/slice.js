import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, actions) => {
        state.items = actions.payload;
        state.isLoading = false;
      })
      .addCase(getContacts.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, actions) => {
        state.items.push(actions.payload.data);
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, actions) => {
        state.items = state.items.filter(
          contact => contact.id !== actions.payload.data.id
        );
        state.isLoading = false;
      }),
});
export const contactsReduser = contactsSlice.reducer;
