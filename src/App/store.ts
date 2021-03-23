import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/reducers/counterSlice";
import loginSlice from "../features/reducers/loginSlice";
import passwordSlice from "../features/reducers/passwordSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    loginform: loginSlice,
    passwordform:passwordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
