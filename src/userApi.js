import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const CountryApi = createApi({
  reducerPath: "country",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountryApi: builder.query({
      query: () => "all",
    }),

    getCountryByName : builder.query({
        query : (name) => `name/${name}`
    })
  }),
});

export const {  useGetCountryApiQuery,useGetCountryByNameQuery} = CountryApi;
