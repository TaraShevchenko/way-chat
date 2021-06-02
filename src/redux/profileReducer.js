const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
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

export const newPostTextActionCreator = (text) => ({
    type: CHANGE_NEW_POST_TEXT,
    newPostText: text
})

export default profileReducer;