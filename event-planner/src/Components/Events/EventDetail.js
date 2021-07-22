import React, { useState, useEffect } from 'react';
import { getEventById} from '../../services/Events'
import { useHistory, useParams } from 'react-router-dom'
import styles from './EventDetail.module.css'

const EventDetail = () => {
    let { eventId } = useParams()
    const [event, setevents] = useState([])
    let history = useHistory();
    
    useEffect(() => {
        (async () => {
            let fetchedevent = await getEventById(eventId)
            setevents(fetchedevent)
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
                <p><strong>Event Date:</strong> {DateTimeFormat(event.dateOfEvent)}</p>
                <p><strong>Popularity</strong> <span className={metaColor(event.hostId)}>{event.meta_score}</span></p>
                <p><strong>Location:</strong> {event.location}</p>
                <div className={[styles.readMore, "flex justify-end"].join(" ")}>
                    <button 
                        onClick={onClickHisHandler}
                        class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                        <span>Users</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
export default EventDetail;