import { useEffect, useState } from 'react'
import { getUserById, editUser } from '../../services/Users'
import { editEvent } from '../../services/Events'
import styles from './SkillList.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import TextField from '@material-ui/core/TextField';

const Profile = () => {
    let { eventId } = useParams()
    const [eventMode, setEventMode] = useState(false)
    const [user, setUser] = useState([])
    const [event, setEvent] = useState([])
    const [skills, setSkill] = useState([])
    const [skillAdd, setSkillAdd] = useState([])
    const [cookies] = useCookies(['user'])
    let history = useHistory()

    useEffect(() => {
        (async () => {
            if (eventId !== undefined && eventId !== "profile") {
                setEventMode(true)
            }
            if (eventMode) {
                let fetchedData = await getUserById(eventId)
                setEvent(fetchedData)
                setSkill(fetchedData.skills)
            } else {
                let fetchedData = await getUserById(cookies.UserId)
                console.log(fetchedData)
                setUser(fetchedData)
                setSkill(fetchedData.skills ? fetchedData.skills : [])
            }
        })()
    }, [])
    
    const onChangeHandler = async (e) => {
        const {name, value} = e.target
        setSkillAdd(value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const skillsTmp = skills
        skillsTmp.push({'name': skillAdd, 'rating': null})
        
        if (eventMode) {
            const eventTmp = event
            eventTmp.skills = skillsTmp
            console.log(eventTmp)
            await editEvent(eventTmp)
            history.push("/profile/skills")
        } else {
            const userTmp = user
            userTmp.skills = skillsTmp
            await editUser(userTmp)
            history.push("/profile/skills")
        }
    }

    return (
        <div className={[styles.skillPage, "flex justify-center"].join(" ")}>
            <div className={styles.skillPageInside}>
                {eventMode && <div className={styles.fullname}>{event.name}</div>}
                {!eventMode && <div className={styles.fullname}>{user.fullName}</div>}
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div className={styles.form}>
                        <TextField 
                            label="New skill"
                            variant="outlined"
                            name="skillAdd"
                            value={skillAdd}
                            onChange={onChangeHandler} />
                        <div className={[styles.submit, "flex justify-end"].join(" ")}>
                            <input 
                                type='submit'
                                value='Add'
                                class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                            />
                        </div>
                        </div>
                    </form>
                </div>
                <div className={[styles.content, ""].join(" ")}>
                    {skills !== undefined && skills.map((skill) => {
                        return (
                        <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                            <div className={styles.skillName}>{skill.name}</div>
                            <div class="flex justify-end">
                                <div className={styles.ratingValue}>
                                    <Rating
                                        name="rating-skill-1"
                                        value={skill.rating}
                                        precision={0.5}
                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                        />
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Profile;