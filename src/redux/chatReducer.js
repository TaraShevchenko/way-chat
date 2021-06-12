import AuthorImage from "../Assets/Profile/ProfileImage1.jpg";

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';

const initialState = {
    ChatList: [
        {
            id: 1,
            image: AuthorImage,
            name: "Patrick Hendricks",
            lastMessage: "Hello",
            lastMessageTime: "03:28",
            lastOnlineTime: "03:28",
            online: true,
            newMessageText: '',
            messages: [
                {
                    id: 1,
                    text: "Hello, bro",
                    time: "03:25",
                    author: "Taras Shevchenko",
                    authorImage: AuthorImage
                },
                {
                    id: 2,
                    text: "Hello",
                    time: "03:28",
                    author: "Patrick Hendricks",
                    authorImage: AuthorImage
                }
            ]
        },
        {
            id: 2,
            image: AuthorImage,
            name: "Test Test",
            lastMessage: "Test",
            lastMessageTime: "te:st",
            lastOnlineTime: "03:28",
            online: false,
            newMessageText: '',
            messages: [
                {
                    id: 1,
                    text: "Test test test test",
                    time: "03:25",
                    author: "Test Test",
                    authorImage: AuthorImage
                },
                {
                    id: 2,
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
        case ADD_MESSAGE: {
            return {
                ...state,
                ChatList: [...state.ChatList.map((item,key) => {
                    if (action.ChatId === item.id) {
                        return {
                            ...item,
                            newMessageText: '',
                            messages: [
                                ...state.ChatList[key].messages,
                                {
                                    text: state.ChatList[key].newMessageText,
                                    time: "te:st",
                                    author: "Test Test",
                                    authorImage: AuthorImage
                                }
                            ]
                        }
                    }
                    return item;
                })]
            }
        }
        case CHANGE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                ChatList: [...state.ChatList.map(item => {
                    if (action.ChatId === item.id) {
                        return {
                            ...item,
                            newMessageText: action.newMessageText,
                        }
                    } else {
                        return item;
                    }
                })]
            }
        }
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