 import Link from "next/link";
import { Star, Gift } from "lucide-react";

import MovieMedia from "./MovieMedia";

export default function MovieCard({ movie }) {
  const reward =
    typeof movie.reward === "object"
      ? movie.reward.base
      : movie.reward || 25;

  return (
    <article className="movie-card">
      <Link
        href={`/movie/${movie.id}`}
        className="movie-card-link"
      >
        <div className="movie-card-poster">
          <MovieMedia
            movie={movie}
            type="poster"
          />

          {movie.reward?.eligible !== false && (
            <span className="movie-reward-badge">
              <Gift size={12} />
              +{reward} ETB
            </span>
          )}

          <span className="movie-card-rating">
            <Star
              size={12}
              fill="currentColor"
            />
            {movie.rating}
          </span>
        </div>

        <div className="movie-card-info">
          <h3>{movie.title}</h3>

          <div className="movie-card-meta">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
          </div>

          <div className="movie-card-category">
            {movie.category}
          </div>
        </div>
      </Link>
    </article>
  );
}