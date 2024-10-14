import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(1); // Sätter standardvärde för betyg

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && rating) {
            onAddMovie(title, rating);
            setTitle('');
            setRating(1); // Återställer till standardvärdet
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Film titel"
                required
            />
            <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                required
            />
            <button type="submit">Lägg till film</button>
        </form>
    );
};

export default AddMovieForm;
