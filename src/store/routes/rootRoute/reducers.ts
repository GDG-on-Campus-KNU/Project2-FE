import { RootRouteActionTypes } from "./actions";
import { UPDATE_ROOT_ROUTE } from "./modules/actionTypes";

type RootRouteState = {
  root: "login" | "main";
};

const initialState: RootRouteState = {
  root: "login",
};

const rootRouteReducer = (
  state: RootRouteState = initialState,
  { type, payload }: RootRouteActionTypes
): RootRouteState => {
  switch (type) {
    case UPDATE_ROOT_ROUTE:
      return {
        root: payload,
      };

    default:
      return state;
  }
};

export default rootRouteReducer;
