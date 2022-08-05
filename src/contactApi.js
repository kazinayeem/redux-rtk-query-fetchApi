import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const contactApi = createApi({
    reducerPath: "contact",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
        getContactApi: builder.query({
            query: () => "todos"
        })
    })

})


export const {useGetContactApiQuery} = contactApi;