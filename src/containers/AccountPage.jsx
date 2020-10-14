import {connect} from 'react-redux';
import AccountPage from "../components/accountPage/AccountPage";
import {bindActionCreators} from "redux";
import {getAccountInfo, logout} from "../actions";

const mapDispatchToProps = dispatch => bindActionCreators({
    getAccountInfo,
    logout
}, dispatch);

const mapStateToProps = state => ({
    info: state.AccountPageReducer.info.filter(item => item.userId === state.AuthPage.userId)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountPage);