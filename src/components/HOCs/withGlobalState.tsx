import React from "react";

import { GlobalStore } from "../../providers/state.provider";

/**
 * HOC to inject state and dispatcher
 * @param Component React child component
 */

const withGlobalState = (Component: any) => {
    return function WrapperComponent(props: any) {
        return (
            <GlobalStore.Consumer>
                {(context) => (
                    <Component
                        {...props}
                        state={context.state}
                        dispatch={context.dispatch}
                    />
                )}
            </GlobalStore.Consumer>
        );
    };
};

export default withGlobalState;
