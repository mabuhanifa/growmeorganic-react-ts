import { useContext } from "react";
import { StateType } from "../types/types";
import { Context } from "./Context";

export function useSelector<T>(selector: (state: StateType) => T) {
  const { state } = useContext(Context);
  return selector(state);
}

export function useDispatch() {
  const { dispatch } = useContext(Context);
  return dispatch;
}
