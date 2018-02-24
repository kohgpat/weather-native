import { combineReducers } from "redux";

import settings from "./settings/reducers";
import cities from "./cities/reducers";

const rootReducer = combineReducers({ settings, cities });

export default rootReducer;
