import React, { useState, useEffect } from 'react';
import { getEventById} from '../../services/Events'
import { useParams } from 'react-router-dom'
import styles from './EventDetail.module.css'
import {getUser} from '../../services/Users'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const EventDetail = () => {
let { eventId } = useParams()
const [event, setevents] = useState([])
const [materials, setmaterials] = useState([])
const [host, setHost] = useState({})
const [setShowHosted, setShowHis, setShowSkills] = useState(false)

useEffect(() => {
(async () => {
    let fetchedevent = await getEventById(eventId)
    setHost(await getUser(fetchedevent.hostId))
    setevents(fetchedevent)
})()

}, [])   



const DateTimeFormat = (timestamp) => {
var date = new Date(timestamp);
return date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()
}

return (
<section className={styles.eventDetailPage}>
<div className={[styles.event, ""].join(" ")}>
<div className={styles.eventName}>{event.name}</div>
<div className={styles.eventPic}>
{event.picture && 
    <img src={event.picture} alt="event_pic" />   
}
{event.picture === undefined && 
    <img src="/picture.png" alt="event_pic" />    
}
</div>
<p><strong>Host Name:</strong> {host.fullName}</p>
<p><strong>Event Date:</strong> {DateTimeFormat(event.dateOfEvent)}</p>
<p><strong>Location:</strong> {event.location}</p>
<p><strong>Total Number of Guests:</strong> {event.guests !== undefined && event.guests.length}</p>
<p><strong>What can you bring:</strong></p>

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

<div className={[styles.eventDetailPage, "flex justify-start"].join(" ")}>
<div className={styles.event}>
<button
class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
<span>Skills</span>
</button>
</div>
</div>            
{event.requirements && event.requirements.map((skill) => {
    <div className={[styles.contentItem, "flex justify-between"].join(" ")}></div>
    return(
        <div className={[styles.contentItem, "flex justify-between"].join(" ")}>
        <div className={styles.skillName}>{skill} </div>
        <div className={styles.skillName}> Adnan </div>
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
        )
    })}
    </div>
    
    
    
    </section>
    )
}
export default EventDetail;