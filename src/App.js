import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Newsapp from './Newsapp/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  console.log(apiKey)
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState({
    message: '',
    type: ''
  })
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} setMode={setMode} alert={alert} />
      <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/" element={<Textform heading="Input Text to analyze" mode={mode} alert={alert} setAlert={setAlert} />} />
        <Route exact path="/newsapp" element={<Newsapp key='general' country='india' apiKey={apiKey} category='general'  />} />
        <Route exact path="/newsapp/business" element={<Newsapp key='business' country='india' apiKey={apiKey} category='business'  />} />
        <Route exact path="/newsapp/entertainment" element={<Newsapp key='entertainment' country='india' apiKey={apiKey} category='entertainment'  />} />
        <Route exact path="/newsapp/health" element={<Newsapp key='health' country='india' apiKey={apiKey} category='health'  />} />
        <Route exact path="/newsapp/science" element={<Newsapp key='science' country='india' apiKey={apiKey} category='science'  />} />
        <Route exact path="/newsapp/sports" element={<Newsapp key='sports' country='india' apiKey={apiKey} category='sports'  />} />
        <Route exact path="/newsapp/technology" element={<Newsapp key='technology' country='india' apiKey={apiKey} category='technology'  />} />
      </Routes>
    </Router>
  );
}

export default App;
