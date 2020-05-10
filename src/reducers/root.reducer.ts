import { GlobalState } from "../types/global-state-types";
import { StateAction } from "../types/state-action-types";

import { buttonTextReducer } from "../reducers/button-text.reducer";
import { themeReducer } from "../reducers/theme.reducer";

/**
 * Captures all dispatched actions within the application
 */
const rootReducer = (state: GlobalState, action: StateAction): GlobalState => {
    const { buttonText, theme } = state;

    return {
        buttonText: buttonTextReducer(buttonText, action),
        theme: themeReducer(theme, action),
    };
};

export default rootReducer;
