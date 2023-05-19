import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../features/api/api";
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [bookApi.reducerPath]: bookApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
