import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Provider} from 'react-redux';
import './App.css';
import configureStore from '../src/store';
import AccountPage from "./components/accountPage/AccountPage";
import SetAccountPage from "./components/setAccountPage/SetAccountPage";
import Auth from "./components/authPage/auth/Auth";

const store = configureStore();

const App = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')

    return (
        <div className="App">
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path={'/auth'}>
                            <Auth/>
                        </Route>
                        <Route path={'/settings'}>
                            <SetAccountPage
                                name={name}
                                setName={setName}
                                lastName={lastName}
                                setLastName={setLastName}
                                dateOfBirth={dateOfBirth}
                                setDateOfBirth={setDateOfBirth}
                                setGender={setGender}
                            />
                        </Route>
                        <Route path={'/account'}>
                            <AccountPage
                                gender={gender}
                                name={name}
                                lastName={lastName}
                                dateOfBirth={dateOfBirth}
                            />
                        </Route>
                        <Redirect to={'/auth'}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
