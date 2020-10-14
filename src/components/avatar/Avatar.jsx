import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {green} from "@material-ui/core/colors";
import React from "react";

const Avatar = (props) => {

    const {isAuthenticated} = props;
    if (isAuthenticated) {
        return <AccountCircleIcon
            style={{
                fontSize: 50,
                color: green[900]
            }}/>
    } else {
        return null
    }
}

export default Avatar;