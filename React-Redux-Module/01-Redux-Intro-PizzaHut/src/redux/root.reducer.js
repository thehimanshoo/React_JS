import {combineReducers} from "redux";
import {pizzahutReducer} from "./pizzahut/pizzahut.reducer";

let rootReducer = combineReducers({
    pizza : pizzahutReducer
});
export {rootReducer};
