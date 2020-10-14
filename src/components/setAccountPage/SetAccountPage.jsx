import React, {useEffect, useState} from "react";
import s from './SetAccountPage.module.css';
import {useHistory} from "react-router-dom";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

const SetAccountPage = (props) => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')

    const {
        setAccountInfo,
        userId,
        getAccountInfo,
        changeAccountInfo,
        info
    } = props;

    let history = useHistory();

    const changeGender = (event) => {
        const {value} = event.target
        setGender(value)
    }

    const setter = (info) => {
        if (info.length !== 0) {
            setName(info[0].name)
            setLastName(info[0].lastName)
            setDateOfBirth(info[0].dateOfBirth)
            setGender(info[0].gender)
        }
    }

    useEffect(() => {
        setter(info)
    }, []);

    const isAuthFunc = (Info, userId) => {
        if (info.length > 0) {
            return changeAccountInfo(Info, userId)
        } else {
            return setAccountInfo(Info, userId)
        }
    }

    const setInfo = () => {
        let Info = {
            name, lastName, dateOfBirth, gender
        }

        isAuthFunc(Info, userId)
        getAccountInfo()
        history.push('/account');
    }

    return (
        <div className={s.setAccountPage}>
            <div className={s.input}>
                <Input
                    secondary
                    type={'text'}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    danger
                    type={'text'}
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                <Input
                    basic
                    type={'date'}
                    value={dateOfBirth}
                    onChange={(event) => setDateOfBirth(event.target.value)}
                />
            </div>
            <div className={s.text}>
                <h4 className={s.textN}>
                    Имя
                </h4>
                <h4 className={s.textL}>
                    Фамилия
                </h4>
                <h4 className={s.textD}>
                    Дата рождения
                </h4>
            </div>
            <div className={s.gender}>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(event) => changeGender(event)}
                    />
                </div>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(event) => changeGender(event)}
                    />
                </div>
            </div>
            <div className={s.genderText}>
                <span>Male</span>
                <span>Female</span>
            </div>
            <Button
                secondary
                onClick={setInfo}
            >
                save Info
            </Button>
        </div>
    )
}

export default SetAccountPage;