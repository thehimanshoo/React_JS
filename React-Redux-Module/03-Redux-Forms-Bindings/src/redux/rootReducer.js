import {combineReducers} from "redux";
import * as registerReducer from '../redux/register/register.reducer';

const rootReducer = combineReducers({
    [registerReducer.registerFeatureKey] : registerReducer.reducer
});
export {rootReducer};
