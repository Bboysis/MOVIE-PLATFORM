 "use client";

import Link from "next/link";
 import {
  ArrowLeft,
  Play,
  Star,
  Gift,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import { use, useState } from "react";

import { movies } from "../../../data/movies";
import MovieMedia from "../../../components/MovieMedia";
export default function MovieDetailsPage({ params }) {
  const { id } = use(params);

  const movie = movies.find(
    (item) => String(item.id).trim() === String(id).trim()
  );

  const [isFavorite, setIsFavorite] = useState(false);

  if (!movie) {
    return (
      <main className="movie-detail-page">
        <div className="movie-not-found">
          <span className="section-eyebrow">MOVIE</span>

          <h1>Movie Not Found</h1>

          <p>
            We could not find the movie you are looking for.
          </p>

          <p className="movie-debug-id">
            Movie ID: {String(id)}
          </p>

          <Link href="/explore" className="primary-wallet-button">
            Back to Movies
          </Link>
        </div>
      </main>
    );
  }

  const reward =
    typeof movie.reward === "object"
      ? movie.reward.base
      : movie.reward || 25;

  return (
    <main className="movie-detail-page">
      <section className="movie-detail-hero">
  <div className="movie-detail-hero-media">
    <MovieMedia
      movie={movie}
      type="backdrop"
    />
  </div>

  <div className="movie-detail-overlay" />

  <div className="movie-detail-hero-content">
      </div>
        <div className="movie-detail-overlay" />

        <div className="movie-detail-hero-content">
          <Link
            href="/explore"
            className="movie-detail-back"
          >
            <ArrowLeft size={18} />
            Back to Movies
          </Link>

          <div className="movie-detail-info">
            <span className="section-eyebrow">
              {movie.category || "MOVIE"}
            </span>

            <h1>{movie.title}</h1>

            <div className="movie-detail-meta">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
              <span>•</span>
              <span>{movie.ageRating}</span>

              <span className="detail-rating">
                <Star size={14} fill="currentColor" />
                {movie.rating}
              </span>
            </div>

            <p className="movie-detail-description">
              {movie.description}
            </p>

            <div className="movie-detail-actions">
              <Link
                href={`/movie/${movie.id}/watch`}
                className="movie-watch-button"
              >
                <Play size={18} fill="currentColor" />
                Watch Now
              </Link>

              <button
                type="button"
                className={`movie-favorite-button ${
                  isFavorite ? "active" : ""
                }`}
                onClick={() =>
                  setIsFavorite(!isFavorite)
                }
              >
                {isFavorite ? "Saved" : "Add to List"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="movie-detail-content">
        <div className="movie-detail-main">
          <div className="movie-reward-card">
            <div className="movie-reward-icon">
              <Gift size={22} />
            </div>

            <div className="movie-reward-info">
              <span>WATCH & EARN</span>
              <h2>Eligible Activity</h2>
              <p>
                Complete the required movie activity to
                become eligible for the platform reward.
              </p>
            </div>

            <strong>
              +{reward} ETB
            </strong>
          </div>

          <section className="movie-about-section">
            <span className="section-eyebrow">
              ABOUT
            </span>

            <h2>About this movie</h2>

            <p>{movie.description}</p>
          </section>
          <section className="movie-information-section">
            <span className="section-eyebrow">
              DETAILS
            </span>

            <h2>Movie Information</h2>

            <div className="movie-information-grid">
              <div>
                <span>Genre</span>
                <strong>
                  {movie.genres?.join(", ") ||
                    movie.category}
                </strong>
              </div>

              <div>
                <span>Language</span>
                <strong>
                  {movie.language || "English"}
                </strong>
              </div>

              <div>
                <span>Subtitles</span>
                <strong>
                  {movie.subtitles?.join(", ") ||
                    "English"}
                </strong>
              </div>

              <div>
                <span>Release Year</span>
                <strong>{movie.year}</strong>
              </div>

              <div>
                <span>Duration</span>
                <strong>{movie.duration}</strong>
              </div>

              <div>
                <span>Age Rating</span>
                <strong>{movie.ageRating}</strong>
              </div>
            </div>
          </section>
        </div>

        <aside className="movie-detail-sidebar">
          <div className="movie-sidebar-card">
            <span className="section-eyebrow">
              REWARD
            </span>

            <div className="sidebar-reward-amount">
              +{reward} ETB
            </div>

            <p>
              Base reward for eligible movie activity.
              Your final reward can depend on your
              current reward tier and eligibility rules.
            </p>

            <Link
              href="/rewards"
              className="sidebar-reward-link"
            >
              View Reward Rules
            </Link>
          </div>

          <div className="movie-sidebar-card">
            <span className="section-eyebrow">
              ACTIVITY
            </span>

            <div className="sidebar-rule">
              <Clock3 size={17} />
              <span>
                Complete the required viewing activity
              </span>
            </div>

            <div className="sidebar-rule">
              <CheckCircle2 size={17} />
              <span>
                Submit your rating when eligible
              </span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}