import { createContext, useContext, useReducer } from "react";
import { Action, MainState, StateType, type Children } from "../types/types";


const initialState: StateType = {
    user: {
        name: "",
        phone: "",
        email: "",
    },
    posts: []
}

const reducer = (state: StateType, action: Action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state, user: action.payload
            }
        case "ADD_POSTS":
            return {
                ...state, posts: action.payload
            }

        default:
            throw new Error();
    }

};

const Context = createContext({} as MainState);
const Provider = ({ children }: Children) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const store = { state, dispatch };
    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    );
};

export function useSelector<T>(selector: (state: StateType) => T) {
    const { state } = useContext(Context)
    return selector(state);
}

export function useDispatch() {
    const { dispatch } = useContext(Context);
    return dispatch;

}

export default Provider;