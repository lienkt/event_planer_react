import Axios from 'axios';

export const LOCALSTORAGE_TOKEN_KEY = "token";
export const MOVIES_DB_API_URL = "http://localhost:8000";
export const USERS_DB_API_URL = "http://localhost:8080";
export const dataFromResponse = response => response.data;

export const makeMoviesAxios = () => Axios.create({
    baseURL: MOVIES_DB_API_URL,
    headers: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? {
        Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)}`
    } : {}
});

export const makeUsersAxios = () => Axios.create({
    baseURL: USERS_DB_API_URL,
    headers: localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) ? {
        Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)}`
    } : {}
});