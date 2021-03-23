import React from "react";
import Button from "../../Button";
import Input from "../../Input";
import LoginBox from "../../LoginBox";
import style from "./login.module.scss";
import { Link } from "react-router-dom";
import SLink from "../../SLink";

const Login = () => {
  return (
    <div className={style.loginBox}>
      <LoginBox />
      <div className={style.logo}></div>
      <div className={style.form}>
        <div className={style.inputLogin}>
          <Input placeholder={"Login"} type={"login"} />
        </div>
        <Input placeholder={"Password"} type={"password"} />
      </div>
      <div className={style.links}>
        <SLink path={"/test"} label={"Don’t have account?"}/>
        <SLink path={"/test"} label={"Forget your password?"}/>
      </div>
      <div className={style.loginBtn}>
        <Button label={"Login"} />
      </div>
    </div>
  );
};

export default Login;
