import {connect} from "react-redux";
import Chat from "./Chat";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/chatReducer";


const mapStateToProps = (state) => ({
    Chat: state.Chat
})

const mapDispatchToProps = (dispatch) => ({
    onSendClickConnect: (ChatId) => {
        dispatch(addMessageActionCreator(ChatId));
    },
    newMessageTextConnect: (ChatId, text) => {
        dispatch(newMessageTextActionCreator(ChatId, text));
    }
})

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;