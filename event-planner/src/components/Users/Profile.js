import { useEffect, useState } from 'react'
import { getUserById, getHistory, getHosted } from '../../services/Users'
import styles from './Profile.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams } from 'react-router-dom'

const Profile = () => {
    let { userId } = useParams()
    const [user, setUser] = useState([])
    const [showSkills, setShowSkills] = useState(false)
    const [historys, setHistorys] = useState([])
    const [showHis, setShowHis] = useState(false)
    const [hosteds, setHosteds] = useState([])
    const [showHosted, setShowHosted] = useState(false)

    useEffect(() => {
        (async () => {
            let fetchedUser = await getUserById(userId)
            setUser(fetchedUser)
            setShowSkills(true)
        })()
    }, [])
	
    const onClickSkillsHandler = (userId) => {
        setShowSkills(true)
        setShowHis(false)
        setShowHosted(false)
    }
    
    const onClickHisHandler = (userId) => {
        (async () => {
            let fetchedHis = await getHistory()
            setHistorys(fetchedHis)
            setShowHis(true)
            setShowSkills(false)
            setShowHosted(false)
        })()
    }

    const onClickHostedHandler = (userId) => {
        (async () => {
            let fetchedHosted = await getHosted()
            setHosteds(fetchedHosted)
            setShowHosted(true)
            setShowSkills(false)
            setShowHis(false)
        })()
    }
    
    const DateTimeFormat = (timestamp) => {
        var date = new Date(timestamp);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    }
    
    return (
        <div className={[styles.profilePage, "flex justify-center"].join(" ")}>
            <div className={styles.profilePageInside}>
                <div className={[styles.header, "flex justify-start"].join(" ")}>
                    <div className={[styles.leftPart, "flex justify-center items-center relative h-32 w-50 sm:mb-0 mb-3"].join(" ")}>
                        <div className={styles.avata}>
                            {user.profilePicture && 
                                <img src={user.profilePicture} className={styles.avata} alt="user_pic" />   
                            }
                            {user.profilePicture === undefined && 
                                <img src="/user.png" className={styles.avata} alt="user_pic" />
                            }
                        </div>
                    </div>
                    <div className={styles.righttPart} class="flex-auto sm:ml-5 justify-evenly">
                        <div className={styles.fullname}>{user.fullname}</div>
                        <div className={styles.title}>{user.jobTitle}</div>
                        <div className={styles.usernameRow} class="flex">
                            <div className={styles.usernameLabel}>Username:</div>
                            <div className={styles.username}>{user.username}</div>
                        </div>
                        <div className={styles.ageRow} class="flex">
                            <div className={styles.ageLabel}>Date of birth:</div>
                            <div className={styles.age}> {DateTimeFormat(user.dateOfBirth)}</div>
                        </div>
                        <div className={styles.ratingRow} class="flex">
                            <div className={styles.ratingLabel}>Rating:</div>
                            <div className={styles.rating}>
                                <Rating
                                    name="total-rating"
                                    value={3}
                                    precision={0.5}
                                    readOnly={true}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                            </div>
                        </div>
                        <div className={[styles.options, "flex justify-start"].join(" ")}>
                            <div className={styles.skillLabel}>
                                <button
                                    onClick={onClickSkillsHandler}
                                    class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <span>Skills</span>
                                </button>
                            </div>
                            <div className={styles.historyLabel}>
                                <button 
                                    onClick={onClickHisHandler}
                                    class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <span>History</span>
                                    </button>
                                </div>
                            <div className={styles.hostedLabel}>
                                <button 
                                    onClick={onClickHostedHandler}
                                    class="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <span>Hosted</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {showSkills && <div className={[styles.content, ""].join(" ")}>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.skillName}>DJ </div>
                        <div class="flex justify-end">
                            <div className={styles.ratingValue}>
                                <Rating
                                    name="rating-skill-1"
                                    value={4}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.skillName}>DJ </div>
                        <div class="flex justify-end">
                            <div className={styles.ratingValue}>
                                <Rating
                                    name="rating-skill-2"
                                    value={2}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
                }
                {showHis && <div className={[styles.content, ""].join(" ")}>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.eventName}>Wedding in Paris </div>
                        <div class="flex justify-end">
                            <button class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <span>Accept</span>
                            </button>
                        </div>
                    </div>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.skillName}>Aniversary </div>
                        <div class="flex justify-end">
                            <button class="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <span>Accepted</span>
                            </button>
                        </div>
                    </div>
                </div>
                }
                {showHosted && <div className={[styles.content, ""].join(" ")}>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.eventName}>Wedding in Paris </div>
                        <div class="flex justify-end">
                            <button class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.skillName}>Aniversary </div>
                        <div class="flex justify-end">
                            <button class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}
export default Profile;