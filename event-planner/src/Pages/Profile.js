import { useHistory } from 'react-router-dom'
import ListUsers from '../components/Users/Profile'

const Profile = () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return <section>
        <ListUsers />
        <button onClick={handleClick}>Home Page</button>
    </section>
}

export default Profile