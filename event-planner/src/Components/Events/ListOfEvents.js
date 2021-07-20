import React, { Fragment, useState, useEffect } from 'react';
import '../../App';
import { Button} from 'reactstrap';
import { getMovies } from '../../Services/Events'
import { Link } from 'react-router-dom'



const ListOfEvents = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        (async () => {
            let fetchedMovies = await getMovies()
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
                <p>
                <p>
                <strong>Event Date:</strong> {movie.release_date}
                </p>
                <strong>Popularity</strong> <span className={metaColor}>{movie.meta_score}</span>
                </p>
                <p>
                <strong>Location:</strong> {movie.rating}
                </p>
                <p>
                <strong>Rating:</strong> {movie.rating}
                </p>
                <p>{movie.summary}</p>
                <div className = "yolo">
                <Button color="link"><Link to="/details"><p><strong>Let's Go</strong></p></Link></Button></div>
                
                </div>
                );
            })}
            </section>
            )}
            </Fragment>
    )}
export default ListOfEvents;