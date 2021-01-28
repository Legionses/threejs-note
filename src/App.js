import React, {useState, useCallback} from "react";
import './App.css';
import CanvasComponent from "./components/CanvasComponent/CanvasComponent";
import {UserInterface} from "./components/UserInterface/UserInterface";

function App() {
    const [notesArr, setNotesArr] = useState([
        {
            id: "first",
            text: "First part\nSecond part\nThird part",
            centerCoords: [0, 0 ,0]
        }, {
            id: "second",
            text: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE SED DO EIUSMOD TEMPOR INCIDIDUNT UT",
            centerCoords: [0, 0 ,0]
        }
        ]);

    const makeNewNote = useCallback(noteData => {
        const newNote = {
            ...noteData,
            centerCoords: [0, 0, 0],
            id: '_' + Math.random().toString(36).substr(2, 9)
        }
        return setNotesArr([...notesArr,newNote])
    },[notesArr])

    const deleteNote = useCallback(
        noteID => setNotesArr(notesArr.filter(({id}) => id !== noteID))
        ,[notesArr])

    return (
            <div className="App">
                <CanvasComponent notesArr={notesArr} deleteNote={deleteNote}/>
                <UserInterface addNewNote={makeNewNote}/>
            </div>
    );
}

export default App;
