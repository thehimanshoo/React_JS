import * as userListActions from './userList.actions';

export const userListFeatureKey  = 'userList';

let initialState = {
    loading : false,
    users : [],
    errorMessage : ''
};

export const reducer = (state=initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case userListActions.FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            };
        case userListActions.FETCH_USER_SUCCESS:
            return  {
                ...state,
                loading: false,
                users : payload
            };
        case userListActions.FETCH_USER_FAILURE:
            return  {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return state;
    }
};
