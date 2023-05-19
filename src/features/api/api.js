import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhos:9000",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
