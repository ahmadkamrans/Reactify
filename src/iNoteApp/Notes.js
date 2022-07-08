import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/NoteContext"
import Noteitem from './Noteitem';

const Notes = () => {
    
    const context = useContext(noteContext);
    const { notes, getAllNotes } = context;
    useEffect(() => {
        getAllNotes()
        // eslint-disable-next-line
      }, [])
    return (
        <>
            <div className="row my-3">
                <h2>You Notes</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes