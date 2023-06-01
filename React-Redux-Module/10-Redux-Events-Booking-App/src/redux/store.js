import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middleWares = [logger , thunk];
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));