import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
const Homepage = () => {
    useEffect(() => {
        const getAPI = () => {
            // Change this endpoint to whatever local or online address you have
            // will change the api to mongodb after testing
            const API = 'http://127.0.0.1:5000/';
            fetch(API)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    setLoading(false);
                    setApiData(data);
                });
        };
        getAPI();
    }, []);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);
    return (
        <Fragment>
            <main>
                {loading === true ? (
                    <div>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <section>
                        {apiData.map((movie) => {
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
            </main>
        </Fragment>
    );
};
export default Homepage;