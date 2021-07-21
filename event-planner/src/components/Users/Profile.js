import { useEffect, useState } from 'react'
import { getUsers } from '../../services/Users'
import styles from './Profile.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Profile = () => {
    const [user, setUser] = useState([])
    // const [skills, setSkills] = useState([])
    // const [showSkills, setShowSkills] = useState([])
    // const [historys, setHistorys] = useState([])
    // const [showHis, setShowHis] = useState([])
    // const [hosteds, setHosteds] = useState([])
    // const [showHosted, setShowHosted] = useState([])

    useEffect(() => {
        (async () => {
            let fetchedUsers = await getUsers()
            setUser(fetchedUsers)
        })()
    }, [])
	
    return (
        <div className={[styles.profilePage, "flex justify-center"].join(" ")}>
            <div className={styles.profilePageInside}>
                <div className={[styles.header, "flex justify-start"].join(" ")}>
                    <div className={[styles.leftPart, "flex justify-center items-center relative h-32 w-50 sm:mb-0 mb-3"].join(" ")}>
                        <div className={styles.avata}>
                            <img src="/user.png" className={styles.avata} alt="bg" />
                        </div>
                    </div>
                    <div className={styles.righttPart} class="flex-auto sm:ml-5 justify-evenly">
                        <div className={styles.fullname}>Alex</div>
                        <div className={styles.title}>DJ</div>
                        <div className={styles.usernameRow} class="flex">
                            <div className={styles.usernameLabel}>Username:</div>
                            <div className={styles.username}>lienkt</div>
                        </div>
                        <div className={styles.ageRow} class="flex">
                            <div className={styles.ageLabel}>Age:</div>
                            <div className={styles.age}>27</div>
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
                                <button class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <span>Skills</span>
                                </button>
                            </div>
                            <div className={styles.historyLabel}>
                                <button class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <span>History</span>
                                    </button>
                                </div>
                            <div className={styles.hostedLabel}>
                                <button class="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                    <span>Hosted</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={[styles.content, ""].join(" ")}>
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
                <div className={[styles.content, ""].join(" ")}>
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
                <div className={[styles.content, ""].join(" ")}>
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
            
            </div>
        </div>
    )
}
export default Profile;