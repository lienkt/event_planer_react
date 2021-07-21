import React, {useState} from "react";
import {MoviePlayer} from "../../components/MoviePlayer";
import {Box, Button, Divider, Grid, TextField, Typography} from "@material-ui/core";
import {useStyles} from "./styles";
import moment from "moment";
import {Rating} from "@material-ui/lab";
import {setRatingForMovie, watchMovie} from "../../services/movies";

function UserRating({rating: {rating, comment, reviewerName, postDate}}) {
    return (
        <Grid container direction="column">
            <Grid item>
                <Rating value={rating}/>
            </Grid>

            <Grid item>
                <Typography variant="overline" color="textSecondary">
                    {reviewerName} • {postDate.fromNow()}
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="body1" color="textPrimary">
                    {comment}
                </Typography>
            </Grid>
        </Grid>
    )
}

const transformRatings = rating => ({
    ...rating,
    postDate: moment(rating.postDate)
});

export function MoviePage({movie}) {
    const {container, detailsContainer, blockText, commentBox} = useStyles();
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [isWatched, setIsWatched] = useState(false);
    const {_id, title, description, director, categories} = movie;
    const [ratings, setRatings] = useState(movie.ratings.map(transformRatings));
    const releaseDate = moment(movie.releaseDate);

    function onSubmitClick() {
        setRatingForMovie({
            movieId: _id,
            rating,
            comment
        }).then(newRating => {
            const newRatings = [
                newRating,
                ...ratings.filter(({reviewerUsername}) => reviewerUsername !== newRating.reviewerUsername),
            ].map(transformRatings);
            setRatings(newRatings);
        });
    }


    function onWatchClick() {
        setIsWatched(true);
        watchMovie(_id).then();
    }

    return (
        <div className={container}>
            <MoviePlayer isWatched={isWatched} setIsWatched={onWatchClick}/>
            <Grid container direction="column" spacing={8} className={detailsContainer}>
                <Grid item>
                    <Box mt={3}>
                        <Typography variant="h4" color="primary">
                            {title}
                        </Typography>
                    </Box>
                    <Typography variant="overline" color="textSecondary" gutterBottom>
                        {director} • {releaseDate.format("YYYY")} • {categories.join(", ")}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary" className={blockText}>
                        {description}
                    </Typography>
                </Grid>
                <Divider/>
                <Grid item container direction="column" spacing={2}>
                    <Grid item>
                        <Typography variant="h6" color="textPrimary">
                            Write a review
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Rating
                            value={rating}
                            onChange={(e, newValue) => setRating(newValue)}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            className={commentBox}
                            label="Write a comment"
                            variant="outlined"
                            multiline
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            rows={4}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={onSubmitClick}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>

                <Divider/>

                <Grid item container direction="column" spacing={4}>
                    <Grid item>
                        <Typography variant="h6" color="textPrimary">
                            Ratings
                        </Typography>
                    </Grid>

                    {Array.isArray(ratings) && ratings.map(rating => (
                        <Grid item key={rating._id}>
                            <UserRating rating={rating}/>
                        </Grid>
                    ))}

                    {Array.isArray(ratings) && ratings.length === 0 && (
                        <Grid item>
                            <Typography variant="h6" color="textSecondary">
                                No ratings found. Be the first to make one!
                            </Typography>
                        </Grid>
                    )}

                    <Grid item>
                        <Box pb={2}/>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}