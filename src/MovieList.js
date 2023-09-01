// MovieList.js
import React, { useState } from 'react';
import './MovieList.css';

function MovieList({ movies, onRemove }) {
  const [quantities, setQuantities] = useState({}); // Estado para almacenar las cantidades

  const handleQuantityChange = (movie, quantity) => {
    setQuantities({ ...quantities, [movie.nombre]: quantity });
  };

  const getTotalPrice = () => {
    return movies.reduce((total, movie) => {
      const quantity = quantities[movie.nombre] || 0;
      return total + movie.precio * quantity;
    }, 0);
  };

  return (
    <div>
      <h2>Lista de Películas</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.nombre} - {movie.precio} $
            <button onClick={() => onRemove(movie)}>Eliminar</button>
            <input
              type="number"
              min="0"
              value={quantities[movie.nombre] || ''}
              onChange={(e) => handleQuantityChange(movie, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
      <h3>Total: {getTotalPrice()} $</h3>
    </div>
  );
}

export default MovieList;

