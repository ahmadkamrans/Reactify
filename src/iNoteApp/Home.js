import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function Home() {
  const { notes } = useContext(NoteContext)
  return (
    <div className='container'>
      <h1 className='text-center my-2'>INOTES APP</h1>
      <h3>Add Note</h3>
      <form className='px-5'>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input type="email" class="form-control" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <input type="password" class="form-control" />
        </div>
        <button type="button" class="btn btn-success">Add Note</button>
        <hr />
      </form>


      <h3 className='my-3 text-center'>All Notes</h3>
      {
        notes.map((note)=>{
          console.log(note.title)
        })
      }
    </div>
  )
}
