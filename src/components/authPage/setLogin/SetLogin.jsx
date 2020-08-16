import React from "react";
import Login from "../login/Login";

const SetLogin = (props) => {

    const {
        login,
        setLogin,
        phoneNumber,
        setPassword,
        setPhoneNumber,
        password
    } = props;

    if (login) {
        return <Login
            setLogin={setLogin}
            value={true}
            name={'Login'}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            password={password}
            setPassword={setPassword}/>
    } else {
        return <Login
            setLogin={setLogin}
            value={false}
            name={'Register'}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            password={password}
            setPassword={setPassword}/>
    }
}

export default SetLogin;