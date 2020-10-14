import {connect} from 'react-redux';
import Auth from "../components/authPage/auth/Auth";
import {bindActionCreators} from "redux";
import { handleLogin, register } from "../actions";

const mapDispatchToProps = dispatch => bindActionCreators({
    handleLogin,
    register
}, dispatch);

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);