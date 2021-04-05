import { createContext, useReducer, useContext } from "react";
import MenuReducer from "./reducers/menuReducers";

const initialState = {
  MenuList: {
    error: false,
    data: null,
    loading: false,
  },
};

const MenuStateContext = createContext(null);
const MenuDispatchContext = createContext(null);

export function MenuProvider({ children }: any) {
  const [state, dispatch]: [any, any] = useReducer(MenuReducer, initialState);
  return (
    <MenuStateContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
  );
}

export function useMenuState() {
  const state = useContext(MenuStateContext);
  if (!state) {
    throw new Error("Cannot find UsersProvider");
  }
  return state;
}

export function useMenuDispatch() {
  const dispatch = useContext(MenuDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UsersProvider");
  }
  return dispatch;
}
