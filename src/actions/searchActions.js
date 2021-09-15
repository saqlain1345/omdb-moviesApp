import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";
import axios from 'axios';
import { APIKey } from '../APIKey';


export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text} `)
        .then(response =>
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data
            }))
        .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id} `)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            }))
        .catch(err => console.log(err));
}

// /?apikey=${process.env.REACT_APP_API_KEY}&s=${text}

// http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&s=${text}

export const setLoading = () => {
    return {
        type: LOADING
    }

}
