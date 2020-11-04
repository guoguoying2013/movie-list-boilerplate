import React from 'react';

const MoviesList = (props) => (
  <ul className='movies'>
      {props.movies.map((movie, idx) => (
          <li key={movie.title + idx}>
              <span>{movie.title}</span>
          </li>
      ))}
  </ul>
)

export default MoviesList;