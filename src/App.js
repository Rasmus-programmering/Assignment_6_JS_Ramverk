import React, { useState } from 'react'; 
import AddMovieForm from './components/AddMovieForm.js'; 
import Movies from './components/Movies.js'; 
import SortButtons from './components/SortButtons.js'; 
import './index.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState('alphabetical');

  const addMovie = (title, rating) => {
      const newMovie = { title, rating: parseInt(rating, 10) };
      setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const deleteMovie = (index) => {
      setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };

  const sortMovies = () => {
      return [...movies].sort((a, b) => {
          if (sortOrder === 'alphabetical') {
              return a.title.localeCompare(b.title);
          }
          return b.rating - a.rating;
      });
  };

  const handleSortChange = (order) => {
      setSortOrder(order);
  };

  return (
      <div className="container mt-5">
          <h1>Filmlista</h1>
          <AddMovieForm onAddMovie={addMovie} />
          <SortButtons onSortChange={handleSortChange} />
          <Movies movies={sortMovies()} onDeleteMovie={deleteMovie} />
      </div>
  );
};

export default App;
