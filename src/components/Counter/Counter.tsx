import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { decrement, increment } from "../../redux-toolkit/reduxToolkit";
import style from "./counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootStateOrAny) => state.toolkit.counter);

  return (
    <div className={style.test}>
      <button className={style.btn} onClick={() => dispatch(increment())}>
        +
      </button>
      <span>{count}</span>
      <button className={style.btn} onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default Counter;
