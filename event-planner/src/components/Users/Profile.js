import { useEffect, useState } from 'react'
import { getUsers } from '../../services/Users'
import styles from './ListUsers.module.css'

const Profile = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            let fetchedUsers = await getUsers()
            setUsers(fetchedUsers)
        })()
    }, [])
	
    return (
        <div>
            <h2 className={styles.title}>Profile</h2>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <div>
                            Email: {user.email};
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Profile;