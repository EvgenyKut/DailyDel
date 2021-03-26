import React from "react";
import style from "./input.module.scss";

type InputProps = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: any;
  type: string;
  id: any;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  name,
  onBlur,
  value,
  type,
  id,
}) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      name={name}
      onBlur={(e) => onBlur(e)}
      value={value}
      type={type}
      id={id}
    />
  );
};

export default Input;
