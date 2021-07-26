import { useEffect, useState } from 'react'
import { getUserById, getHistory, getHosted } from '../../services/Users'
import styles from './Profile.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams, Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';

const Profile = () => {
    let { userId } = useParams()
    const [user, setUser] = useState([])
    const [showSkills, setShowSkills] = useState(false)
    const [historys, setHistorys] = useState([])
    const [showHis, setShowHis] = useState(false)
    const [hosteds, setHosteds] = useState([])
    const [showHosted, setShowHosted] = useState(false)
    const [cookies] = useCookies(['user'])

    useEffect(() => {
        (async () => {
            if (userId !== undefined && userId !== null){
                let fetchedUser = await getUserById(userId)
                setUser(fetchedUser)
                setShowSkills(true)
            } else {
                let fetchedUser = await getUserById(cookies.UserId)
                setUser(fetchedUser)
                setShowSkills(true)
            }
        })()
    }, [])
	
    const onClickSkillsHandler = () => {
        setShowSkills(true)
        setShowHis(false)
        setShowHosted(false)
    }
    
    const onClickAddMoreSkillHandler = () => {
        setShowSkills(true)
        setShowHis(false)
        setShowHosted(false)
    }
    
    const onClickHisHandler = () => {
        (async () => {
            let fetchedHis = await getHistory()
            setHistorys(fetchedHis)
            setShowHis(true)
            setShowSkills(false)
            setShowHosted(false)
        })()
    }

    const onClickHostedHandler = () => {
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
                                <img src={process.env.REACT_APP_API_URL + "/uploads/" + user.profilePicture} className={styles.avata} alt="user_pic" />   
                            }
                            {(user.profilePicture === undefined || user.profilePicture === null) && 
                                <img src="/user.png" className={styles.avata} alt="user_pic" />
                            }
                        </div>
                    </div>
                    <div className={styles.righttPart} class="flex-auto sm:ml-5 justify-evenly">
                        <div className={styles.fullname}>{user.fullName}</div>
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
                                    value={parseFloat(user.rating)}
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
                    {user.skills !== undefined && user.skills.map((skill) => {
                        return (
                        <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                            <div className={styles.skillName}>{skill.name}</div>
                            <div class="flex justify-end">
                                <div className={styles.ratingValue}>
                                    <Rating
                                        name="rating-skill-1"
                                        value={parseFloat(skill.rating)}
                                        precision={0.5}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                        />
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    <div className={[styles.contentItem, "flex justify-end"].join(" ")}>
                        { userId !== undefined && userId !== null &&
                            <Link to={`/${userId}/profile/rating`}
                                class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    Rating
                            </Link>
                        }&nbsp;&nbsp;
                        <Link to="/profile/skills"
                            class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                Add more
                        </Link>
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