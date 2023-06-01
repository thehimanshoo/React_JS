import {combineReducers} from "redux";
import * as userListReducer from '../redux/userList/userList.reducer';
import * as userListSimpleReducer from '../redux/userListSimple/userListSimple.reducer';

const rootReducer = combineReducers({
    [userListReducer.userListFeatureKey] : userListReducer.reducer,
    [userListSimpleReducer.userListSimpleFeatureKey] : userListSimpleReducer.reducer
});
export {rootReducer};
