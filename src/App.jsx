import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainrer/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer/HookCakeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is app</h1>
        <CakeContainer />
        <HookCakeContainer />
      </div>
    </Provider>
  );
};

export default App;
