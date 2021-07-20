import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Users from './pages/Users'
import EditUser from './pages/EditUser'

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
    <div>
      showAdmin && <Link className='link' to="/users">Users</Link>
    </div>

    <Switch>
      <Route path="/users" exact={true} component={Users} />
      <Route path='/users/:userId/edit' exact={true} component={EditUser} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;