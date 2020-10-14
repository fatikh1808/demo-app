import s from "../AccountPage.module.css";
import React from "react";

const Partners = (props) => {
    return(
        <div className={s.companies}>
            <div className={s.text}>
                <h2>Наши партнёры</h2>
            </div>
            <div className={s.items}>
                <img src={'https://static.citilink.ru/media/global/logo.png?1597664188'} alt={'citilink'}/>
            </div>
        </div>
    )
}
export default Partners;