import React, { useState } from "react";

type Props = {};

const ProfilePage = (props: Props) => {
    const [buttonText, setButtonText] = useState("Click me, please");

    return (
        <div>
            This is the profile page
            <br />
            The button says: {buttonText}
        </div>
    );
};

export default ProfilePage;
