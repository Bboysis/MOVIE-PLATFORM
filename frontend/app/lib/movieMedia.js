export function getMoviePoster(movie) {
  if (movie?.poster) {
    return movie.poster;
  }

  return null;
}

export function getMovieBackdrop(movie) {
  if (movie?.backdrop) {
    return movie.backdrop;
  }

  return null;
}

export function getMovieVideo(movie) {
  if (movie?.video) {
    return movie.video;
  }

  return null;
}

export function getMovieTrailer(movie) {
  if (movie?.trailer) {
    return movie.trailer;
  }

  return null;
}

export function getMovieThumbnail(movie) {
  if (movie?.thumbnail) {
    return movie.thumbnail;
  }

  return getMoviePoster(movie);
}