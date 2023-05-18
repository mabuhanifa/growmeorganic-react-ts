import { createContext, useContext, useReducer } from "react";
import { Action, MainState, StateType, type Children } from "../types/types";

const Context = createContext({} as MainState);

const initialState: StateType = {
    user: {
        name: "",
        phone: "",
        email: "",
    },
    posts: []
}


export const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state, user: action.payload
            }
        default:
            throw new Error();
    }

};



const Provider = ({ children }: Children) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
};

export function useStore() {
    return useContext(Context);
}



export default Provider;