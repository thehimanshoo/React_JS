import Axios from "axios";
import * as alertActions from '../alert/alert.actions';
import * as userUtil from '../../util/userUtil';
import * as tokenUtil from '../../util/tokenUtil';

export const UPLOAD_EVENT_REQUEST = 'UPLOAD_EVENT_REQUEST';
export const UPLOAD_EVENT_SUCCESS = 'UPLOAD_EVENT_SUCCESS';
export const UPLOAD_EVENT_FAILURE = 'UPLOAD_EVENT_FAILURE';

export const GET_FREE_EVENT_REQUEST = 'GET_FREE_EVENT_REQUEST';
export const GET_FREE_EVENT_SUCCESS = 'GET_FREE_EVENT_SUCCESS';
export const GET_FREE_EVENT_FAILURE = 'GET_FREE_EVENT_FAILURE';

export const GET_PRO_EVENT_REQUEST = 'GET_PRO_EVENT_REQUEST';
export const GET_PRO_EVENT_SUCCESS = 'GET_PRO_EVENT_SUCCESS';
export const GET_PRO_EVENT_FAILURE = 'GET_PRO_EVENT_FAILURE';

export const uploadEvent = (event,history) => {
    return async (dispatch) => {
        try {
            dispatch({type : UPLOAD_EVENT_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/events/upload';
            let response = await Axios.post(dataURL, event);
            dispatch({type : UPLOAD_EVENT_SUCCESS , payload : response.data});
            dispatch(alertActions.setAlert('Event is Successfully Uploaded' , 'success'));
            if(event.type === 'FREE'){
                history.push('/events/free');
            }
            if(event.type === 'PRO'){
                history.push('/events/pro');
            }
        }
        catch (error) {
            dispatch({type : UPLOAD_EVENT_FAILURE , payload : error.response.data});
        }
    }
};

export const getFreeEvents = () => {
    return async (dispatch) => {
        try {

            dispatch({type : GET_FREE_EVENT_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/events/free';
            let response = await Axios.get(dataURL);
            dispatch({type : GET_FREE_EVENT_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({type : GET_FREE_EVENT_FAILURE , payload : error.response.data});
        }
    }
};

export const getProEvents = () => {
    return async (dispatch) => {
        try {
            if(userUtil.getToken()){
                tokenUtil.setAuthToken(userUtil.getToken());
            }
            dispatch({type : GET_PRO_EVENT_REQUEST});
            let dataURL = 'http://127.0.0.1:5000/api/events/pro';
            let response = await Axios.get(dataURL);
            dispatch({type : GET_PRO_EVENT_SUCCESS , payload : response.data});
        }
        catch (error) {
            dispatch({type : GET_PRO_EVENT_FAILURE , payload : error.response.data});
        }
    }
};