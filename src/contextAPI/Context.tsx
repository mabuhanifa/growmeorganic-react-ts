import { createContext, useContext } from "react";
import { Action, StateType, type Children } from "../types/types";

const Context = createContext({} as StateType);

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
    }

};



const Provider = ({ children }: Children) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
};

export function useStore() {
    return useContext(Context);
}



export default Provider;