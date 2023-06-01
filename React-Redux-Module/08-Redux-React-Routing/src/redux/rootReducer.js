import {combineReducers} from "redux";
import * as employeeReducer from './employees/employees.reducer';

const rootReducer = combineReducers({
    [employeeReducer.employeesFeatureKey] : employeeReducer.reducer
});
export {rootReducer};
