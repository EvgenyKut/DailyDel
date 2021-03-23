import React from "react";
import style from "./button.module.scss";

type BtnProps = {
  label: string;
};

const Button: React.FC<BtnProps> = ({ label }) => {
  return <button className={style.btn}>{label}</button>;
};

export default Button;
