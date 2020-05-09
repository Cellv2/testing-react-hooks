import React, { useState, useContext } from "react";

type Props = {};

const LandingPage = (props: Props) => {
    const [buttonText, setButtonText] = useState("Click me, please");

    return (
        <div>
            This is the landing page
            <button onClick={() => setButtonText("Done, thanks!")}>
                {buttonText}
            </button>
        </div>
    );
};

export default LandingPage;
