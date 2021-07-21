import { useEffect, useState } from 'react'
import { getUsers } from '../../services/Users'
import styles from './Profile.module.css'

const Profile = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        (async () => {
            let fetchedUsers = await getUsers()
            setUser(fetchedUsers)
        })()
    }, [])
	
    return (
        <div>
        </div>
    )
}
export default Profile;