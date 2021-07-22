import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from "./pages/Home"
import Event from "./pages/Event"
import Users from './pages/Users'
import Profile from './pages/Profile'
import EditUser from './pages/EditUser'
import SearchBar from './components/Search/SearchBar'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <div class="headerBar flex justify-between items-center">
        <div class="flex justify-start items-center">
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/profile">Profile</Link>
          <Link className='link' to="/users">Users</Link>
        </div>
        <div class="flex justify-end items-center">
          <SearchBar />
          <Link className='link' to="/profile">
            <img src="/user_icon1.png" className='userLink' alt="bg" />
          </Link>
          <Link className='link' to="/logout">Logout</Link>
        </div>
      </div>
    <Switch>
      <Route path="/" exact={true} component={Homepage} />
      <Route path='/:eventId/detail' exact={true} component={Event} />
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/users" exact={true} component={Users} />
      <Route path='/users/:userId/edit' exact={true} component={EditUser} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;