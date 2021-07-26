import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/Events'
import { useHistory, Link } from 'react-router-dom'
import styles from './EventList.module.css'

const EventList = () => {
    const [events, setevents] = useState([])
    let history = useHistory();
    
    useEffect(() => {
        (async () => {
            let fetchedevents = await getEvents()
            // let fetchedevents = [
            //     {name: "Funeral", dateOfEvent: "2012-11-04T14:51:06.157Z", location: "Paris", hostId: "60f70e6e65fb545a60bd985e", completed: false},
            //     {name: "Funeral", dateOfEvent: "2012-11-04T14:51:06.157Z", location: "Paris", hostId: "60f70e6e65fb545a60bd985e", completed: false},
            //     {name: "Funeral", dateOfEvent: "2012-11-04T14:51:06.157Z", location: "Paris", hostId: "60f70e6e65fb545a60bd985e", completed: false},
            //     {name: "Funeral", dateOfEvent: "2012-11-04T14:51:06.157Z", location: "Paris", hostId: "60f70e6e65fb545a60bd985e", completed: false},
            //     {name: "Funeral", dateOfEvent: "2012-11-04T14:51:06.157Z", location: "Paris", hostId: "60f70e6e65fb545a60bd985e", completed: false}
            // ]
            
            setevents(fetchedevents)
        })()
        
    }, [])
    
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
        <>
        <div className={[styles.readMore, "flex justify-end"].join(" ")}>
            <Link to="/createEvent"
                class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    Create Event
            </Link>
        </div>
        <section className={[styles.eventsPage, "grid grid-cols-3 gap-4"].join(" ")}>
            
            {events !== undefined && events.map((event) => {
                return (
                    <div className={[styles.event, ""].join(" ")}>
                        <div className={styles.eventName}>{event.name}</div>
                         <div className={styles.eventPic}>
                            {event.picture && 
                                <img src={process.env.REACT_APP_API_URL + "/uploads/" + event.picture} alt="event_pic" />   
                            }
                            {event.picture === undefined && 
                                <img src="/picture.png" alt="event_pic" />    
                            }
                        </div>
                        <p><strong>Event Date:</strong> {DateTimeFormat(event.dateOfEvent)}</p>
                        <p><strong>Popularity</strong> <span className={metaColor(event.hostId)}>{event.meta_score}</span></p>
                        <p><strong>Location:</strong> {event.location}</p>

                        <div className={[styles.readMore, "flex justify-end"].join(" ")}>
                            <Link to={`/${event._id}/detail`} 
                                class="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                 Read more
                            </Link>
                        </div>
                    </div>
                )
            })}
        </section>
        </>
    )
}
export default EventList;