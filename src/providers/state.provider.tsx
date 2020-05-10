import React from "react";
import { GlobalState } from "../types/global-state-types";
import rootReducer from "../reducers/root.reducer";
import { initialState } from "../store/initial-state";

type StateProviderProps = {
    children: any;
};

// Define state of the context object
type StateContext = {
    state: GlobalState;
    dispatch: ({ type }: { type: string }) => void;
};

export const GlobalStore = React.createContext({} as StateContext);

// Wrapped function to handle thunks
const asyncer = (dispatch: any, state: GlobalState) => (action: any) => {
    typeof action === "function" ? action(dispatch, state) : dispatch(action);
};

export const StateProvider = (props: StateProviderProps) => {
    const [state, dispatchBase] = React.useReducer(rootReducer, initialState);

    const dispatch = React.useCallback(asyncer(dispatchBase, state), []);

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            {props.children}
        </GlobalStore.Provider>
    );
};
