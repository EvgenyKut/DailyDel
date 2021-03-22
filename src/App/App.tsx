import React from "react";
import Counter from "../components/Counter";
import style from "./app.module.scss";
// import { store } from "../redux-toolkit/";
import {store} from "./store"
import {Provider} from "react-redux"

const App = () => {
  return (
    <div className={style.container}>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
