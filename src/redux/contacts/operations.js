import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  addHeaderToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearHeaderToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      token.addHeaderToken(persistedToken);
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', contact);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactsId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/contacts/${contactsId}`);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://649a53a0bf7c145d0238b9cd.mockapi.io/api/v1/',
//   }),
//   tagTypes: ['Contacts'],
//   endpoints: builder => ({
//     getContacts: builder.query({
//       query: () => `contacts`,
//       // providesTags: ['Contacts'],
//       providesTags: (result, error, arg) =>
//         result
//           ? [...result.map(({ id }) => ({ type: 'Contacts', id })), 'Contacts']
//           : ['Contacts'],
//     }),
//     addContacts: builder.mutation({
//       query: contact => ({
//         url: 'contacts',
//         method: 'POST',
//         body: contact,
//       }),
//       invalidatesTags: ['Contacts'],
//     }),
//     deleteContacts: builder.mutation({
//       query: contactId => ({
//         url: `contacts/${contactId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: (_, __, contactId) => [
//         { type: ['Contacts'], id: contactId },
//       ],
//     }),
//   }),
// });

// export const {
//   useGetContactsQuery,
//   useDeleteContactsMutation,
//   useAddContactsMutation,
// } = contactsApi;
