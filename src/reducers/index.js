// We have three reducers, each handling different action types
// Dispatched inside our handleInitialData

import { combineReducers } from "redux";
import { authedUser } from "./authedUser";
import { users } from "./users";
import { tweets } from "./tweets";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer,
});
