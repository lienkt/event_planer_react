import React, {useEffect, useState} from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {MovieSectionList} from "../../components/MovieSectionList";
import {FILTER, getMovies} from "../../services/movies";
import {useStyles} from "./styles";

export function HomePage({profile, setActiveMovie}) {
    const {container} = useStyles();
    const [lastSeenMovies, setLastSeenMovies] = useState(undefined);
    const [newMovies, setNewMovies] = useState(undefined);
    const [recommendations, setRecommendations] = useState(undefined);
    const [popular, setMostPopular] = useState(undefined);

    const renderMovieSection = (sectionHead, movies) => (
        <Grid item>
            {movies.length > 0 && (
                <MovieSectionList
                    sectionHead={(
                        <Box mb={1} pl={3}>
                            <Typography variant="h5" color="primary">
                                {sectionHead}
                            </Typography>
                        </Box>
                    )}
                    movies={movies}
                    setActiveMovie={setActiveMovie}
                />
            )}

            {movies.length === 0 && (
                <Box>
                    <Box mb={1} pl={3}>
                        <Typography variant="h5" color="primary" gutterBottom>
                            {sectionHead}
                        </Typography>

                        <Typography variant="subtitle1" color="textSecondary">
                            No movies found in this section
                        </Typography>
                    </Box>
                </Box>
            )}
        </Grid>
    );

    useEffect(() => {
        console.log("Fetching...");
        getMovies(FILTER.LAST_SEEN).then(movies => setLastSeenMovies(movies)).catch();
        getMovies(FILTER.NEW).then(movies => setNewMovies(movies)).catch();
        getMovies(FILTER.RECOMMENDATIONS).then(movies => setRecommendations(movies)).catch();
        getMovies(FILTER.MOST_POPULAR).then(movies => setMostPopular(movies)).catch();
    }, [profile]);

    return (
        <Grid container spacing={5} direction="column" className={container} wrap="nowrap" alignItems="stretch">
            {Array.isArray(lastSeenMovies) && renderMovieSection("Last seen movies", lastSeenMovies)}
            {Array.isArray(newMovies) && renderMovieSection("New movies", newMovies)}
            {Array.isArray(recommendations) && renderMovieSection("Recommended for you", recommendations)}
            {Array.isArray(popular) && renderMovieSection("Most popular movies", popular)}
        </Grid>
    )
}