import {
  clearPopUpAction,
  updateIsShownAction,
  updatePopUpChildAction,
} from "../store/popUp/actions";
import { RootState } from "../store/rootReducer";
import { ReactNode, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function usePopUp() {
  const dispatch = useDispatch();

  const popUp = useSelector((root: RootState) => root.popUpReducer);

  const __showPopUpFromHooks = useCallback(
    (diff: ReactNode) => {
      dispatch(updatePopUpChildAction(diff));
      dispatch(updateIsShownAction(true));
    },
    [dispatch]
  );
  const __hidePopUpFromHooks = useCallback(() => {
    dispatch(clearPopUpAction());
  }, [dispatch]);

  return {
    popUp,
    __showPopUpFromHooks,
    __hidePopUpFromHooks,
  };
}
