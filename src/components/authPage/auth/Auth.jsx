import React, {useState} from "react";
import Login from "../login/Login";
import s from './Auth.module.css';
import Button from "../../ui/button/Button";
import NameButton from "../authButton/NameButton";

const Auth = (props) => {

    const [login, setLogin] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const {
        handleLogin,
        register
    } = props;

    const func = () => {
        if (login) {
            return (
                setLogin(false) &&
                setPassword('') &&
                setPhoneNumber('')
            )
        } else {
            return (
                setLogin(true) &&
                setPassword('') &&
                setPhoneNumber('')
            )
        }
    }

    const handleSubmit = () => {
        if (login) {
            return handleLogin(phoneNumber, password)
        } else {
            return register(phoneNumber, password)
        }
    }

    return (
        <div className={s.authPage}>
            <Login
                login={login}
                setLogin={setLogin}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                password={password}
                setPassword={setPassword}
            />
            <Button
                onClick={handleSubmit}
            >
                <NameButton login={!login}/>
            </Button>
            <Button primary
                    onClick={func}
            >
                <NameButton login={login}/>
            </Button>
        </div>
    )
}

export default Auth;