import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
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
        
      </Routes>
    </Router>
  );
}

export default App;
