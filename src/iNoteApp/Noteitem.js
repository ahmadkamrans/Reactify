import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';


const Noteitem = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote, editNote } = context
    const { note } = props;
    return (
        <div className="col-md-4">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5><i className="far fa-trash-alt mx-2"></i>
                        <div className='ms-auto'>
                            <button onClick={(e) => deleteNote(e, note._id)} className='btn btn-danger mx-1'>D</button>
                            <button onClick={(e) => editNote(e, note._id, 'Updated', 'Updated', 'Test')} className='btn btn-primary mx-1'>E</button>
                        </div>
                    </div>
                    <p className="card-text py-3">{note.description}</p>
                    <p className='form-text'>{note.tag}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem