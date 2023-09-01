import React, { useState } from 'react';
import MoviePicker from './MoviePicker';
import MovieList from './MovieList';
import './App.css';

function App() {

  const [selectedMovies, setSelectedMovies] = useState([]);
  
  const addToSelectedMovies = (movie) => {
    setSelectedMovies([...selectedMovies, movie]);
  };

  const removeFromSelectedMovies = (movie) => {
    setSelectedMovies(selectedMovies.filter(item => item !== movie));
  };

  return (
    <div className="App">
      <h1>Lista de Compra de Películas</h1>
      <MoviePicker onAdd={addToSelectedMovies} selectedMovies={selectedMovies} />
      <MovieList movies={selectedMovies} onRemove={removeFromSelectedMovies} />
    </div>
  );
}

export default App;
