import React from "react";
import style from "./input.module.scss";

type InputProps = {
  placeholder: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, onInput }) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      onChange={(e) => onInput(e)}
    />
  );
};

export default Input;
