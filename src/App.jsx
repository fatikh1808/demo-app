import React, {useEffect} from 'react';
import {
    Switch
} from "react-router-dom";
import './App.css';
import AppBar from "./components/appBar/AppBar";
import Footer from "./components/footer/Footer";
import Router from "./components/Router";

const App = (props) => {

    const {
        logout,
        info,
        getAccountInfo,
        userId,
        isAuthenticated
    } = props;

    useEffect(() => {
        getAccountInfo()
    }, []);

    return (
        <div>
            <AppBar
                isAuthenticated={isAuthenticated}
                logout={logout}/>
            <Switch>
                <Router
                    info={info}
                    userId={userId}
                />
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
