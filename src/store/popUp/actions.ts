import { ReactNode } from 'react';
import {
  CLEAR_POP_UP,
  UPDATE_IS_SHOWN,
  UPDATE_POP_UP_CHILD,
} from './modules/actionsTypes';

// BLACK: action 두개로 쪼개는 편이 좋음 -> update popUpChild, updateIsShown
export const updatePopUpChildAction = (payload: ReactNode) => ({
  type: UPDATE_POP_UP_CHILD,
  payload,
});

export const updateIsShownAction = (payload: boolean) => ({
  type: UPDATE_IS_SHOWN,
  payload,
});

// BLACK: remove 보다는 flush, clear
export const clearPopUpAction = () => ({
  type: CLEAR_POP_UP,
  payload: {},
});

export type PopUpAction =
  | ReturnType<typeof updatePopUpChildAction>
  | ReturnType<typeof updateIsShownAction>
  | ReturnType<typeof clearPopUpAction>;
