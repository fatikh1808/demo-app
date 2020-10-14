import React, {useEffect} from 'react';
import s from './AccountPage.module.css';
import AccountCash from "./accountCash/AccountCash";
import Partners from "./partners/Partners";
import AccountInfoTab from "./accountInfo/AccountInfoTab";

const AccountPage = (props) => {


    const {
        getAccountInfo,
        info
    } = props;

    useEffect(() => {
        getAccountInfo()
    }, []);


    return (
        <div className={s.accountPage}>
            <AccountInfoTab info={info}/>
            <AccountCash/>
            <Partners/>
        </div>
    )
}
export default AccountPage;