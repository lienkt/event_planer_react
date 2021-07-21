import React, { Fragment, useState, useEffect } from 'react';
import '../../App';
import { Button} from 'reactstrap';
import { getMovies } from '../../services/Events'
import { useHistory } from 'react-router-dom'

const ListOfEvents = () => {
    const [movies, setMovies] = useState([])
    let history = useHistory();
    
    
    useEffect(() => {
        (async () => {
            let fetchedMovies = await getMovies()
            setMovies(fetchedMovies)
        })()
        
    }, [])

    const handleClick = (e) => {
        history.push("/Pages/details");
    }
    
    return (
        <Fragment>
        <section>
        {movies.map((events) => {
            let metaColor = 'low';
            if (events.hostId >= 5) {
                metaColor = 'high';
            } else if (events.hostId <= 10 && events.hostId >= 20) {
                metaColor = 'medium';
            } else {
                metaColor = 'low';
            }
            return (
                <div className="movie-container" key={String(events.hostId)}>
                <h1>{events.name}</h1>
                {events.picture && 
                    <img src={events.picture}/>
                }
                {events.picture === undefined && 
                    <img src="https://images.unsplash.com/photo-1581010864468-c972b8705439?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
                }
                
                <p><strong>Event Date:</strong> {events.dateOfEvent}</p>
                <p><strong>Popularity</strong> <span className={metaColor}>{events.meta_score}</span></p>
                <p><strong>Location:</strong> {events.location}</p>
                <p><strong>Rating:</strong> {events.category}</p>
                <div className = "yolo">
                <Button onClick={handleClick}><p><strong>Let's Go</strong></p></Button></div>
                </div>
                );
                console.log(events.picture)
            })}
            </section>
            </Fragment>
            );
        };
        export default ListOfEvents;