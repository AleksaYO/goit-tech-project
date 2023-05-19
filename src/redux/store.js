import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { userSclice } from "./slice";
import { userApi } from "./userApi";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
  whitelist: "followers",
};

const persistedReducer = persistReducer(persistConfig, userSclice.reducer);

export const store = configureStore({
  reducer: {
    followers: persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
