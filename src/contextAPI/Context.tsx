import { createContext, useReducer } from "react";
import { MainState, type Children } from "../types/types";
import { initialState, reducer } from "./reducer";

export const Context = createContext({} as MainState);

const Provider = ({ children }: Children) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const store = { state, dispatch };

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
};

export default Provider;