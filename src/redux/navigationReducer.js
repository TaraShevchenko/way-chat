import ProfileIcon from "../Assets/Navigation/Profile.svg";
import ChatIcon from "../Assets/Navigation/Chat.svg";
import FriendsIcon from "../Assets/Navigation/Friends.svg";

const initialState = {
    NavigationItems: [
        {
            title: "Profile",
            href: "/Profile",
            icon: ProfileIcon
        },
        {
            title: "Friends",
            href: "/Friends",
            icon: FriendsIcon
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