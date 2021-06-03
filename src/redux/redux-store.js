import {combineReducers, createStore} from "redux";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import {devToolsEnhancer} from 'redux-devtools-extension';

const reducers = combineReducers({
    Chat: chatReducer,
    Profile: profileReducer,
    Navigation: navigationReducer
})

const store = createStore(reducers, /* preloadedState, */  devToolsEnhancer(
    // Specify custom devTools options
));

export default store;