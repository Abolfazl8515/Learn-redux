import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCramReducer from "./IceCream/IceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCramReducer,
});

export default rootReducer;
