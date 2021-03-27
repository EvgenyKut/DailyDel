import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LoginBox from "../../components/LoginBox";
import style from "./createaccount.module.scss";

const Login = () => {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCopy, setPasswordCopy] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordCopyDirty, setPasswordCopyDirty] = useState(false);
  const [loginError, setLoginError] = useState("Login shuld't be empty ");
  const [nameError, setNameError] = useState("Name shuld't be empty ");
  const [passwordError, setPasswordError] = useState(
    "Password shuld't be empty"
  );
  const [passwordCopyError, setPasswordCopyError] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [btnContent, setBtnContent] = useState("Login");
  const [loader, setLoader] = useState(false);

  const errors: any = {
    name: nameError,
    password: passwordError,
    login: loginError,
    passwordCopy: passwordCopyError,
  };

  const dirties: any = {
    name: nameDirty,
    password: passwordDirty,
    login: loginDirty,
    passwordCopy: passwordCopyDirty,
  };
  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "passwordCopy":
        setPasswordCopyDirty(true);
        break;
    }
  };

  const onInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError("Uncorrect email");
    } else {
      setLoginError("");
    }
  };

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setPassword(event);
    if (event.length < 3 || event.length > 8) {
      setPasswordError("Uncorrect password");
    } else if (event !== passwordCopy && passwordCopyDirty) {
      setPasswordError("Passwords must match");
    } else {
      setPasswordError("");
    }
  };

  const onInputPasswordCopy = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setPasswordCopy(event);
    if (event !== password) {
      setPasswordCopyError("Passwords must match");
    } else {
      setPasswordCopyError("");
    }
  };

  const onInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setName(event);
    if (event.length < 3) {
      setNameError("Please write full name");
    } else {
      setNameError("");
    }
  };

  const forms = [
    {
      id: 1,
      title: "name",
      value: name,
      placeholder: "Enter your name",
      onInput: onInputName,
      type: "text",
    },
    {
      id: 2,
      title: "login",
      value: login,
      placeholder: "Enter your email",
      onInput: onInputLogin,
      type: "text",
    },
    {
      id: 3,
      title: "password",
      value: password,
      placeholder: "Enter your password",
      onInput: onInputPassword,
      type: "password",
    },
    {
      id: 4,
      title: "passwordCopy",
      value: passwordCopy,
      placeholder: "Repeat your password",
      onInput: onInputPasswordCopy,
      type: "password",
    },
  ];
  const renderForm = () => {
    return forms.map((form) => {
      return (
        <li className={style.formItem} key={form.id}>
          {errors[`${form.title}`] && dirties[`${form.title}`] && (
            <div style={{ color: "red" }}>{errors[`${form.title}`]}</div>
          )}
          <Input
            name={form.title}
            placeholder={form.placeholder}
            onChange={form.onInput}
            onBlur={blurHandler}
            value={form.value}
            type={form.type}
            id={form.id}
          />
        </li>
      );
    });
  };

  useEffect(() => {
    if (
      login &&
      password &&
      name &&
      passwordCopy &&
      passwordCopy === password
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [login, name, password, passwordCopy]);

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBtnContent("");
    setFormValid(false);
    setLoader(true);
    setTimeout(() => {
      console.log("login :", login, " password :", password, "name: ", name);
      setBtnContent("Login");
      setLogin("");
      setPassword("");
      setPasswordCopy("");
      setName("");
      setFormValid(true);
      setLoader(false);
      history.push("/login");
    }, 3000);
  };

  return (
    <div className={style.loginBox}>
      <LoginBox>
        <div className={style.logo}></div>
        <form className={style.form} onSubmit={(e: any) => onSubmit(e)}>
          <ul className={style.inputs}>{renderForm()}</ul>
          <div className={style.downSector}>
            <Button
              label={btnContent}
              disabled={!formValid}
              preloader={loader}
            />
          </div>
        </form>
      </LoginBox>
    </div>
  );
};

export default Login;
