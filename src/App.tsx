import Counter from "./pages/Counter";
import { store } from "./store";
import { Provider } from "react-redux";
import BaseStyle from "./components/BaseStyle";

const App = () => {
  return (
    <Provider store={store}>
      <BaseStyle>
        <Counter />
      </BaseStyle>
    </Provider>
  );
};

export default App;
