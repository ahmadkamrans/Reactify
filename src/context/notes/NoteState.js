import NoteContext from "./NoteContext";
import { useState } from "react";



const host = 'http://localhost:3001'
const NoteState = (props) => {
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)


  // Add a Note
  const getAllNotes = async () => {

    // TODO: API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMGE5MGI3YTAwOTZlZjM1NmRiZDQzIn0sImlhdCI6MTY1NzcwNDIxOX0.AwCVb8kyBw3f2ryzNmv6sUsW-CWBrh1b9OZCv1ll9E0',

      },
    })
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {

    // TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMGE5MGI3YTAwOTZlZjM1NmRiZDQzIn0sImlhdCI6MTY1NzcwNDIxOX0.AwCVb8kyBw3f2ryzNmv6sUsW-CWBrh1b9OZCv1ll9E0',

      },
      body: JSON.stringify({ title, description, tag })
    })
    response.json()
    getAllNotes()
  }

  // Delete a Note
  const deleteNote = async (e, id) => {

    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMGE5MGI3YTAwOTZlZjM1NmRiZDQzIn0sImlhdCI6MTY1NzcwNDIxOX0.AwCVb8kyBw3f2ryzNmv6sUsW-CWBrh1b9OZCv1ll9E0',
      }
    })

    response.json()
    getAllNotes()
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJjMGE5MGI3YTAwOTZlZjM1NmRiZDQzIn0sImlhdCI6MTY1NzcwNDIxOX0.AwCVb8kyBw3f2ryzNmv6sUsW-CWBrh1b9OZCv1ll9E0',

      },
      body: JSON.stringify({ title, description, tag })
    })
     response.json();

    for (let index = 0; index < notes.length; index++) {
      if (notes[index]._id === id) {
        console.log(notes[index])
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }

    }
    getAllNotes()
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;