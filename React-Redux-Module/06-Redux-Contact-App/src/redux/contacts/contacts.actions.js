import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SELECT_CONTACT
} from "./contacts.actionTypes";
import Axios from "axios";

let fetchContacts = () => {
    return (dispatch) => {
        dispatch({type : FETCH_CONTACTS_REQUEST});
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/6476ae426cd08e3ee8854a2bf1338a1e/raw/cd59ee3eb7ca2715606ba3f623ee165a4d0931c1/contacts-18082020.json';
        Axios.get(dataURL).then((response) => {
            dispatch({type : FETCH_CONTACTS_SUCCESS , payload : response.data})
        }).catch((error) => {
            dispatch({type : FETCH_CONTACTS_FAILURE , payload : error})
        });
    }
};

let selectContact = (contact) => {
    return (dispatch) => {
        dispatch({ type : SELECT_CONTACT , payload : contact})
    }
};

export {fetchContacts, selectContact};
