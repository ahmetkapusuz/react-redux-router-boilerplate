import * as types from "../actions/types";

const UserReducer = (state = {}, action) => {

    switch (action.type) {
        case types.FETCH_USERS_STARTED:
            return state;
        case types.FETCH_USERS_SUCCESS:
            return {...state, users: action.payload};
        case types.FETCH_USERS_FAIL:
            return {...state, users: action.payload};
        default:
            return state
    }

};

export default UserReducer;