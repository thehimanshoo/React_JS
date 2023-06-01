export const FETCH_EMPLOYEES = "FETCH_EMPLOYEES";

export const fetchEmployees = () => {
    return {
        type : FETCH_EMPLOYEES,
        payload : 'fetching Employees from Redux Store'
    }
};
