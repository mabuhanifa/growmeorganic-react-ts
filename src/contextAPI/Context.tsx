import { createContext, useContext } from "react";
import { type Children } from "../types/types";

const Context = createContext({});

const Provider = ({ children }: Children) => {
    return (
        <Context.Provider value={{ state: "hello" }}>
            {children}
        </Context.Provider>
    )
};

export function useStore() {
    return useContext(Context);
}



export default Provider;