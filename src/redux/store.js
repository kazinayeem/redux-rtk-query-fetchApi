import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "../contactApi";
import { todoApi } from "../todoAPi";
import { CountryApi } from "../userApi";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [CountryApi.reducerPath]: CountryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactApi.middleware)
      .concat(todoApi.middleware)
      .concat(CountryApi.middleware),
});
