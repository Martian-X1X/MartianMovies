import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowRightIcon } from '../assets/icons/arrow-right.svg';
import SeriesComponent from '../Components/SeriesComponent';

const PopularMovies = () => {
  const [series, setSeries] = useState([]);
  const [showAllSeries, setShowAllSeries] = useState(false);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(
          'https://www.omdbapi.com/?s=series&type=series&apikey=3fb7fe20'
        );
        const data = await response.json();
        if (data && data.Search) {
          setSeries(data.Search);
        }
      } catch (error) {
        console.error('Error fetching Series:', error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <div className="container mx-auto relative">
      <h2 className="text-3xl font-bold mb-4 text-center">Popular Series</h2>
      <button 
        className="absolute top-0 right-0 font-bold bg-transparent border-none cursor-pointer flex items-center gap-2 ml-4"
        onClick={() => setShowAllSeries(!showAllSeries)}
      >
        <ArrowRightIcon />
        <span>See More</span>
      </button>
      <div className="flex flex-wrap justify-center mt-8">
        {series.slice(0, showAllSeries ? series.length : 8).map(series => (
          <SeriesComponent key={series.imdbID} series={series} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
