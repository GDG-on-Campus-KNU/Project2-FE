import { combineReducers } from "redux";
import popUpReducer from "./popUp/reducers";

const rootReducer = combineReducers({
  popUpReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
