import React from "react";
import SetAccountPage from "../containers/SetAccountPage";
import {Route, Redirect} from "react-router-dom";
import AccountPage from "../containers/AccountPage";
import Auth from "../containers/AuthPage";

const Router = (props) => {
    const {
        info,
        userId
    } = props;

    if (userId !== null) {
        if (info.length === 0) {
            return (
                <div>
                    <Route path={'/settings'}>
                        <SetAccountPage/>
                    </Route>
                    <Redirect to={'/settings'}/>
                </div>
            )
        } else {
            return (
                <div>
                    <Route path={'/account'}>
                        <AccountPage/>
                    </Route>
                    <Route path={'/settings'}>
                        <SetAccountPage/>
                    </Route>
                    <Redirect to={'/account'}/>
                </div>
            )
        }
    } else {
        return (
            <div>
                <Route path={'/auth'}>
                    <Auth/>
                </Route>
                <Redirect to={'/auth'}/>
            </div>
        )
    }

}
export default Router;