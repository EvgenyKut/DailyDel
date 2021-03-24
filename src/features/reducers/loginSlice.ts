import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  value: string;
}
const initialState: LoginState = {
  value: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    inputLogin: (state, action: PayloadAction<string>) =>
      void(state.value = action.payload),
      //?  void  - так указано в документации Immer
  },
});

export const { inputLogin } = loginSlice.actions;

export default loginSlice.reducer;
