import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from "./pages/Home"
import Event from "./pages/Event"
import CreateEvent from './pages/CreateEvent';
import Users from './pages/Users'
import Profile from './pages/Profile'
import EditUser from './pages/EditUser'
import SearchBar from './components/Search/SearchBar'
import Skills from './pages/Skills'
import Requirements from './pages/Requirements'
import Rating from './pages/Rating'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from "react"

function App() {
  // const [cookies] = useCookies(['user'])
  const [cookies, setCookie] = useCookies(['user']);
  const [showUser, setShowUser] = useState(false)
  const [showAdmin, setShowAdmin] = useState(false)
  
  useEffect(() => {
    // Test:
    setCookie('UserId', "60f9d0c77fb23a19e0d01ca9", { path: '/' });
    setCookie('Role', "admin", { path: '/' });


    const userId = cookies.UserId ? cookies.UserId : ""
    const role = cookies.Role ? cookies.Role : ""
    if (userId.length !== 0) {
      if (role === "admin") {
        setShowAdmin(true);
        setShowUser(true);
      } else {
        setShowUser(true);
      }
    } else {

    }
  }, [cookies])

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
      <Route path="/:eventId/requirements" exact={true} component={Requirements} />
      <Route path="/profile" exact={true} component={Profile} />
      <Route path="/:userId/profile" exact={true} component={Profile} />
      <Route path="/profile/skills" exact={true} component={Skills} />
      <Route path="/profile/rating" exact={true} component={Rating} />
      <Route path="/:userId/profile/rating" exact={true} component={Rating} />
      <Route path="/users" exact={true} component={Users} />
      <Route path='/users/:userId/edit' exact={true} component={EditUser} />
      <Route path='/createEvent' exact={true} component={CreateEvent} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;