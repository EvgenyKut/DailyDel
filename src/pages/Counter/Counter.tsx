import React from "react";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import styles from "./styles.module.scss";

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
    <div className={styles.test}>
      <button className={styles.btn} onClick={onIncrement}>
        +
      </button>
      <span>{count}</span>
      <button className={styles.btn} onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default React.memo(Counter); // тут смысла не имеет, но все же))
