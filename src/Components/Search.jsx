// Search.jsx
import React from "react";
import {search} from "../assets/icons";

const Search = ({ searchQuery, setSearchQuery, handleSearch, handleClearSearch }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <div className="search-container mx-auto px-4 py-8 relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <img src={search} alt="Search" className="absolute left-8 top-1/2 transform -translate-y-1/2 w-6 h-6" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search movies and series..."
          className="pl-10 w-full border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-r">
          Search
        </button>
        <button type="button" onClick={handleClearSearch} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-r">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
