import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [mode, setMode] = useState('light')
  return (
    <div className="App">
      <Navbar title="TextUtils" mode={mode} setMode={setMode}/>
      <Textform heading="Input Text to analyze" mode={mode}/>
      <About mode={mode}/>
    </div>
  );
}

export default App;
