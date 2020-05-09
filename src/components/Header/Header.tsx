import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
    return (
        <div>
            <p>
                <Link to="/">Landing</Link>
            </p>
            <p>
                <Link to="/profile">Profile</Link>
            </p>
        </div>
    );
};

export default Header;
