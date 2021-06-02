import send from "../../Chat/ChatDetail/Assets/right-arrow.svg";
import x from "./EntryField.module.scss"

const EntryField = ({placeholder, inputRef, onSendClick, index, newText, text}) => {

    let onSendChange = (index) => {
        onSendClick(index)
    }

    return (
        <div className={`${x.entryField} p-3 p-lg-4`}>

            <input ref={inputRef} placeholder={placeholder} onChange={() => newText(index)} value={text} className={x.sendInput} type="text"/>

            <button className={x.sendMessage} onClick={() => onSendChange(index)}>
                <img src={send} alt="send"/>
            </button>

        </div>
    )
}

export default EntryField;