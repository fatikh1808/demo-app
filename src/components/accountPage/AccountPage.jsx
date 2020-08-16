import React from 'react';
import './AccountPage.css';

const AccountPage = (props) => {

    const {
        name,
        lastName,
        dateOfBirth,
        gender
    } = props;

    return (
        <div className={'AccountPage'}>
            {name}
            {lastName}
            {dateOfBirth}
            {gender}
        </div>
    )
}
export default AccountPage;