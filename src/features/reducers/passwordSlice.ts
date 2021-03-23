import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PasswordState {
  value: string;
}
const initialState: PasswordState = {
  value: "",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    inputPassword: (state, action: PayloadAction<string>) =>
      void(state.value = action.payload),
      //?  void  - так указано в документации Immer

  },
});

export const { inputPassword } = passwordSlice.actions;

export default passwordSlice.reducer;
