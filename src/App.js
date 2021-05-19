import x from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Chat from "./components/Chat/Chat";
import Navigation from "./components/Navigation/Navigation";
import ChatDetail from "./components/ChatDetail/ChatDetail";
import Profile from "./components/Profile/Profile";

import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={x.App}>
                <header className={x.header}>

                </header>

                <div className={x.wrapper}>

                    <Navigation/>

                    <Route path='/Chat'>
                        <Chat title="Chat"/>
                        <ChatDetail/>
                    </Route>

                    <Route path='/Profile'>
                        <Profile />
                    </Route>
                </div>

                <footer className={x.footer}>

                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
