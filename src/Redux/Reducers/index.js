import { combineReducers } from "redux";
import isLogged from "./isLogged";
import inBasket from "./inBasket";

const allReducers = combineReducers({
  isLogged,
  inBasket,
});

export default allReducers;
