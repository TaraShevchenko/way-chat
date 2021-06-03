import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {Provider} from "react-redux";

export const testContext = React.createContext();

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
        let state = store.getState();
        rerenderEntireTree(state);
    }
);
