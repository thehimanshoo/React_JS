import {rootReducer} from "./rootReducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from 'redux-logger';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
export {store};
