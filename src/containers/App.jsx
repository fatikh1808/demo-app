import {connect} from 'react-redux';
import App from "../../src/App";
import {bindActionCreators} from "redux";
import {logout, getAccountInfo, setAccountInfo, changeAccountInfo} from "../actions";

const mapDispatchToProps = dispatch => bindActionCreators({
    logout,
    getAccountInfo,
    setAccountInfo,
    changeAccountInfo
}, dispatch);

const mapStateToProps = state => ({
    isAuthenticated: state.AuthPage.isAuthenticated,
    info: state.AccountPageReducer.info.filter(item => item.userId === state.AuthPage.userId),
    userId: state.AuthPage.userId
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);