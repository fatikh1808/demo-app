import s from "../AccountPage.module.css";
import React from "react";

const AccountInfo = (props) => {

    const {item} = props;

    return(
        <div key={item.id}>
            <h2 className={s.name}>{item.name}</h2>
            <h2 className={s.lastName}>{item.lastName}</h2>
            <h2 className={s.date}>{item.dateOfBirth}</h2>
        </div>
    )
}

export default AccountInfo;