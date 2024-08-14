import { configureStore } from "@reduxjs/toolkit";
import { issueApi } from "../services/postIssue";

const store = configureStore({
  reducer: {
    [issueApi.reducerPath]: issueApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(issueApi.middleware);
  },
});

export default store;
