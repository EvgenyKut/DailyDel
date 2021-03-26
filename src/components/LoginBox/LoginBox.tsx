import React, { PropsWithChildren } from "react";
import style from "./loginbox.module.scss";

interface LoginProps {}

const LoginBox = ({ children }: PropsWithChildren<LoginProps>) => {
  return <div className={style.loginBox}>{children}</div>;
};

export default LoginBox;
