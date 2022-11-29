import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./todoSlice";

const store = configureStore({
  reducer: toDoSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
