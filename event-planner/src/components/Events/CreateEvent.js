import React, { useState, useEffect } from 'react';
import { getEvents, postEvent } from '../../services/Events'
import { getUserById, editUser } from '../../services/Users'
import { editEvent } from '../../services/Events'
import styles from './SkillList.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useParams, useHistory } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import TextField from '@material-ui/core/TextField';

const CreateEvent = () => {
    let { eventId } = useParams()
    const [eventMode, setEventMode] = useState(false)
    const [user, setUser] = useState([])
    const [event, setEvent] = useState([])
    const [skills, setSkill] = useState([])
    const [cookies] = useCookies(['user'])

    const [skillAdd, setSkillAdd] = useState([])


    const [name, setName] = useState('')
    const [dateOfEvent, setDateOfEvent] = useState('')
    const [location, setLocation] = useState('')
    const hostId = cookies.UserId
    const completed = false
    const [category, setCategory] = useState('')
    const [inviteType, setInviteType] = useState('')
    const [picture, setPictue] = useState(null)
    const [requirements, setRequirements] = useState('')
    const [materials, setMaterials] = useState('')

    const [nameAdd, setNameAdd] = useState(null)
    const [dateOfEventAdd, setDateOfEventAdd] = useState(null)
    const [locationAdd, setLocationAdd] = useState(null)
    const [categoryAdd, setCategoryAdd] = useState(null)
    const [inviteTypeAdd, setInviteTypeAdd] = useState(null)
    const [pictureAdd, setPictueAdd] = useState(null)
    const [requirementsAdd, setRequirementsAdd] = useState(null)
    const [materialsAdd, setMaterialsAdd] = useState(null)
    
    let history = useHistory()

    // useEffect(() => {
    //     (async () => {
    //         if (eventId !== undefined && eventId !== "profile") {
    //             setEventMode(true)
    //         }
    //         if (eventMode) {
    //             let fetchedData = await getUserById(eventId)
    //             setEvent(fetchedData)
    //             setSkill(fetchedData.skills)
    //         } else {
    //             let fetchedData = await getUserById(cookies.UserId)
    //             console.log(fetchedData)
    //             setUser(fetchedData)
    //             setSkill(fetchedData.skills ? fetchedData.skills : [])
    //         }
    //     })()
    // }, [])
    
    const onChangeHandler = async (e) => {
        const {name, value} = e.target
        setSkillAdd(value);
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeDate = (e) => {
        setDateOfEvent(e.target.value)
    }

    const onChangeLocation = (e) => {
        setLocation(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    const onChangeInviteType = (e) => {
        setInviteType(e.target.value)
    }

    const onChangePicture = (e) => {
        setPictue(e.target.value)
    }

    const onChangeRequirements = (e) => {
        //setRequirements(e.target)
    }

    const onChangeMaterials = (e) => {
        // const matList = e.target.split(" ")

        // let materialList = []
        // matList.array.forEach(element => {
        //     materialList.push({"item":element,"count": 10})    
        // });

        // setMaterials(materialList)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if(name != '' && dateOfEvent != '' && location != '' && category != ''&& inviteType != ''){
            //TODO: Fix the post Event to add the values to the database. (Empty Entry now)
            //postEvent(name, dateOfEvent, location, hostId, completed, category, inviteType, picture, requirements, materials)
            history.push("/")
        }
        else{
            alert("Please fill all fields marked with an (*)")
        }

    }

    return (
        <div className={[styles.skillPage, "flex justify-center"].join(" ")}>
            <div className={styles.skillPageInside}>
                <h1 class="text-7xl">CREATE NEW EVENT</h1>
                <h5 class="text-xl">All fields marked with * are mandatory</h5>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div className={styles.form}>
                        <h3>Event Name*</h3>
                        <TextField 
                            variant="outlined"
                            name="skillAdd"
                            value={nameAdd}
                            onChange={onChangeName} />
                        </div>
                        <div className={styles.form}>
                        <h3>Event Date*</h3>
                        <TextField 
                            type="date"
                            variant="outlined"
                            name="skillAdd"
                            value={dateOfEventAdd}
                            onChange={onChangeDate} />
                        </div>
                        <div className={styles.form}>
                        <h3>Event Location*</h3>
                        <TextField 
                            variant="outlined"
                            name="skillAdd"
                            value={locationAdd}
                            onChange={onChangeLocation} />
                        </div>
                        <div className={styles.form}>
                        <h3>Event Category*</h3>
                        <TextField 
                            variant="outlined"
                            name="skillAdd"
                            value={categoryAdd}
                            onChange={onChangeCategory} />
                        </div>
                        <div className={styles.form}>
                        <h3>Event Type*</h3>
                        <TextField 
                            placeholder="Private / Public"
                            variant="outlined"
                            name="skillAdd"
                            value={inviteTypeAdd}
                            onChange={onChangeInviteType} />
                        </div>
                        <div className={styles.form}>
                        <h3>Event Requirements</h3>
                        <TextField 
                            placeholder="Use space to separate them"
                            variant="outlined"
                            name="skillAdd"
                            value={requirementsAdd}
                            onChange={onChangeRequirements} />
                        </div>
                        <div className={styles.form}>
                        <h3>Event Materials</h3>
                        <TextField 
                            placeholder="Use space to separate them"
                            variant="outlined"
                            name="skillAdd"
                            value={materialsAdd}
                            onChange={onChangeMaterials} />
                        </div>
                        
                        <div className={styles.form}>
                        <h3>Event Picture</h3>
                        <TextField 
                            variant="outlined"
                            name="skillAdd"
                            type="File"
                            value={pictureAdd}
                            onChange={onChangePicture} />
                        <div className={[styles.submit, "flex justify-end"].join(" ")}>
                            <input 
                                type='submit'
                                value='Create'
                                class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                            />
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default CreateEvent;