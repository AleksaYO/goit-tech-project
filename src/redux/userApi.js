import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6464cfc5043c103502c3a34d.mockapi.io/api/v1",
  }),
  tagTypes: ["Followers"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (limit = 6) => `/user?limit=${limit}&page=1`,
      providesTags: ["Followers"],
    }),
    followUser: builder.mutation({
      query: ({ body, id }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useFollowUserMutation } = userApi;
