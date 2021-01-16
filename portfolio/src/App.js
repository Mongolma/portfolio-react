import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages';
import Info from './components/InfoSection'
import Projects from './components/Projects'


function App() {
  return (
    <Router>
      <Switch>
<Route path='/' component={Home} exact />
{/* <Route path='/about' component={Info} exact />
<Route path='/project' component={Projects} exact /> */}
 <Route path='/linkedin' component={({history}) => { 
                  history.replace("/react-portfolio"); 
                  window.location.href = 'https://www.linkedin.com/in/yigezu-birhane-4951b3168/';
                  return null;
              }}/>


      </Switch>
    
    </Router>
  );
}

export default App;
