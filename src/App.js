import x from './App.module.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Chat from "./components/Chat/Chat";
import Navigation from "./components/Navigation/Navigation";
import ChatDetail from "./components/ChatDetail/ChatDetail";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={x.App}>
                <Header />

                <div className={x.wrapper}>

                    <Navigation/>

                    <Route path='/' exact>
                        <Profile />
                    </Route>

                    <Route path='/Profile'>
                        <Profile />
                    </Route>

                    <Route path='/Chat'>
                        <Chat title="Chat"/>
                    </Route>

                </div>

                <footer className={x.footer}>

                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
