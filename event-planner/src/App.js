import './App.css';
import Homepage from "./Pages/Home"
import details from "./Pages/details"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Router } from "workbox-routing";
// import Switch from "react-bootstrap/esm/Switch";


function App() {
  return (
    <div>
        <Router>
          <Switch>
          <Route path='/' exact={true} component={Homepage}/>
          <Route path='/Pages/details' exact={true} component={details}/>

          </Switch>
        </Router>
    </div>
  );
}

export default App;