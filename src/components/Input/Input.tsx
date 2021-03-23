import React from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { inputLogin } from "../../features/reducers/loginSlice";
import { inputPassword } from "../../features/reducers/passwordSlice";
import style from "./input.module.scss";

type InputProps = {
  type: "login"|"password"
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder, }) => {

  const dispatch = useAppDispatch();

  const onInputL = (e: any) => {
    dispatch(inputLogin(e.target.value));
  };

  const onInputP = (e: any) => {
    dispatch(inputPassword(e.target.value));
  };
const t = type==="login"? onInputL: onInputP;

  return (
    <input
      className={style.input}
      placeholder={placeholder}
      onChange={(e) => t(e)}
    />
  );
};

export default Input;
