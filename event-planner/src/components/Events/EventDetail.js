import React, { useState, useEffect } from 'react';
import { getEventById} from '../../services/Events'
import { useHistory, useParams, Link } from 'react-router-dom'
import styles from './EventDetail.module.css'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getUserById } from '../../services/Users'

const EventDetail = () => {
    let { eventId } = useParams()
    const [event, setevents] = useState([])
    let history = useHistory();
    const [host, setHost] = useState({})
    const [materials, setmaterials] = useState([])
    
    useEffect(() => {
        (async () => {
            let fetchedevent = await getEventById(eventId)
            setevents(fetchedevent)
            setHost(await getUserById(fetchedevent.hostId))
        })()
        
    }, [])

    const onClickHisHandler = (e) => {
    }
    
    const DateTimeFormat = (timestamp) => {
        var date = new Date(timestamp);
        return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
    }
    
    const metaColor = (hostId) => {
        let metaColor = 'low';
        if (hostId >= 5) {
            metaColor = 'high';
        } else if (hostId <= 10 && hostId >= 20) {
            metaColor = 'medium';
        } else {
            metaColor = 'low';
        }
        return metaColor
    }

    return (
        <section className={styles.eventDetailPage}>
            <div className={styles.detailPageInside}>
                <div className={[styles.header, "flex justify-start"].join(" ")}>
                    <div className={[styles.leftPart, "flex justify-center items-center relative h-32 w-50 sm:mb-0 mb-3"].join(" ")}>
                        <div className={styles.eventPic}>
                            {event.picture && 
                                <img src={process.env.REACT_APP_API_URL + "/uploads/" + event.picture} alt="event_pic" />   
                            }
                            {event.picture === undefined && 
                                <img src="/picture.png" alt="event_pic" />    
                            }
                        </div>
                    </div>
                    <div className={styles.righttPart} class="flex-auto sm:ml-5 justify-evenly">
                        <div className={styles.eventName}>{event.name}</div>
                        <p><strong>Host Name:</strong> {host.fullName}</p>
                        <p><strong>Event Date:</strong> {DateTimeFormat(event.dateOfEvent)}</p>
                        <p><strong>Popularity</strong> <span className={metaColor(event.hostId)}>{event.meta_score}</span></p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Total Number of Guests:</strong> {event.guests !== undefined && event.guests.length}</p>
                        <select>
                            <option value= "0"> -- Select the food --</option>
                            {event.materials && event.materials.map((event)=>(
                                <option key={event} value={event}></option>
                            ))}
                        </select>
                        <ul>
                            {materials.map(items => (
                                <li key={materials.id}>
                                {materials.item} {materials.count}
                                </li>
                            ))}
                        </ul>
                        <div className={[styles.requirements, "flex justify-start"].join(" ")}>
                            <button 
                                onClick={onClickHisHandler}
                                class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <span>Requirements</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={[styles.content, ""].join(" ")}>
                    <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.skillName}>DJ</div>
                        <div class="flex justify-end">
                            <div className={[ ""].join(" ")}>
                                <Link to={`/60f9c8fc7fb23a19e0d01ca8/profile`}
                                    class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                        Candidate: Tom
                                </Link>&nbsp;&nbsp;
                            </div>
                            <div className={styles.ratingValue}>
                                <Rating
                                    name="rating-skill-1"
                                    value={parseFloat(3.5)}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                            </div>
                        </div>
                    </div> <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
                        <div className={styles.skillName}>Waiter</div>
                        <div class="flex justify-end">
                            <div className={[ ""].join(" ")}>
                                <Link to={`/60f9817533426340ac4a6164/profile`}
                                    class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                        Candidate: Max
                                </Link>&nbsp;&nbsp;
                            </div>
                            <div className={styles.ratingValue}>
                                <Rating
                                    name="rating-skill-1"
                                    value={parseFloat(5)}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                    />
                            </div>
                        </div>
                    </div>
                    {event.requirements !== undefined && event.requirements.map((skill) => {
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
                        <Link to={`/${event._id}/requirements`}
                            class="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                Add requirements
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default EventDetail;