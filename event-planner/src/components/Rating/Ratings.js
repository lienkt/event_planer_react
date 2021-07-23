import { useEffect, useState } from 'react'
import { getUserById, editUser } from '../../services/Users'
import { editEvent } from '../../services/Events'
import styles from './Ratings.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const Ratings = () => {
    let { userId } = useParams()
    const [user, setUser] = useState([])
    const [skills, setSkill] = useState([])
    const [skillIndex, setSkillIndex] = useState(null)
    const [rating, setRating] = useState(null)
    const [cookies] = useCookies(['user'])
    let history = useHistory()

    useEffect(() => {
        (async () => {
            
            if (userId !== undefined && userId !== null){
                let fetchedData = await getUserById(userId)
                console.log(fetchedData)
                setUser(fetchedData)
                setSkill(fetchedData.skills ? fetchedData.skills : [])
            } else {
                let fetchedData = await getUserById(cookies.UserId)
                console.log(fetchedData)
                setUser(fetchedData)
                setSkill(fetchedData.skills ? fetchedData.skills : [])
            }
        })()
    }, [])
    
    const onChangeNameHandler = async (e) => {
        const {name, value} = e.target
        setSkillIndex(value);
    }
    
    const onChangeRatingHandler = async (e) => {
        const {name, value} = e.target
        setRating(value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const skillsTmp = skills
        skillsTmp[skillIndex].ratingAmount = skillsTmp[skillIndex].ratingAmount + 1
        let oldRating = (skillsTmp[skillIndex].ratingAmount - 1) * skillsTmp[skillIndex].rating
        let sumRating = parseInt(rating) + oldRating
        skillsTmp[skillIndex].rating = sumRating / skillsTmp[skillIndex].ratingAmount
        let ratingAmount = 0
        let ratingTotal = 0
        skills.map((s) => {
            if (s.ratingAmount) {
                ratingAmount += s.ratingAmount
                ratingTotal += s.ratingAmount * s.rating
            }
        })
        const userTmp = user
        userTmp.skills = skillsTmp
        userTmp.rating = parseFloat(ratingTotal/ratingAmount)
        await editUser(userTmp)
        history.push(`/${userId}/profile/rating`)
    }

    return (
        <div className={[styles.skillPage, "flex justify-center"].join(" ")}>
            <div className={styles.skillPageInside}>
                
                <div class="flex justify-start">
                    <div className={styles.fullname}>{user.fullName}</div>&nbsp;&nbsp;
                    <div className={styles.rating}>
                        <Rating
                            name="rating"
                            value={parseFloat(user.rating)}
                            precision={0.5}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            />
                    </div>
                </div>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div className={styles.form}>
                            <div>
                                <FormControl required  variant="outlined" className={styles.formControl}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Skill</InputLabel>
                                    <Select
                                        native
                                        value={skillIndex}
                                        onChange={onChangeNameHandler}
                                        label="Age"
                                        inputProps={{
                                            name: 'age',
                                            id: 'outlined-age-native-simple',
                                        }}
                                        >
                                        <option aria-label="None" value="" />
                                        {skills !== undefined && skills.map((skill, index) => {
                                            return (
                                                <option value={index}>{skill.name}</option>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <TextField 
                                    required
                                    type="number"
                                    min="1"
                                    max="5"
                                    label="Rating"
                                    variant="outlined"
                                    name="skillAdd"
                                    value={rating}
                                    onChange={onChangeRatingHandler} />
                            </div>
                            <div className={[styles.submit, "flex justify-end"].join(" ")}>
                                <input 
                                    type='submit'
                                    value='Rate'
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
export default Ratings;