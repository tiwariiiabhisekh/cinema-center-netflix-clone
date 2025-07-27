import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Search.css";
import search_icon from "../../assets/search_icon.svg";
import { Link } from "react-router-dom";
import { tmdbOptions, TMDB_ENDPOINTS, getImageUrl } from "../../api/tmdbConfig";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef();
  const inputRef = useRef();

  const searchMovies = useCallback(async () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Searching for:", searchQuery); // Debug log
      const response = await fetch(
        TMDB_ENDPOINTS.SEARCH_MOVIES(searchQuery),
        tmdbOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Search response:", data); // Debug log

      if (data.results) {
        setSearchResults(data.results.slice(0, 8));
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Search error:", error);
      setError(`Failed to search movies: ${error.message}`);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  // Debounced search effect
  useEffect(() => {
    if (searchQuery.length > 2) {
      setLoading(true);
      setError(null);
      const delaySearch = setTimeout(() => {
        searchMovies();
      }, 500);

      return () => clearTimeout(delaySearch);
    } else {
      setSearchResults([]);
      setLoading(false);
      setError(null);
    }
  }, [searchQuery, searchMovies]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchToggle = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
      setError(null);
    }
  };

  const handleResultClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    setError(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
      setError(null);
    }
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className={`search-bar ${isSearchOpen ? "active" : ""}`}>
        <img
          src={search_icon}
          alt="Search"
          className="search-icon"
          onClick={handleSearchToggle}
        />
        {isSearchOpen && (
          <input
            ref={inputRef}
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
        )}
        {isSearchOpen && searchQuery && (
          <span
            className="clear-search"
            onClick={() => {
              setSearchQuery("");
              setSearchResults([]);
              setError(null);
              inputRef.current?.focus();
            }}
          >
            ×
          </span>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isSearchOpen && searchQuery.length > 2 && (
        <div className="search-results">
          {loading ? (
            <div className="search-loading">
              <div className="loading-spinner"></div>
              <p>Searching...</p>
            </div>
          ) : error ? (
            <div className="search-error">
              <p>{error}</p>
              <button onClick={() => searchMovies()}>Retry</button>
            </div>
          ) : searchResults.length > 0 ? (
            <>
              <div className="results-header">
                <h4>Search Results for "{searchQuery}"</h4>
              </div>
              <div className="results-list">
                {searchResults.map((movie) => (
                  <Link
                    to={`/player/${movie.id}`}
                    key={movie.id}
                    className="search-result-item"
                    onClick={handleResultClick}
                  >
                    <div className="result-poster">
                      {movie.poster_path ? (
                        <img
                          src={getImageUrl(movie.poster_path, "w92")}
                          alt={movie.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="no-poster">
                          <span>🎬</span>
                        </div>
                      )}
                    </div>
                    <div className="result-info">
                      <h5>{movie.title}</h5>
                      <div className="result-meta">
                        <span className="year">
                          {movie.release_date?.split("-")[0] || "N/A"}
                        </span>
                        <span className="rating">
                          ⭐{" "}
                          {movie.vote_average
                            ? movie.vote_average.toFixed(1)
                            : "N/A"}
                        </span>
                      </div>
                      {movie.overview && (
                        <p className="overview">
                          {movie.overview.length > 80
                            ? movie.overview.substring(0, 80) + "..."
                            : movie.overview}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="results-footer">
                <p>Press ESC to close</p>
              </div>
            </>
          ) : (
            <div className="no-results">
              <p>No movies found for "{searchQuery}"</p>
              <span>Try a different search term</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
