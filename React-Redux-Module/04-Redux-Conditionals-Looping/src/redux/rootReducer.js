import {combineReducers} from "redux";
import * as hobbySelectorReducer from './hobbySelector/hobbySelector.reducer';
import * as hobbySelectorRadioReducer from './hobbySelectorRadio/hobbySelectorRadio.reducer';
import * as employeeCardReducer from './employeeCard/employeeCard.reducer';

const rootReducer = combineReducers({
    [hobbySelectorReducer.hobbySelectorFeatureKey] : hobbySelectorReducer.reducer,
    [hobbySelectorRadioReducer.hobbySelectorRadioFeatureKey] : hobbySelectorRadioReducer.reducer,
    [employeeCardReducer.employeeCardFeatureKey] : employeeCardReducer.reducer
});
export {rootReducer};
