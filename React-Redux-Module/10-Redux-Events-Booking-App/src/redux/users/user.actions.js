import Axios from "axios";
import * as alertActions from '../alert/alert.actions';
import * as userUtil from '../../util/userUtil';
import * as tokenUtil from '../../util/tokenUtil';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const registerUser = (user, history) => {
    return async (dispatch) => {
        try {
            dispatch({type : REGISTER_USER_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/users/register';
            let response = await Axios.post(dataURL, user);
            dispatch({type : REGISTER_USER_SUCCESS , payload : response.data});
            dispatch(alertActions.setAlert(response.data.msg , 'success'));
            history.push('/users/login');
        }
        catch (error) {
            console.error(error);
            dispatch({type : REGISTER_USER_FAILURE , payload : error.response.data});
            let errorList = error.response.data.errors;
            for(let error of errorList){
                dispatch(alertActions.setAlert(error.msg , 'danger'))
            }
        }
    };
};

export const loginUser = (user, history) => {
    return async (dispatch) => {
        try {
            dispatch({type : LOGIN_USER_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/users/login';
            let response = await Axios.post(dataURL, user);
            dispatch({type : LOGIN_USER_SUCCESS , payload : response.data});
            dispatch(alertActions.setAlert(response.data.msg , 'success'));
            history.push('/');
        }
        catch (error) {
            console.error(error);
            dispatch({type : LOGIN_USER_FAILURE , payload : error.response.data});
            let errorList = error.response.data.errors;
            for(let error of errorList){
                dispatch(alertActions.setAlert(error.msg , 'danger'))
            }
        }
    };
};

export const logOutUser = (history) => {
    return (dispatch) => {
        dispatch({type : LOGOUT_USER});
        history.push('/');
    };
};

export const getUserInfo = () => {
    return async (dispatch) => {
        if(userUtil.getToken()){
            tokenUtil.setAuthToken(userUtil.getToken());
        }
        try {
            dispatch({type : GET_USER_INFO_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/users/'
            let response = await Axios.get(dataURL);
            dispatch({type : GET_USER_INFO_SUCCESS , payload : response.data});
        }
        catch (error) {
            console.error(error);
            dispatch({type : GET_USER_INFO_FAILURE , payload : error});
        }
    };
};