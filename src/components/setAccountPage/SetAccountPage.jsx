import React from "react";
import Input from "../ui/Input";

const SetAccountPage = (props) => {

const {
    name,
    lastName,
    setDateOfBirth,
    setGender,
    dateOfBirth,
    setLastName,
    setName
} = props;

    const changeGender = (event) => {
        const {value} = event.target
        setGender(value)
    }

    return (
        <div>
            <Input type={'text'} label={'Имя'} value={name} onChange={setName}/>
            <Input type={'text'} label={'Фамилия'} value={lastName} onChange={setLastName}/>
            <Input type={'date'} label={'Дата рождения'} value={dateOfBirth} onChange={setDateOfBirth}/>
            <input type="radio" name="gender" value="male" onChange={(event) => changeGender(event)}/>
            <span>Male</span>
            <input type="radio" name="gender" value="female" onChange={(event) => changeGender(event)}/>
            <span>Female</span>
        </div>
    )
}

export default SetAccountPage;