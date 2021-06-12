import send from "../../Chat/ChatDetail/Assets/right-arrow.svg";
import x from "./EntryField.module.scss"

const EntryField = ({placeholder, inputRef, onSendClick, id, newText, text}) => {

    let onSendChange = (chatId) => {
        onSendClick(chatId)
    }



    return (
        <div className={`${x.entryField} p-3 p-lg-4`}>

            <input ref={inputRef} placeholder={placeholder} onChange={ () => {newText(id)}} value={text} className={x.sendInput} type="text"/>

            <button className={x.sendMessage} onClick={() => onSendChange(id)}>
                <img src={send} alt="send"/>
            </button>

        </div>
    )
}

export default EntryField;