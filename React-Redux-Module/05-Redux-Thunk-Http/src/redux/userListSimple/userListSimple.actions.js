import Axios from "axios";
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

// JavaScript Promises
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type : FETCH_USER_REQUEST});
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response) => {
            dispatch({type : FETCH_USER_SUCCESS , payload : response.data});
        }).catch((error) => {
            dispatch({type : FETCH_USER_FAILURE , payload: error});
        });
    };
};

// JavaScript Async-Await
export const fetchUsersAsync = () => {
    return async (dispatch) => {
        dispatch({type : FETCH_USER_REQUEST});
        try {
            let dataURL = 'https://jsonplaceholder.typicode.com/users';
            let response = await Axios.get(dataURL);
            dispatch({type : FETCH_USER_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({type : FETCH_USER_FAILURE , payload : error});
        }
    };
};

