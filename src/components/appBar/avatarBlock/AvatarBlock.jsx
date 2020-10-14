import s from "../AppBar.module.css";
import Avatar from "../../avatar/Avatar";
import React from "react";

const AvatarBlock = (props) => {

    const {isAuthenticated, logout} = props;

    return (
        <div
            className={s.exit}
            onClick={logout}>
            <Avatar
                isAuthenticated={isAuthenticated}
            />
        </div>
    )
}
export default AvatarBlock;