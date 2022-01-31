import ChangeState from "./reducer/GuideAction";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  ChangeState,
});

export default rootReducer;
