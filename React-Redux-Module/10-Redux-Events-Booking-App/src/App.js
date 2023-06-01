import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Navbar from "./root/layout/navbar/Navbar";
import Home from "./root/layout/home/Home";
import FreeEvents from "./events/free/FreeEvents";
import ProEvents from "./events/pro/ProEvents";
import UploadEvent from "./events/upload/UploadEvent";
import Login from "./users/login/Login";
import Register from "./users/register/Register";
import Alert from "./root/util/alert/Alert";
import * as userActions from './redux/users/user.actions';
import * as userUtil from './util/userUtil';
import {useDispatch} from "react-redux";
import PrivateRoute from "./util/PrivateRoute";

let App = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        if(userUtil.getToken()){
            dispatch(userActions.getUserInfo());
        }
    });

    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Alert/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/events/free" component={FreeEvents}/>
                    <PrivateRoute exact path="/events/pro" component={ProEvents}/>
                    <PrivateRoute exact path="/events/upload" component={UploadEvent}/>
                    <Route exact path="/users/login" component={Login}/>
                    <Route exact path="/users/register" component={Register}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
};


export default App;
