import { StateAction } from "../types/state-action-types";

export const buttonTextActionTypes = {
    SET_BUTTON_TEXT: "SET_BUTTON_TEXT",
};

export const buttonTextReducer = (
    state: string = "",
    action: StateAction
): string => {
    switch (action.type) {
        case buttonTextActionTypes.SET_BUTTON_TEXT:
            return action.payload;

        default:
            return state;
    }
};
