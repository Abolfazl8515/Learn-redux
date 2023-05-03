import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/cakeContainrer/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer/IceCreamContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>This is app</h1>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
