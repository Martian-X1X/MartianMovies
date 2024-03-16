import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowRightIcon } from '../assets/icons/arrow-right.svg';
import MovieComponent from '../Components/MovieComponent';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [showAllMovies, setShowAllMovies] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://www.omdbapi.com/?s=movie&type=movie&apikey=3fb7fe20'
        );
        const data = await response.json();
        if (data && data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto relative">
      <h2 className="text-3xl font-bold mb-4 text-center">Popular Movies</h2>
      <button 
        className="absolute top-0 right-0 font-bold bg-transparent border-none cursor-pointer flex items-center gap-2 ml-4"
        onClick={() => setShowAllMovies(!showAllMovies)}
      >
        <ArrowRightIcon />
        <span>See More</span>
      </button>
      <div className="flex flex-wrap justify-center mt-8">
        {movies.slice(0, showAllMovies ? movies.length : 8).map(movie => (
          <MovieComponent key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
