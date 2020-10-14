import AccountInfo from "./AccountInfo";
import s from "../AccountPage.module.css";
import SettingsIcon from "@material-ui/icons/Settings";
import {green} from "@material-ui/core/colors";
import React from "react";
import {useHistory} from "react-router-dom";

const AccountInfoTab = (props) => {

    let history = useHistory();
    const {info} = props;

    const infoMapping = () => {
        info.map((item) => (
            <AccountInfo item={item}/>
        ))
    }

    return (
        <div className={s.info}>
            {infoMapping}
            <div className={s.icon} onClick={() => history.push('/settings')}>
                <SettingsIcon style={{fontSize: 50, color: green[900]}}/>
            </div>
        </div>
    )
}
export default AccountInfoTab;