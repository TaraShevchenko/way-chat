import x from './App.module.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Chat from "./components/Chat/Chat";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

import {BrowserRouter, Route} from "react-router-dom";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = ({state, dispatch}) => {

    return (
        <BrowserRouter>
            <div>
                <Header />

                <div className={x.wrapper}>

                    <NavigationContainer/>

                    <Route path='/Profile'>
                        <ProfileContainer />
                    </Route>

                    <Route path='/Chat'>
                        <Chat Chat={state.Chat} dispatch={dispatch}/>
                    </Route>

                </div>

                <footer className={x.footer}>

                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
