import React from "react";
import style from "./app.module.scss";
import { store } from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Test from "../pages/Test";
import Test2 from "../pages/Test2";
import Sidebar from "../components/Sidebar";

const App = () => {
  return (
    <div className={style.container}>
      <Provider store={store}>
        <Sidebar>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/createLogin" component={CreateAccount} />
              <Route path="/test" component={Test} />
              <Route path="/test2" component={Test2} />
              <Redirect from="/" to="/login" />
            </Switch>
          </Router>
        </Sidebar>
      </Provider>
    </div>
  );
};

export default App;
