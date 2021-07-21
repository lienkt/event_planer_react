import React, { Fragment, useState, useEffect } from 'react';
import '../../App';
import { Button} from 'reactstrap';
import { getMovieById } from '../../Services/eventDetails'
import { Link } from 'react-router-dom'

const EventsDetails = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        (async () => {
            let fetchedMovies = await getMovieById()
            setMovies(fetchedMovies)
        })()
        
    }, [])
    
    return (
        <Fragment>
        <section>
        {movies.map((movie) => {
            let metaColor = 'low';
            if (movie.id >= 5) {
                metaColor = 'high';
            } else if (movie.id <= 10 && movie.id >= 20) {
                metaColor = 'medium';
            } else {
                metaColor = 'low';
            }
            return (
                <div className="movie-container" key={String(movie.id)}>
                <h1>{movie.title}</h1>
                <img src="https://images.unsplash.com/photo-1581010864468-c972b8705439?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="pic id code"
                height="20px"
                width="20px"></img>
                <p><strong>Event Date:</strong> {movie.release_date}</p>
                <p><strong>Popularity</strong> <span className={metaColor}>{movie.meta_score}</span></p>
                <p><strong>Location:</strong> {movie.rating}</p>
                <p><strong>Rating:</strong> {movie.rating}</p>
                <div className = "yolo">
                <Button color="link"><Link to="/details"><p><strong>Let's Go</strong></p></Link></Button></div>
                </div>
                );
            })}
            </section>
            </Fragment>
            );
        };
        export default EventsDetails;