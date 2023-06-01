import {combineReducers} from "redux";
import {CONTACT_FEATURE_KEY, contactReducer} from "./contacts/contacts.reducer";

let rootReducer = combineReducers({
    [CONTACT_FEATURE_KEY] : contactReducer
});

export {rootReducer};
