import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import LoginBox from "../../components/LoginBox";
import style from "./login.module.scss";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { inputLogin, inputPassword } from "./formSlice";
import slashEye from "../../images/eye-slash-solid.svg";
import openEye from "../../images/eye-solid.svg";

const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [loginError, setLoginError] = useState("Login shuld't be empty ");
  const [passwordError, setPasswordError] = useState(
    "Password shuld't be empty "
  );
  const [formValid, setFormValid] = useState(false);
  const [btnContent, setBtnContent] = useState("Login");
  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const errors: any = {
    password: passwordError,
    login: loginError,
  };

  const dirties: any = {
    password: passwordDirty,
    login: loginDirty,
  };

  const onInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError("Uncorrect email");
    } else {
      dispatch(inputLogin(e.target.value));
      setLoginError("");
    }
  };

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event = e.target.value;
    setPassword(event);
    if (event.length < 3 || event.length > 8) {
      setPasswordError("Uncorrect password");
    } else {
      dispatch(inputPassword(event));
      setPasswordError("");
    }
  };

  const forms: any = [
    {
      id: "21",
      title: "login",
      value: login,
      placeholder: "Login",
      onInput: onInputLogin,
      type: "text",
    },
    {
      id: "22",
      title: "password",
      value: password,
      placeholder: "Password",
      onInput: onInputPassword,
      type: "password",
    },
  ];
  const renderForm = () => {
    return forms.map((form: any) => {
      return (
        <li className={style.formItem} key={form.id}>
          <Input
            name={form.title}
            placeholder={form.placeholder}
            onChange={form.onInput}
            onBlur={blurHandler}
            value={form.value}
            type={form.type}
            id={form.id}
          />
          {errors[`${form.title}`] && dirties[`${form.title}`] && (
            <div id={form.id + "3"} style={{ color: "red", fontSize: "10px" }}>
              {errors[`${form.title}`]}
            </div>
          )}
        </li>
      );
    });
  };

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setBtnContent("wait...");
    setFormValid(false);
    setTimeout(() => {
      console.log("login :", login, " password :", password);
      setBtnContent("Login");
      setLogin("");
      setPassword("");
      setFormValid(true);
    }, 3000);
  };

  const [eyeState, setEyestate] = useState(false);
  const toggle = () => {
    if (!eyeState) {
      document.getElementById("22")?.setAttribute("type", "text");
      document.getElementById("eye2")?.setAttribute("src", slashEye);

      setEyestate(true);
    } else {
      document.getElementById("22")?.setAttribute("type", "password");
      document.getElementById("eye2")?.setAttribute("src", openEye);
      setEyestate(false);
    }
  };



  const eyeOnPage= document.getElementById("eye");

  const firstForm = document.getElementById("213");
  if (firstForm) {
    if (eyeOnPage !== null) {
      eyeOnPage.style.top="73px"
    }
    
  } else {
    if ( eyeOnPage !== null) {
      eyeOnPage.style.top="65px"
    }
  }

  return (
    <div className={style.loginBox}>
      <LoginBox>
        <div className={style.logo}></div>
        <form
          className={style.form}
          onSubmit={(e: any) => onSubmit(e)}
          id={"24"}
        >
          <ul className={style.inputs}>
            {renderForm()}
            <div className={style.eye} onClick={toggle} id={"eye"}>
              <img src={openEye} id={"eye2"} alt="eye" />
            </div>
          </ul>
          <div className={style.downSector}>
            <Button label={btnContent} disabled={!formValid} />
            <div className={style.links}>
              <Button link={"/createLogin"} label={"Don’t have account?"} />
              <Button link={"/test"} label={"Forget your password?"} />
            </div>
          </div>
        </form>
      </LoginBox>
    </div>
  );
};

export default Login;
