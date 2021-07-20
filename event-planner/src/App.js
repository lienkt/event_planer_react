import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Users from './pages/Users'
import Profile from './pages/Profile'
import EditUser from './pages/EditUser'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
    <div>
      <Link className='link' to="/profile">Profile</Link>
      <Link className='link' to="/users">Users</Link>
    </div>

    <Switch>
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/users" exact={true} component={Users} />
      <Route path='/users/:userId/edit' exact={true} component={EditUser} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;