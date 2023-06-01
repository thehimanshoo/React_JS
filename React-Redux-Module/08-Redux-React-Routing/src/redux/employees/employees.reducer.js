import * as employeeActions from './employees.actions';

export const employeesFeatureKey = 'employees';

let initialState = {
    loading : false,
    employees : [],
    selectedEmployee : {},
    errorMessage : ''
};

export const reducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        // for all employees
        case employeeActions.FETCH_ALL_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.FETCH_ALL_EMPLOYEES_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            };
        case employeeActions.FETCH_ALL_EMPLOYEES_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        // for single employee
        case employeeActions.FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case employeeActions.FETCH_EMPLOYEE_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedEmployee: payload
            };
        case employeeActions.FETCH_EMPLOYEE_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            };
        default : return state;
    }
};
