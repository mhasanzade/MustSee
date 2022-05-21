import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromList } from '../../redux/actions/listActions';
import './MovieList.css';

const MovieList = () => {
    const addedMovies = useSelector(state => state.list);
    const addedMoviesArray = [...addedMovies.movies];
    const dispatch = useDispatch();
    const handleRemove = (movie) => {
        dispatch(removeFromList(movie));
    }

    return (
        <div className='movie-container'>
            <h1>Мой список ({addedMoviesArray.length})</h1>

            <div className='movie-list movies'>

                {addedMoviesArray.length === 0 ? <h2>Список фильмов пуст</h2> : addedMoviesArray.map(movie => {
                    return (
                        <div className='movie-item' key={movie.movie.imdbID}>
                            <div className="movie-item-image">
                                <img src={movie.movie.Poster} alt="Movie Item" />
                            </div>
                            <div className="movie-item-info">
                                <div className="first-block">
                                    <h2>Имя: {movie.movie.Title}</h2>
                                </div>

                                <div className='bottom-group'>
                                    <button className='remove' onClick={() => handleRemove(movie.movie)}>Удалять</button>
                                    <a className='link' rel='noreferrer' target='_blank' href={`https://www.imdb.com/title/${movie.movie.imdbID}/`}>Oткрыть</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default MovieList;