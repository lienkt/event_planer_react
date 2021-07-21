import {dataFromResponse, makeMoviesAxios, makeUsersAxios} from "./axios";

export const signIn = (username, password) =>
    makeUsersAxios().post("/users/sign-in/", {username, password})
        .then(dataFromResponse);

export const fetchProfile = () =>
    makeMoviesAxios().get("/users/profile")
        .then(dataFromResponse);

