import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils"/>
      <Textform heading="Input Text to analyze"/>
    </div>
  );
}

export default App;
