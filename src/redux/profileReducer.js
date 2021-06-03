import AuthorImage from "../Assets/Profile/ProfileImage1.jpg";
import PostImage from "../Assets/Profile/PostImage.jpg";

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

const initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText) {
                state.Posts.push(
                    {
                        date: "13.12.2020",
                        likes: 0,
                        dislikes: 0,
                        text: state.newPostText,
                        images: []
                    }
                )

                state.newPostText = '';
            }
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

debugger;
export const newPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    newPostText: text
})

export default profileReducer;