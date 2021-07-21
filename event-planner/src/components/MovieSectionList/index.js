import React from "react";
import {Box, Grid} from "@material-ui/core";
import {MoviePosterButton} from "../MoviePosterButton";
import {useStyles} from "./styles";

export function MovieSectionList({sectionHead, movies, setActiveMovie}) {
    const { moviesGridContainer } = useStyles();

    return (
        <Grid container direction="column">
            <Grid item>
                {sectionHead}
            </Grid>
            <Grid item className={moviesGridContainer}>
                <Grid container direction="row" justify="flex-start" alignItems="center" wrap="nowrap">
                    {movies.map(movie => (
                        <Grid item key={movie._id}>
                            <Box mr={2}>
                                <MoviePosterButton movie={movie} onClick={() => setActiveMovie(movie)}/>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}