import * as employeeCardActions from './employeeCard.actions';

export const employeeCardFeatureKey = 'employeeCard';

let initialState = {
    employees : [
        {
            sno : 'AAA100',
            name : 'Rajan',
            age : 25,
            designation : 'Software Engineer',
            location : 'Hyderabad'
        },
        {
            sno : 'AAA101',
            name : 'Mahesh',
            age : 35,
            designation : 'Sr.Software Engineer',
            location : 'Bangalore'
        },
        {
            sno : 'AAA103',
            name : 'John',
            age : 40,
            designation : 'Project Manager',
            location : 'Chennai'
        },
        {
            sno : 'AAA104',
            name : 'Wilson',
            age : 55,
            designation : 'Director',
            location : 'Bangalore'
        }
    ]
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case employeeCardActions.FETCH_EMPLOYEES:
            return {
                ...state
            };
        default : return state;
    }
};
