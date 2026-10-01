 "use client";

import Link from "next/link";
import {
  Play,
  ChevronRight,
  Star,
  Gift,
  TrendingUp,
} from "lucide-react";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";

export default function HomePage() {
  const featuredMovie = movies.find((movie) => movie.featured) || movies[0];

  const trendingMovies = movies.slice(0, 6);
  const recommendedMovies = movies.slice(6, 12);

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-eyebrow">FEATURED MOVIE</span>

          <h1>{featuredMovie.title}</h1>

          <div className="hero-meta">
            <span>{featuredMovie.year || "2026"}</span>
            <span>•</span>
            <span>{featuredMovie.duration || "2h 08m"}</span>
            <span>•</span>
            <span className="hero-rating">
              <Star size={15} fill="currentColor" />
              {featuredMovie.rating || "8.4"}
            </span>
          </div>

          <p>
            {featuredMovie.description ||
              "Discover a new cinematic experience and earn rewards from eligible movie activities."}
          </p>

          <div className="hero-actions">
            <Link
              href={`/movie/${featuredMovie.id}`}
              className="hero-primary-button"
            >
              <Play size={18} fill="currentColor" />
              Watch Now
            </Link>

            <Link
              href={`/movie/${featuredMovie.id}`}
              className="hero-secondary-button"
            >
              More Details
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        <div className="hero-overlay" />
      </section>

      {/* CONTINUE WATCHING */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">YOUR ACTIVITY</span>
            <h2>Continue Watching</h2>
          </div>

          <Link href="/explore" className="section-link">
            View All
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="continue-card">
          <div className="continue-placeholder">
            <Play size={28} fill="currentColor" />
          </div>

          <div className="continue-info">
            <span className="continue-label">CONTINUE</span>
            <h3>{movies[1]?.title || "Beyond The Silence"}</h3>
            <p>Continue from where you stopped.</p>

            <div className="watch-progress">
              <div className="watch-progress-bar" />
            </div>

            <span className="progress-text">42% watched</span>
          </div>

          <Link
            href={`/movie/${movies[1]?.id || movies[0].id}/watch`}
            className="continue-button"
          >
            Continue
            <Play size={16} fill="currentColor" />
          </Link>
        </div>
      </section>

      {/* TRENDING */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">POPULAR NOW</span>
            <h2>Trending Movies</h2>
          </div>

          <Link href="/explore" className="section-link">
            Explore
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="movie-grid home-movie-grid">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* EARN BANNER */}
      <section className="earn-banner">
        <div className="earn-banner-icon">
          <Gift size={28} />
        </div>
        <div className="earn-banner-content">
          <span className="section-eyebrow">WATCH & EARN</span>
          <h2>Turn eligible movie activity into rewards.</h2>
          <p>
            Complete qualifying activities and earn rewards according to your
            current tier and platform rules.
          </p>
        </div>

        <Link href="/rewards" className="earn-banner-button">
          View Rewards
          <ChevronRight size={17} />
        </Link>
      </section>

      {/* CATEGORIES */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">DISCOVER</span>
            <h2>Popular Categories</h2>
          </div>
        </div>

        <div className="category-grid">
          {[
            "Action",
            "Adventure",
            "Drama",
            "Science Fiction",
            "Thriller",
            "Mystery",
            "Romance",
            "Comedy",
          ].map((category) => (
            <Link
              key={category}
              href={`/explore?category=${encodeURIComponent(category)}`}
              className="category-card"
            >
              <span>{category}</span>
              <ChevronRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      {/* RECOMMENDED */}
      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">FOR YOU</span>
            <h2>Recommended Movies</h2>
          </div>

          <Link href="/explore" className="section-link">
            See More
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="movie-grid home-movie-grid">
          {recommendedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="home-stats">
        <div className="home-stat">
          <TrendingUp size={22} />
          <div>
            <strong>25 ETB</strong>
            <span>Base activity reward</span>
          </div>
        </div>

        <div className="home-stat">
          <Gift size={22} />
          <div>
            <strong>500 ETB</strong>
            <span>Daily activity cap</span>
          </div>
        </div>

        <div className="home-stat">
          <Star size={22} />
          <div>
            <strong>100 ETB</strong>
            <span>Qualified referral reward</span>
          </div>
        </div>
      </section>
    </main>
  );
}