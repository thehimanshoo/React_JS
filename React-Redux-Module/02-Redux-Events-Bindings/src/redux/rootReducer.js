import {combineReducers} from "redux";
import * as messageReducer from './messageCard/messageCard.reducer';
import * as productItemReducer from './productItem/productItem.reducer';

const rootReducer = combineReducers({
    [messageReducer.messageFeatureKey] : messageReducer.reducer,
    [productItemReducer.productItemFeatureKey] : productItemReducer.reducer
});
export {rootReducer};
