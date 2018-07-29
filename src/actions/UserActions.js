import * as types from "./types";
import axios from 'axios';

export const fetchUsers = () => {

    return (dispatch, getState) => {
        dispatch({type: types.FETCH_USERS_STARTED});

        return axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(response => {
            dispatch({
                type: types.FETCH_USERS_SUCCESS,
                payload: response.data
            })
        }).catch(error => {
            dispatch({
                type: types.FETCH_USERS_FAIL,
                payload: error
            })
        })

    };

};