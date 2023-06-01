import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SELECT_CONTACT
} from "./contacts.actionTypes";

export const CONTACT_FEATURE_KEY = 'contact';

let initialState = {
    loading : false,
    contacts : [],
    errorMessage : '',
    selectedContact : {}
};

let contactReducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_CONTACTS_REQUEST :
            return {
                ...state,
                loading : true
            };
        case FETCH_CONTACTS_SUCCESS :
            return  {
                ...state,
                loading: false,
                contacts: payload
            };
        case FETCH_CONTACTS_FAILURE :
            return  {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case SELECT_CONTACT :
            return  {
                ...state,
                selectedContact: payload
            };
        default : return state;
    }
};
export {contactReducer};
