import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote'
import Notes from './Notes'
export default function Home() {



  const  {notes}  = useContext(NoteContext)
  return (
    <div className='container'>
      <h1 className='text-center my-2'>INOTES APP</h1>

      <h3 className='my-5 text-center'>All Notes</h3>
      <AddNote notes={notes} />
      <Notes />
    </div>
  )
}
