import Axios from "axios";

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


let fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUEST
    }
};

let fetchUserSuccess = (users) => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
};

let fetchUserFailure = (error) => {
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
};

// Real Action
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        let dataURL = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(dataURL).then((response) => {
            dispatch(fetchUserSuccess(response.data));
        }).catch((error) => {
            dispatch(fetchUserFailure(error))
        });
    };
};
