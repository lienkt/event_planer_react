import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from "./pages/Home"
import Event from "./pages/Event"
import Users from './pages/Users'
import Profile from './pages/Profile'
import EditUser from './pages/EditUser'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
    <div>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/event">Event</Link>
      <Link className='link' to="/profile">Profile</Link>
      <Link className='link' to="/users">Users</Link>
    </div>

    <Switch>
      <Route path="/" exact={true} component={Homepage} />
      <Route path='/event' exact={true} component={Event}/>
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/users" exact={true} component={Users} />
      <Route path='/users/:userId/edit' exact={true} component={EditUser} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;