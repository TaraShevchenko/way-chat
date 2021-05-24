import send from "../Assets/right-arrow.svg";
import x from "./EntryField.module.scss"

const EntryField = ({placeholder}) => {
    return (
        <div className={`${x.entryField} p-3 p-lg-4`}>

            <input placeholder={placeholder} className={x.sendInput} type="text"/>

            <button className={x.sendMessage}>
                <img src={send} alt="send"/>
            </button>

        </div>
    )
}

export default EntryField;