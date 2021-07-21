import {dataFromResponse, makeMoviesAxios} from "./axios";

export const FILTER = {
    ALL: {
        path: ""
    },
    NEW: {
        path: "new"
    },
    LAST_SEEN: {
        path: "last-seen"
    },
    RECOMMENDATIONS: {
        path: "recommendations"
    },
    MOST_POPULAR: {
        path: "most-popular"
    }
};

export const getMovies = filter => makeMoviesAxios()
    .get(`/movies/${filter.path}`)
    .then(dataFromResponse);

export const setRatingForMovie = ({movieId, rating, comment}) => makeMoviesAxios()
    .post(`/movies/${movieId}/ratings`, {rating, comment})
    .then(dataFromResponse);

export const watchMovie = movieId => makeMoviesAxios()
    .post(`/movies/${movieId}/watch`)
    .then(dataFromResponse)