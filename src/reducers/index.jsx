import { combineReducers } from "redux";
import AccountPageReducer from "./AccountPage";
import AuthPage from "./AuthPage";

export default combineReducers({
    AccountPageReducer,
    AuthPage
})