import React, { useContext } from 'react'
import noteContext from "../context/notes/NoteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <button className="btn btn-danger mx-2" onClick={(e) => { deleteNote(e, note._id) }}>D</button>
                        <button className="btn btn-success mx-2" onClick={() => { updateNote(note) }}>E</button>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className="form-text">{note.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem