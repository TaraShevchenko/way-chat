import ProfileIcon from "../Assets/Navigation/Profile.svg";
import ChatIcon from "../Assets/Navigation/Chat.svg";

const initialState = {
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
}

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default navigationReducer;