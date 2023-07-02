import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://649a53a0bf7c145d0238b9cd.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      // providesTags: ['Contacts'],
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Contacts', id })), 'Contacts']
          : ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: contact => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, contactId) => [
        { type: ['Contacts'], id: contactId },
      ],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddContactsMutation,
} = contactsApi;
