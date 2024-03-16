// App.jsx
import React, { useState } from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import { Hero, PopularMovies, PopularSeries, Footer } from "./sections";
import SearchResult from "./Components/SearchResult";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=3fb7fe20`
      );
      const data = await response.json();
      if (data && data.Search) {
        setSearchResults(data.Search);
        setShowSearchResults(true);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  return (
    <main className="relative">
      <Nav />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
      />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        {showSearchResults ? (
          <SearchResult searchResults={searchResults} />
        ) : (
          <PopularMovies />
        )}
      </section>
      <section className="padding">
        <PopularSeries />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
