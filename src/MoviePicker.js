import './MoviePicker.css';
import React from 'react';

function MoviePicker({ onAdd, selectedMovies }) {
  const movieList = [
    { nombre: 'Super Mario Bros. La película', precio: 19.98 },
    { nombre: 'Liga de la Justicia: Snyder Cut', precio: 30.00},
    { nombre: 'Batman: The Dark Knight Returns', precio: 26.00},
    { nombre: 'Watchmen', precio: 21.00},
    { nombre: 'Oppenheimer', precio: 30.00},
    { nombre: 'BlueBettle', precio: 30.00},
    { nombre: 'The Evil Dead Rise', precio: 23.00},
    { nombre: 'Shazam! Fury of Gods', precio: 10.00},
    { nombre: 'Batman v Superman: Dawn of justice', precio: 35.00},
    { nombre: 'Star Wars Episode 4: New Hope', precio: 30.00},
    // ...otros elementos
  ];

  const handleAddMovie = (movie) => {
    onAdd(movie);
  };

  return (
    <div>
      <h2>Seleccionar Película</h2>
      <select onChange={(e) => handleAddMovie(movieList[e.target.value])}>
        <option value="">Seleccionar película</option>
        {movieList.map((movie, index) => (
          <option key={index} value={index}>
            {movie.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MoviePicker;
