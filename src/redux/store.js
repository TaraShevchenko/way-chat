//For Navigation
import ProfileIcon from '../Assets/Navigation/Profile.svg';
import ChatIcon from '../Assets/Navigation/Chat.svg';
//For Profile
import PostImage from '../Assets/Profile/PostImage.jpg';
import AuthorImage from '../Assets/Profile/ProfileImage1.jpg';
//For Chat

//For dispatch
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";
import navigationReducer from "./navigationReducer";

let store = {
    _state: {
        Navigation: {
            NavigationItems: [
                {
                    title: "Profile",
                    href: "/Profile",
                    icon: ProfileIcon
                },
                {
                    title: "Chat",
                    href: "/Chat",
                    icon: ChatIcon
                }
            ]
        },
        Profile: {
            ProfileInfo: {
                name: 'Taras Shevcheko',
                image: AuthorImage,
                age: 21,
                email: 'TarasShevchenko@gmail.com',
            },
            newPostText: '',
            Posts: [
                {
                    date: "13.12.2020",
                    likes: 25000,
                    dislikes: 1000,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus.",
                    images: [
                        PostImage,
                    ]
                }
            ]
        },
        Chat: {
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
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        navigationReducer(this._state.Navigation, action);
        profileReducer(this._state.Profile, action);
        chatReducer(this._state.Chat, action);
        this._callSubscriber(store.getState());
    }
}

export default store;
window.store = store;