import * as alertActions from './alert.actions';

export const alertFeatureKey = 'alert';

let initialState = [];

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case alertActions.SET_ALERT:
            return [...state , payload];
        case alertActions.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload.id);
        default : return state;
    }
};