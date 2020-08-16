import React from "react";

const Login = (props) => {

    const {
        name,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber
    } = props;

    return (
        <div>
            <h1>{name}</h1>
            <input value={phoneNumber}
                   type={'text'}
                   name={'setPhoneNumber'}
                   onChange={event => setPhoneNumber(event.target.value)}
                   placeholder={'Phone Number'}/>
            <input value={password}
                   type={'text'}
                   name={'setPassword'}
                   onChange={event => setPassword(event.target.value)}
                   placeholder={'Password'}/>
        </div>
    )
}

export default Login;