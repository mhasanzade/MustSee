import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../card/MovieCard';
import './SearchDiv.css';

const SearchDiv = () => {

    const [input, setInput] = useState('');
    const [movieData, setMovieData] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(movieData === undefined ? 'no data' : 'data available');
    }

    const changeHandler = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://www.omdbapi.com/?apikey=6816cac0&s=' + input);
            const data = await response.json();
            setMovieData(data.Search);
        }
        getData();
    });

    const moviesObject = useSelector(state => state.list);
    const movieArray = [...moviesObject.movies];

    return (
        <div className='search-section'>
            <div className='search-group'>
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} type='text' placeholder='Искать фильм по названию..' className='search-bar' />
                </form>

                <div className='movie-list'>
                    {movieData === undefined ? <p></p> : movieData.map((movie) => {
                        return (
                            <div key={movie.imdbID}>
                                <MovieCard
                                    movie={movie}
                                />
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchDiv;