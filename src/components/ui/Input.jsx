import React from "react";

const Input = (props) => {

    const {type, label, value, onChange} = props;

    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            <label>{label}</label>
        </div>
    )
}
export default Input;