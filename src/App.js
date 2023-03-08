import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Tombl from './components/Tombl';

function App() {

  const pencet = () => {
    return alert("Jolali di KLICK")
  }
  return (
    <div className="App">
      
      <header className="App-header">
        
        <Header/>
        <Navbar/>

        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Daeng Muhammad
        </p>
        <Tombl pencet = {pencet}/>
        <a
          className="App-link"
          href="https://reactjs.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
