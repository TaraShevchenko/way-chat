import x from './App.module.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from "./components/Header/Header";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import ChatContainer from "./components/Chat/ChatContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

import {BrowserRouter, Route} from "react-router-dom";



const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>

                <div className={x.wrapper}>

                    <NavigationContainer/>

                    <Route exact path='/'>
                        <div className='intro'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="react"/>
                        </div>
                    </Route>

                    <Route path='/Profile'>
                        <ProfileContainer/>
                    </Route>

                    <Route path='/Chat'>
                        <ChatContainer/>
                    </Route>

                    <Route path='/Friends'>
                        <FriendsContainer/>
                    </Route>

                </div>

                <footer className={x.footer}>

                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
