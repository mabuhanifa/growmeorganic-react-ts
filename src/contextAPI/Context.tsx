import { createContext, useContext } from "react";
import { StateType, type Children } from "../types/types";

const Context = createContext({} as StateType);

const initialState: StateType = {
    user: {
        name: "",
        phone: "",
        email: "",
    },
    posts: []
}



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