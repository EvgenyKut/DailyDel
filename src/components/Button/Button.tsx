import React from "react";
import style from "./button.module.scss";
import cnBind from "classnames/bind";
import { Link } from "react-router-dom";

const cx = cnBind.bind(style);

type BtnProps = {
  label: string;
  theme?: string;
  disabled?: boolean;
  link?: string;
  scale?: "large"|"small";
  type?:"submit";
  preloader?: string;
};

const Button: React.FC<BtnProps> = ({ label, theme, disabled, link, scale, type,preloader }) => {
  const btnClasses = cx(style.btn, { dis: disabled, [`${scale}`]:scale });
  const linkClasses = cx(style.link);


const btnContent = preloader? preloader : label;
  if (link) {
    return (
      <Link to={`${link}`} className={linkClasses}>
        {label}
      </Link>
    );
  }
  return <button className={btnClasses} type={type}>{btnContent}</button>;
};

export default Button;
