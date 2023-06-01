import * as hobbySelectorActions from '../hobbySelector/hobbySelector.actions';

export const hobbySelectorFeatureKey = 'hobbySelector';

let initialState = {
    hobby : {
        eating : false,
        coding : false,
        sleeping : false
    }
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case hobbySelectorActions.CHECK_EATING:
            return {
                hobby : {
                    ...state.hobby,
                    eating : !state.hobby.eating
                }
            };
        case hobbySelectorActions.CHECK_CODING:
            return {
                hobby : {
                    ...state.hobby,
                    coding : !state.hobby.coding
                }
            };
        case hobbySelectorActions.CHECK_SLEEPING:
            return {
                hobby : {
                    ...state.hobby,
                    sleeping : !state.hobby.sleeping
                }
            };
        default : return  state;
    }
};
