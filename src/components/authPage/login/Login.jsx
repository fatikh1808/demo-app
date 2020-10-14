import React from "react";
import s from './Login.module.css';
import Input from "../../ui/input/Input";

const Login = (props) => {

    const {
        login,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber
    } = props;

    return (
        <div className={s.login}>
            <div className={s.componentText}>
                <h1>{login ? 'Login' : 'Register'}</h1>
            </div>
            <Input primary
                value={phoneNumber}
                type={'text'}
                name={'setPhoneNumber'}
                onChange={event => setPhoneNumber(event.target.value)}
                placeholder={'Phone Number'}
            />
            <Input
                value={password}
                type={'text'}
                name={'setPassword'}
                onChange={event => setPassword(event.target.value)}
                placeholder={'Password'}
            />
        </div>
    )
}

export default Login;