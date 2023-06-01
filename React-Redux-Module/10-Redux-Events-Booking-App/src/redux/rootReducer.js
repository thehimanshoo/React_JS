import {combineReducers} from "redux";
import * as alertReducer from './alert/alert.reducer';
import * as userReducer from './users/user.reduces';
import * as eventReducer from './events/event.reducer';

export const rootReducer = combineReducers({
    [alertReducer.alertFeatureKey] : alertReducer.reducer,
    [userReducer.usersFeatureKey] : userReducer.reducer,
    [eventReducer.eventFeatureKey] : eventReducer.reducer
});