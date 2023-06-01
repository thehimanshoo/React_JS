import Axios from "axios";

export const FETCH_ALL_EMPLOYEES_REQUEST = 'FETCH_ALL_EMPLOYEES_REQUEST';
export const FETCH_ALL_EMPLOYEES_SUCCESS = 'FETCH_ALL_EMPLOYEES_SUCCESS';
export const FETCH_ALL_EMPLOYEES_FAILURE = 'FETCH_ALL_EMPLOYEES_FAILURE';

export const FETCH_EMPLOYEE_REQUEST = 'FETCH_EMPLOYEE_REQUEST';
export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const FETCH_EMPLOYEE_FAILURE = 'FETCH_EMPLOYEE_FAILURE';

export const fetchAllEmployees = () => {
    return async (dispatch) => {
        try {
            dispatch({type : FETCH_ALL_EMPLOYEES_REQUEST});
            let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
            let response = await Axios.get(dataURL);
            dispatch({type : FETCH_ALL_EMPLOYEES_SUCCESS, payload : response.data});
        }
        catch (error) {
            dispatch({type : FETCH_ALL_EMPLOYEES_FAILURE, payload : error});
        }
    };
};

export const fetchEmployee = (employeeId) => {
    return async (dispatch) => {
        try {
            dispatch({type : FETCH_EMPLOYEE_REQUEST});
            let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/77fd2f17e30dd74e29dc39156420be1a/raw/9f872818c85abd63999200ebc963907f9197f812/customers.21-10-2020.json';
            let response = await Axios.get(dataURL);
            let employees = response.data;
            let selectedEmployee = employees.find(employee => employee.login.uuid === employeeId)
            dispatch({type : FETCH_EMPLOYEE_SUCCESS, payload : selectedEmployee});
        }
        catch (error) {
            dispatch({type : FETCH_EMPLOYEE_FAILURE, payload : error});
        }
    };
};
