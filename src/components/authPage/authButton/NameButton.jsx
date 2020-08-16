const NameButton = (props) => {

    const {login} = props;

    if (login) {
        return (
            "Register"
        )
    } else {
        return (
            "Login"
        )
    }
}

export default NameButton;