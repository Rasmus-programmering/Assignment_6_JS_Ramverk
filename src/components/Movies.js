import React from 'react';
import Movie from './Movie.js';

const Movies = ({ movies, onDeleteMovie }) => {
    return (
        <ul className="list-group mt-3">
            {movies.length === 0 ? (
                <li className="list-group-item">Inga filmer att visa</li>
            ) : (
                movies.map((movie, index) => (
                    <Movie key={index} movie={movie} onDelete={() => onDeleteMovie(index)} />
                ))
            )}
        </ul>
    );
};

export default Movies;
