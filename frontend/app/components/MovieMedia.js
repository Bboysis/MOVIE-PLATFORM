 "use client";

//import { CldImage } from "next-cloudinary";
import { Play } from "lucide-react";

export default function MovieMedia({
  movie,
  type = "poster",
  className = "",
}) {
  const mediaId =
    type === "backdrop"
      ? movie?.backdrop
      : type === "thumbnail"
        ? movie?.thumbnail || movie?.poster
        : movie?.poster;

  if (!mediaId) {
    return (
      <div className={`movie-media-placeholder ${className}`}>
        <div className="movie-media-placeholder-content">
          <div className="movie-media-play">
            <Play size={22} fill="currentColor" />
          </div>

          <span>{movie?.title || "Movie"}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`movie-media ${className}`}>
      <CldImage
        src={mediaId}
        alt={movie?.title || "Movie"}
        fill
        sizes={
          type === "backdrop"
            ? "100vw"
            : "(max-width: 768px) 50vw, 280px"
        }
        className="movie-media-image"
        crop="fill"
        gravity="auto"
      />
    </div>
  );
}