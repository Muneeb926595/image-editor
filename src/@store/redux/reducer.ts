import { combineReducers } from "redux";

import auth from "../auth/AuthReducers";
import message from "../messages/MessagesReducer";
import modals from "../modals/ModalsReducers";
import search from "../search/SearchReducers";

const Foodbook = combineReducers({
  auth,
  message,
  modals,
  search,
});

export default Foodbook;
