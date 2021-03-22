import React from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { decrement, increment } from "../../features/counter/counterSlice";
import style from "./counter.module.scss";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className={style.test}>
      <button className={style.btn} onClick={onIncrement}>
        +
      </button>
      <span>{count}</span>
      <button className={style.btn} onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
