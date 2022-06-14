import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils"/>
      <Textform heading="Input Text to analyze"/>
      <About/>
    </div>
  );
}

export default App;
