import * as hobbySelectorRadioActions from './hobbySelectorRadio.actions';

export const hobbySelectorRadioFeatureKey = 'hobbySelectorRadio';

let initialState = {
    hobby: null
};

export const reducer = (state = initialState, action) => {
    let {type , payload} = action;
    switch(type) {
        case hobbySelectorRadioActions.SELECT_EATING:
            return {
                hobby: payload
            };
        case hobbySelectorRadioActions.SELECT_CODING:
            return {
                hobby: payload
            };
        case hobbySelectorRadioActions.SELECT_SLEEPING:
            return {
                hobby: payload
            };
        default : return state;
    }
};
