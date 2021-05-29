import {rerenderEntireTree} from './render';
import state from "./redux/state";
import {addMessage, addPost} from "./redux/state";

rerenderEntireTree(state, addMessage, addPost)