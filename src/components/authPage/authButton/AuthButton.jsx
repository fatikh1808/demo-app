import React from "react";
import NameButton from "./NameButton";

const AuthButton = (props) => {

    const {
        login,
        func
    } = props;


    return (
        <button onClick={func}><NameButton login={login}/></button>
    )
}

export default AuthButton;