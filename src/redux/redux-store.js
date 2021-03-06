import {combineReducers, createStore} from "redux";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";

const reducers = combineReducers({
    Chat: chatReducer,
    Profile: profileReducer,
    Navigation: navigationReducer
})

const store = createStore(reducers);

window.store = store;

export default store;