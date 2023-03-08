// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Tombl from './components/Tombl';
import Navbar from './Navigation/Navbar';

function App() {

  const pencet = () => {
    return alert("Jolali di KLICK")
  }
  return (
    <div className="App">
             
        <Navbar/>
        <Tombl pencet = {pencet}/> 

    </div>
  );
}

export default App;
