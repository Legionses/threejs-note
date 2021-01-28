import React, {useState} from "react";
import "./UserInterface.css";

export const UserInterface = ({addNewNote}) => {
    const [noteText, setNoteText] = useState("")
    const [modalStatus, setModalStatus] = useState(false)

    const handleOnDoneBtn = () => {
        if (!noteText.length) return;

        const newNote = {
            text: noteText,
        }

        addNewNote(newNote);
        setNoteText("");
        setModalStatus(false);
    }

    return (
        <>
            <div className="uiBlock">
                <div className="uiBlock--back"/>
                <button className="uiBlock__btnNote" onClick={() => setModalStatus(!modalStatus)}>
                    <img src="noteIcon.svg"/>
                </button>
            </div>
            {modalStatus && <div className="noteTextModal">
                <div className="noteTextModal__head">
                    <h3>New Note</h3>
                </div>
                <div className="noteTextModal__body">
                    <textarea
                        onChange={({target:{value}}) => setNoteText(value)}
                        value={noteText}
                    />
                </div>
                <div className="noteTextModal__bottom">
                    <button
                        className="buttonMain colorBFail"
                        onClick={() => setModalStatus(false)}
                    >
                        Cancel
                        </button>
                    <button
                        className="buttonMain colorBSuccess"
                        onClick={handleOnDoneBtn}
                    >
                        Done
                    </button>
                </div>
            </div>}
        </>
    )
}