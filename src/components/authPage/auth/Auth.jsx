import React, {useState} from "react";
import SetLogin from "../setLogin/SetLogin";
import AuthButton from "../authButton/AuthButton";

const Auth = () => {

    const [login, setLogin] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const func = () => {
        if (login) {
            return (
                setLogin(false),
                    setPassword(''),
                    setPhoneNumber('')
            )
        } else {
            return (
                setLogin(true),
                    setPassword(''),
                    setPhoneNumber('')
            )
        }
    }

    const handleSubmit = () => {
        console.log(phoneNumber, password)
    }

    return (
        <div>
            <SetLogin
                login={login}
                setLogin={setLogin}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                password={password}
                setPassword={setPassword}/>
            <AuthButton
                login={login}
                func={func}
            />
            <AuthButton
                login={!login}
                func={handleSubmit}
            />
        </div>
    )
}

export default Auth;