import React from "react";
import style from "./app.module.scss";
// import { store } from "../redux-toolkit/";
import { store } from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../components/views/Login/Login";
import Test from "../pages/Test";

const App = () => {
  return (
    <div className={style.container}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/test" component={Test} />
            <Redirect from="/" to="/login" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
