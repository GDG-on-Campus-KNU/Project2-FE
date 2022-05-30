import { combineReducers } from "redux";
import popUpReducer from "./popUp/reducers";
import rootRouteReducer from "./routes/rootRoute/reducers";

const rootReducer = combineReducers({
  rootRouteReducer,
  popUpReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
