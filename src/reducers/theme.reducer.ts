import { StateAction } from "../types/state-action-types";

export const themeReducerActions = {
    SET_THEME: "SET_THEME",
};

export const themeReducer = (
    state: string = "",
    action: StateAction
): string => {
    switch (action.type) {
        case themeReducerActions.SET_THEME:
            return action.payload;

        default:
            return state;
    }
};
