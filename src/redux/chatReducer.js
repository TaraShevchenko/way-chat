import AuthorImage from "../Assets/Profile/ProfileImage1.jpg";

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

const chatReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:

            if (state.ChatList[action.ChatId].newMessageText) {
                state.ChatList[action.ChatId].messages.push(
                    {
                        text: state.ChatList[action.ChatId].newMessageText,
                        time: "te:st",
                        author: "Test Test",
                        authorImage: AuthorImage
                    }
                )
                state.ChatList[action.ChatId].newMessageText = '';
            }
            return state;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.ChatList[action.ChatId].newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = (ChatId) => ({
    type: ADD_MESSAGE,
    ChatId: ChatId,
})

export const newMessageTextActionCreator = (text, ChatId) => ({
    type: CHANGE_NEW_MESSAGE_TEXT,
    newMessageText: text,
    ChatId: ChatId,
})

export default chatReducer;