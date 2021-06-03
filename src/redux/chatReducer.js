import AuthorImage from "../Assets/Profile/ProfileImage1.jpg";

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

const initialState = {
    ChatList: [
        {
            image: AuthorImage,
            name: "Patrick Hendricks",
            lastMessage: "Hello",
            lastMessageTime: "03:28",
            lastOnlineTime: "03:28",
            online: true,
            newMessageText: '',
            messages: [
                {
                    text: "Hello, bro",
                    time: "03:25",
                    author: "Taras Shevchenko",
                    authorImage: AuthorImage
                },
                {
                    text: "Hello",
                    time: "03:28",
                    author: "Patrick Hendricks",
                    authorImage: AuthorImage
                }
            ]
        },
        {
            image: AuthorImage,
            name: "Test Test",
            lastMessage: "Test",
            lastMessageTime: "te:st",
            lastOnlineTime: "03:28",
            online: false,
            newMessageText: '',
            messages: [
                {
                    text: "Test test test test",
                    time: "03:25",
                    author: "Test Test",
                    authorImage: AuthorImage
                },
                {
                    text: "Test",
                    time: "03:28",
                    author: "Patrick Hendricks",
                    authorImage: AuthorImage
                }
            ]
        }
    ],
}

const chatReducer = (state = initialState, action) => {
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