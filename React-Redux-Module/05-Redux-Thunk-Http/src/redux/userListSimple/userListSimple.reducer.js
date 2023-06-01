import * as userListSimpleActions from './userListSimple.actions';

export const userListSimpleFeatureKey  = 'userListSimple';

let initialState = {
    loading : false,
    users : [],
    errorMessage : ''
};

export const reducer = (state=initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case userListSimpleActions.FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            };
        case userListSimpleActions.FETCH_USER_SUCCESS:
            return  {
                ...state,
                loading: false,
                users : payload
            };
        case userListSimpleActions.FETCH_USER_FAILURE:
            return  {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return state;
    }
};
