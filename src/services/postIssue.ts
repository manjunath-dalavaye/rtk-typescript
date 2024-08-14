import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const formId = process.env.FORM_SPREE_FORM_ID;

const setOfOperations = builder => {
  return {
    postIssue: builder.mutation({
      query: data => {
        return {
          url: `https://formspree.io/f/${formId}`,
          method: "get",
          body: data
        };
      }
    })
  };
};

export const issueApi = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: builder => {
    return setOfOperations(builder);
  }
});

export const { usePostIssueMutation } = issueApi;
