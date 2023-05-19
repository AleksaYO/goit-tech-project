import { createSlice } from "@reduxjs/toolkit";

export const userSclice = createSlice({
  name: "user",
  initialState: {
    followers: [],
  },
  reducers: {
    followUser(state, { payload }) {
      state.followers.push(payload);
    },
    unFollowUser(state, { payload }) {
      state.followers = state.followers.filter(
        (follower) => follower !== payload
      );
    },
  },
});

export const { followUser, unFollowUser } = userSclice.actions;

// {
//       user: 'user',
//       tweets: 1,
//       followers: 1,
//       avatar: '',
//       id: 1,
//     },
