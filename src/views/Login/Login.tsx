import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LoginBox from "../../components/LoginBox";
import style from "./login.module.scss";
import { useAppDispatch } from "../../App/hooks";
import { inputLogin, inputPassword } from "./formSlice";

const Login = () => {
  const dispatch = useAppDispatch();

  const onInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputLogin(e.target.value));
  };

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputPassword(e.target.value));
  };

  const forms = [
    { id: 1, name: "login", placeholder: "Login", onInput: onInputLogin },
    {
      id: 2,
      name: "password",
      placeholder: "Password",
      onInput: onInputPassword,
    },
  ];
  const renderForm = () => {
    return forms.map((form) => {
      return (
        <li className={style.formItem} key={form.id}>
          <Input placeholder={form.placeholder} onInput={form.onInput} />
        </li>
      );
    });
  };

  return (
    <div className={style.loginBox}>
      <LoginBox />
      <div className={style.logo}></div>
      <form className={style.form}>
        <ul>{renderForm()}</ul>
      </form>
      <div className={style.links}>
        <Button link={"/test"} label={"Don’t have account?"} />
        <Button link={"/test"} label={"Forget your password?"} />
      </div>
      <div className={style.loginBtn}>
        <Button label={"Login"} />
      </div>
    </div>
  );
};

export default Login;
