import { RootState } from "../store/rootReducer";
import { updateRootRoute } from "../store/routes/rootRoute/actions";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useRootRoute() {
  const root = useSelector((root: RootState) => root.rootRouteReducer.root);

  const dispatch = useDispatch();

  const __updateRootFromHooks = useCallback(
    (diff: "login" | "main") => dispatch(updateRootRoute(diff)),
    [dispatch]
  );

  return {
    root,
    __updateRootFromHooks,
  };
}
