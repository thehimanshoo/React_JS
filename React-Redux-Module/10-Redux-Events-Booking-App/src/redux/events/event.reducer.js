import * as eventActions from './event.actions';

export const eventFeatureKey = 'events';

let initialState = {
    loading : false,
    events : [],
    errorMessage : ''
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case eventActions.UPLOAD_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case eventActions.UPLOAD_EVENT_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case eventActions.UPLOAD_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case eventActions.GET_FREE_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case eventActions.GET_FREE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: payload.events
            };
        case eventActions.GET_FREE_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        case eventActions.GET_PRO_EVENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case eventActions.GET_PRO_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: payload.events
            };
        case eventActions.GET_PRO_EVENT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return state;
    }
};