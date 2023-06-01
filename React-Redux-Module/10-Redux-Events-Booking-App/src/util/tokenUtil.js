import Axios from "axios";
import * as userUtil from './userUtil';

export const setAuthToken = (token) => {
    if(token){
        Axios.defaults.headers.common['x-auth-token'] = token;
    }
    else{
        delete Axios.defaults.headers.common['x-auth-token'];
    }
};