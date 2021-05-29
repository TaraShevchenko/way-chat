//For Navigation
import ProfileIcon from '../Assets/Navigation/Profile.svg';
import ChatIcon from '../Assets/Navigation/Chat.svg';
//For Profile
import PostImage from '../Assets/Profile/PostImage.jpg';
import AuthorImage from '../Assets/Profile/ProfileImage1.jpg';
import {rerenderEntireTree} from "../render";
//For Chat


let state = {
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
}

export let addMessage = (newMessageText, ChatId) => {
    state.Chat.ChatList[ChatId].messages.push(
        {
            text: newMessageText,
            time: "te:st",
            author: "Test Test",
            authorImage: AuthorImage
        }
    )
    rerenderEntireTree(state);
}

export let addPost = (newMessageText) => {
    state.Profile.Posts.push(
        {
            date: "13.12.2020",
            likes: 0,
            dislikes: 0,
            text: newMessageText,
            images: []
        }
    )
    rerenderEntireTree(state);
}


export default state;