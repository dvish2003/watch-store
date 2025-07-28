import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/AuthSlice";

 export const store = configureStore({
  reducer: {
    isAuth: AuthReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

