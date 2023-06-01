import * as userActions from './user.actions';
import {GET_USER_INFO_FAILURE, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, LOGOUT_USER} from "./user.actions";

export const usersFeatureKey = 'users';

let initialState = {
    loading : false,
    errorMessage : '',
    token : '',
    user : {},
    isAuthenticated : false
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case userActions.REGISTER_USER_REQUEST :
            return {
                ...state,
                loading : true
            };
        case userActions.REGISTER_USER_SUCCESS :
            return {
                ...state,
                loading : false
            };
        case userActions.REGISTER_USER_FAILURE :
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        case userActions.LOGIN_USER_REQUEST :
            return  {
                ...state,
                loading: true
            };
        case userActions.LOGIN_USER_SUCCESS :
            localStorage.setItem('events-token' , payload.token);
            return  {
                ...state,
                loading: false,
                token: payload.token,
                user : payload.user,
                isAuthenticated: true
            };
        case userActions.LOGIN_USER_FAILURE :
            return  {
                ...state,
                loading: false,
                errorMessage: payload,
                token : '',
                user : {},
                isAuthenticated : false
            };
        case LOGOUT_USER :
            localStorage.removeItem('events-token');
            return {
                token : '',
                user : {},
                isAuthenticated : false
            };
        case GET_USER_INFO_REQUEST :
            return {
                ...state,
                loading: true
            };
        case GET_USER_INFO_SUCCESS :
            return {
                ...state,
                loading: false,
                user: payload.user
            };
        case GET_USER_INFO_FAILURE :
            return {
                ...state,
                loading: false,
                user: {}
            };
        default : return state;
    }
};