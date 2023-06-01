import * as registerActions from './register.actions';

export const registerFeatureKey = 'register';

let initialState = {
    user : {
        username : '',
        email : '',
        password : '',
        designation : '',
        terms : false
    }
};

export const reducer = (state = initialState , action) => {
    const {type, payload} = action;
    switch(type) {
        case registerActions.REGISTER_USER:
            return {
                user : {
                    ...payload
                }
            };
        default : return state;
    }
};
