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
};

const Button: React.FC<BtnProps> = ({ label, theme, disabled, link }) => {
  const btnClasses = cx(style.btn, { disabled: disabled });
  const linkClasses = cx(style.link);

  if (link) {
    return (
      <Link to={`${link}`} className={linkClasses}>
        {label}
      </Link>
    );
  }
  return <button className={btnClasses}>{label}</button>;
};

export default Button;
