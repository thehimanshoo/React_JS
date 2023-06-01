import React from "react";
import {Route , Redirect} from 'react-router-dom';
import * as userUtil from '../util/userUtil';

let PrivateRoute = ({component : Component , ...rest}) => {

    return <Route {...rest} render={(props) => {
        return !userUtil.isLoggedIn() ? <Redirect to="/users/login"/> : <Component {...props}/>
    }}/>
};
export default PrivateRoute;