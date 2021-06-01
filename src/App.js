import x from './App.module.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Chat from "./components/Chat/Chat";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

import {BrowserRouter, Route} from "react-router-dom";

function App({state, addMessage, addPost, changeNewPostText}) {

    return (
        <BrowserRouter>
            <div>
                <Header />

                <div className={x.wrapper}>

                    <Navigation NavigationItems={state.Navigation.NavigationItems}/>

                    <Route path='/Profile'>
                        <Profile Profile={state.Profile} addPost={addPost} changeNewPostText={changeNewPostText}/>
                    </Route>

                    <Route path='/Chat'>
                        <Chat Chat={state.Chat} addMessage={addMessage} title="Chat"/>
                    </Route>

                </div>

                <footer className={x.footer}>

                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
