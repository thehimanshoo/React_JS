import * as messageActions from './messageCard.actions';

export const messageFeatureKey = 'messageCard';

let initialState = {
    message : 'Hello'
};

export let reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case messageActions.GOOD_MORNING:
            return {
                message : 'Good Morning'
            };
        case messageActions.GOOD_AFTERNOON:
            return {
                message : 'Good Afternoon'
            };
        case messageActions.GOOD_EVENING:
            return {
                message : 'Good Evening'
            };
        default : return state;
    }
};

