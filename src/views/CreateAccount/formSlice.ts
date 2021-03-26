import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  login: string;
  password: string;
}
const initialState: LoginState = {
  login: "",
  password:""
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    inputLogin: (state, action: PayloadAction<string>) => {
      state.login= action.payload;
    },
    inputPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { inputLogin, inputPassword } = formSlice.actions;

export default formSlice.reducer;
