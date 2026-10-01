 "use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { movies, categories } from "../data/movies";
import MovieCard from "../components/MovieCard";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        movie.title.toLowerCase().includes(searchText) ||
        movie.genre.toLowerCase().includes(searchText);

      const matchesCategory =
        selectedCategory === "All" ||
        movie.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <main className="explore-page">
      <section className="explore-header">
        <div>
          <span className="section-label">DISCOVER</span>

          <h1>Explore Movies</h1>

          <p>
            Discover movies, explore new stories, and find your next watch.
          </p>
        </div>
      </section>

      <section className="explore-controls">
        <div className="movie-search">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search movies or genres..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button
              type="button"
              className="clear-search"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <button type="button" className="filter-button">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </section>

      <section className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="explore-results">
        <div className="results-header">
          <div>
            <h2>
              {selectedCategory === "All"
                ? "All Movies"
                : selectedCategory}
            </h2>

            <span>
              {filteredMovies.length}{" "}
              {filteredMovies.length === 1 ? "movie" : "movies"}
            </span>
          </div>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        ) : (
          <div className="empty-results">
            <Search size={42} />

            <h3>No movies found</h3>

            <p>Try another search or category.</p>
          </div>
        )}
      </section>
    </main>
  );
}