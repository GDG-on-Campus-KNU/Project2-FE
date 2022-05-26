import { UPDATE_ROOT_ROUTE } from "./modules/actionTypes";

export const updateRootRoute = (payload: "login" | "main") => ({
  type: UPDATE_ROOT_ROUTE,
  payload,
});

export type RootRouteActionTypes = ReturnType<typeof updateRootRoute>;
