 "use client";

import Link from "next/link";
import { use, useState } from "react";

import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  Maximize,
  Star,
  Gift,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import { movies } from "../../data/movies";

export default function WatchMoviePage({ params }) {
  const { id } = use(params);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rated, setRated] = useState(false);

  const movie = movies.find(
    (item) => String(item.id).trim() === String(id).trim()
  );

  if (!movie) {
    return (
      <main className="watch-page">
        <div className="watch-not-found">
          <span className="section-eyebrow">
            WATCH
          </span>

          <h1>Movie Not Found</h1>

          <p>
            We could not find the movie you are trying
            to watch.
          </p>

          <p className="movie-debug-id">
            Movie ID: {String(id)}
          </p>

          <Link
            href="/explore"
            className="primary-wallet-button"
          >
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

  function togglePlaying() {
    setPlaying((current) => !current);
  }

  function handleProgressChange(event) {
    setProgress(Number(event.target.value));
  }

  function handleRate() {
    if (progress >= 100) {
      setRated(true);
    }
  }

  return (
    <main className="watch-page">
      <div className="watch-topbar">
        <Link
          href={`/movie/${movie.id}`}
          className="watch-back"
        >
          <ArrowLeft size={18} />
          <span>Back to movie</span>
        </Link>
      </div>

      <section className="video-player">
        <div className="video-placeholder">
          <div className="video-placeholder-content">
            <button
              type="button"
              className="main-play-button"
              onClick={togglePlaying}
              aria-label={
                playing ? "Pause video" : "Play video"
              }
            >
              {playing ? (
                <Pause
                  size={28}
                  fill="currentColor"
                />
              ) : (
                <Play
                  size={28}
                  fill="currentColor"
                />
              )}
            </button>

            <span>VIDEO PLAYER</span>

            <strong>{movie.title}</strong>

            <small>
              Demo player • Cloudinary will be connected
              later
            </small>
          </div>
        </div>

        <div className="video-controls">
          <button
            type="button"
            className="video-control"
            onClick={togglePlaying}
            aria-label={
              playing ? "Pause video" : "Play video"
            }
          >
            {playing ? (
              <Pause
                size={17}
                fill="currentColor"
              />
            ) : (
              <Play
                size={17}
                fill="currentColor"
              />
            )}
          </button>

          <div className="video-progress">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressChange}
              aria-label="Video progress"
            />
          </div>

          <span className="video-time">
            {progress}%
          </span>

          <button
            type="button"
            className="video-control"
            aria-label="Volume"
          >
            <Volume2 size={17} />
          </button>

          <button
            type="button"
            className="video-control"
            aria-label="Fullscreen"
          >
            <Maximize size={17} />
          </button>
        </div>
      </section>
      <section className="watch-content">
        <div className="watch-main">
          <div className="watch-heading">
            <span className="section-eyebrow">
              NOW WATCHING
            </span>

            <h1>{movie.title}</h1>

            <div className="watch-meta">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.duration}</span>
              <span>•</span>
              <span>{movie.ageRating}</span>
              <span>•</span>

              <span className="watch-rating">
                <Star
                  size={14}
                  fill="currentColor"
                />
                {movie.rating}
              </span>
            </div>
          </div>

          <div className="watch-earn-card">
            <div className="watch-earn-header">
              <div className="watch-earn-title">
                <div className="watch-earn-icon">
                  <Gift size={20} />
                </div>

                <div>
                  <span>WATCH & EARN</span>
                  <h2>Eligible Activity</h2>
                </div>
              </div>

              <strong className="watch-reward">
                +{reward} ETB
              </strong>
            </div>

            <p className="watch-earn-description">
              Complete the required viewing activity and
              submit your rating when eligible. Final
              rewards are determined by the platform's
              reward eligibility rules.
            </p>

            <div className="watch-requirement">
              <div className="requirement-heading">
                <span>Viewing progress</span>

                <strong>{progress}%</strong>
              </div>

              <div className="requirement-progress">
                <div
                  className="requirement-progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="watch-rules">
              <div>
                <Clock3 size={15} />

                <span>
                  Complete the required watch activity
                </span>
              </div>

              <div>
                <CheckCircle2 size={15} />

                <span>
                  Only eligible activity can generate
                  rewards
                </span>
              </div>
            </div>

            <button
              type="button"
              className="rating-button"
              disabled={progress < 100 || rated}
              onClick={handleRate}
            >
              {rated ? (
                <>
                  <CheckCircle2 size={17} />
                  Rating Submitted
                </>
              ) : progress < 100 ? (
                <>
                  <Clock3 size={17} />
                  Complete Watching
                </>
              ) : (
                <>
                  <Star size={17} />
                  Rate Movie
                </>
              )}
            </button>
          </div>

          <div className="watch-about">
            <span className="section-eyebrow">
              ABOUT
            </span>

            <h2>About this movie</h2>

            <p>{movie.description}</p>

            <div className="movie-details-grid">
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
                <span>Age Rating</span>
                <strong>
                  {movie.ageRating}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <aside className="watch-sidebar">
          <div className="watch-sidebar-card">
            <span className="section-eyebrow">
              YOUR ACTIVITY
            </span>

            <h3>Today's progress</h3>

            <div className="activity-stat">
              <strong>{progress}%</strong>

              <span>Movie completion</span>
            </div>

            <div className="activity-stat">
              <strong>+{reward} ETB</strong>

              <span>Base activity reward</span>
            </div>

            <Link
              href="/rewards"
              className="sidebar-rewards-link"
            >
              View reward rules
            </Link>
          </div>

          <div className="watch-sidebar-card">
            <span className="section-eyebrow">
              NEXT
            </span>

            <h3>Explore more movies</h3>

            <p>
              Discover more eligible movies and continue
              your entertainment activity.
            </p>

            <Link
              href="/explore"
              className="sidebar-explore-link"
            >
              Explore Movies
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}