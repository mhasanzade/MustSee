import * as actionTypes from '../actions/action-types/actionTypes';

const initialState = {
    movies: [], 
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_LIST:

            const isInCart = state.movies.find(movie => movie.movie.imdbID === action.payload.movie.imdbID);


            return isInCart ? state : {
                ...state,
                movies: [...state.movies, action.payload]
            }

        case actionTypes.REMOVE_FROM_LIST:
            return {
                ...state,
                movies: [...state.movies.filter(movie => movie.movie !== action.payload)]
            };
        default:
            return state;
    }
}

export default listReducer;