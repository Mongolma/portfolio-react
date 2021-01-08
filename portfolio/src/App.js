import './App.css';
import NavBar from "./components/Nav";
import {BrowserRouter as Router} from 'react-router-dom';
import SideBar from './components/SideBar';

function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
    </Router>
  );
}

export default App;
