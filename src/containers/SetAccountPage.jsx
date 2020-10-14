import {connect} from 'react-redux';
import SetAccountPage from "../components/setAccountPage/SetAccountPage";
import {bindActionCreators} from "redux";
import {setAccountInfo, getAccountInfo, changeAccountInfo} from "../actions";

const mapStateToProps = state => ({
    userId: state.AuthPage.userId,
    info: state.AccountPageReducer.info.filter(item => item.userId === state.AuthPage.userId)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setAccountInfo,
    getAccountInfo,
    changeAccountInfo
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetAccountPage);