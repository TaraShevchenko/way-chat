import {connect} from "react-redux";
import Profile from "./Profile";
import {addPostActionCreator, newPostTextActionCreator} from "../../redux/profileReducer";

const mapStateToProps = (state) => ({
    Profile: state.Profile,
})

const mapDispatchToProps = (dispatch) => ({
    onSendClickConnect: () => {
        dispatch(addPostActionCreator())
    },
    newPostTextConnect: (text) => {
        dispatch(newPostTextActionCreator(text))
    }
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;