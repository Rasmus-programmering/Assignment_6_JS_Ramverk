import React from 'react';

const Movie = ({ movie, onDelete }) => {
    if (!movie) {
        return <li>Filminformation saknas</li>;
    }
    if (!movie.title) {
        return <li>Titel saknas</li>;
    }
    if (movie.rating === undefined || movie.rating === null) {
        return <li>{movie.title} - Betyg saknas</li>;
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {movie.title} <span>{'★'.repeat(movie.rating)}</span>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>❌</button>
        </li>
    );
};

export default Movie;
