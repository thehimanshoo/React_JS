import {combineReducers} from "redux";
import * as bigBasketReducer from './bigbasket/bigbasket.reducer';

const rootReducer = combineReducers({
    [bigBasketReducer.bigBasketFeatureKey] : bigBasketReducer.reducer
});
export {rootReducer};
