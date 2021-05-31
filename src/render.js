import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state, addMessage, addPost) => {


    ReactDOM.render(
        <React.StrictMode>
            <App  state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    )

}


