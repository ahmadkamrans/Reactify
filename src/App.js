import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Newsapp from './Newsapp/News';
import InotesHome from './iNoteApp/Home'
import InotesLogin from './iNoteApp/NoteLogin'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  })
  return (

      <NoteState>
        <Router>
          <Navbar title="TextUtils" mode={mode} setMode={setMode} alert={alert} />
          <Routes>
            <Route path="/" element={<Textform heading="Input Text to analyze" mode={mode} alert={alert} setAlert={setAlert} />} />
            <Route exact path="/newsapp" element={<Newsapp key='general' country='india' apiKey={apiKey} category='general' />} />
            <Route path="/newsapp/business" element={<Newsapp key='business' country='india' apiKey={apiKey} category='business' />} />
            <Route path="/newsapp/entertainment" element={<Newsapp key='entertainment' country='india' apiKey={apiKey} category='entertainment' />} />
            <Route path="/newsapp/health" element={<Newsapp key='health' country='india' apiKey={apiKey} category='health' />} />
            <Route path="/newsapp/science" element={<Newsapp key='science' country='india' apiKey={apiKey} category='science' />} />
            <Route path="/newsapp/sports" element={<Newsapp key='sports' country='india' apiKey={apiKey} category='sports' />} />
            <Route path="/newsapp/technology" element={<Newsapp key='technology' country='india' apiKey={apiKey} category='technology' />} />
            <Route path="/inotes" element={<InotesLogin />} />
            <Route path="/inotes/home" element={<InotesHome />} />
          </Routes>
        </Router>
      </NoteState>

  );
}

export default App;
