import React from "react";
import s from './AppBar.module.css';
import MainText from "./mainText/MainText";
import AvatarBlock from "./avatarBlock/AvatarBlock";

const AppBar = (props) => {

    const {
        isAuthenticated,
        logout
    } = props;




    return (
        <div className={s.header}>
            <MainText/>
            <AvatarBlock isAuthenticated={isAuthenticated} logout={logout}/>
        </div>
    )
}

export default AppBar;