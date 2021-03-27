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
  preloader?: boolean;
};

const Button: React.FC<BtnProps> = ({ label, theme, disabled, link, scale, type,preloader }) => {
  const btnClasses = cx(style.btn, { dis: disabled, [`${scale}`]:scale,  });
  const linkClasses = cx(style.link);



if(preloader){
  return <button className={btnClasses} type={type}><div className={style.loader}></div></button>;
}

  if (link) {
    return (
      <Link to={`${link}`} className={linkClasses}>
        {label}
      </Link>
    );
  }
  return <button className={btnClasses} type={type}>{label}</button>;
};

export default Button;
