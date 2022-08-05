import {fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react";



export const todoApi = createApi({
    reducerPath : "todos",
    baseQuery : fetchBaseQuery({baseUrl : "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
        getTodoApi :builder.query({
            query : () => "todos"
        })
    })
})


export const {useGetTodoApiQuery} = todoApi;




