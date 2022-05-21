import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToList } from '../../redux/actions/listActions';

const Card = ({movie}) => {

    const dispatch = useDispatch();
    const allMovies = useSelector(state => state.list);
    const movies = [...allMovies.movies];

    const handleAddMovie = (movie) => {
        dispatch(addToList(movie));
    }

    return (
        <div className='movie-card'>
            <div className='movie-card-image'>
                <img src={movie.Poster} alt='No poster' />
            </div>
            <div className="movie-text">
                <div className='movie-card-title'>
                    <h3>{movie.Title} ({movie.Year})</h3>
                </div>
                <button className='search-submit button' onClick={() => handleAddMovie({movie})}>Добавить в список</button>
            </div>
        </div>
    );
}

export default Card;