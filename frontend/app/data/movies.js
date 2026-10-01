 export const categories = [
  "All",
  "Action",
  "Adventure",
  "Drama",
  "Science Fiction",
  "Thriller",
  "Mystery",
  "Romance",
  "Comedy",
  "Documentary",
  "Animation",
];

export const movies = [
  {
    id: "the-last-horizon",
    title: "The Last Horizon",
    description:
      "A deep-space expedition discovers a mysterious signal that could change humanity's understanding of the universe.",
    year: 2026,
    duration: "2h 08m",
    rating: 8.4,
    ageRating: "PG-13",

    category: "Science Fiction",
    genres: ["Science Fiction", "Adventure"],

    language: "English",
    subtitles: ["English"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: true,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "beyond-the-silence",
    title: "Beyond The Silence",
    description:
      "A journalist follows a strange trail of clues leading to a forgotten story buried beneath a quiet city.",
    year: 2025,
    duration: "1h 52m",
    rating: 8.1,
    ageRating: "PG-13",

    category: "Mystery",
    genres: ["Mystery", "Drama"],

    language: "English",
    subtitles: ["English", "French"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "midnight-run",
    title: "Midnight Run",
    description:
      "One night. One impossible delivery. A courier races across the city while someone follows every move.",
    year: 2026,
    duration: "1h 47m",
    rating: 7.9,
    ageRating: "16+",

    category: "Action",
    genres: ["Action", "Thriller"],

    language: "English",
    subtitles: ["English"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "the-hidden-city",
    title: "The Hidden City",
    description:
      "An expedition discovers an abandoned city hidden beyond an unexplored mountain range.",
    year: 2025,
    duration: "2h 01m",
    rating: 8.2,
    ageRating: "PG",

    category: "Adventure",
    genres: ["Adventure", "Mystery"],

    language: "English",
    subtitles: ["English", "Spanish"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "after-the-rain",
    title: "After The Rain",
    description:
      "Two strangers meet after a storm and discover that their lives are connected by an unexpected secret.",
    year: 2025,
    duration: "1h 41m",
    rating: 7.8,
    ageRating: "PG-13",

    category: "Drama",
    genres: ["Drama", "Romance"],

    language: "English",
    subtitles: ["English"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "parallel",
    title: "Parallel",
    description:
      "A scientist discovers another version of Earth existing only a fraction of a second away.",
    year: 2026,
    duration: "2h 14m",
    rating: 8.6,
    ageRating: "PG-13",

    category: "Science Fiction",
    genres: ["Science Fiction", "Thriller"],

    language: "English",
    subtitles: ["English", "German"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "zero-hour",
    title: "Zero Hour",
    description:
      "A security team has sixty minutes to prevent a city-wide attack.",
    year: 2025,
    duration: "1h 56m",
    rating: 8.0,
    ageRating: "16+",

    category: "Thriller",
    genres: ["Thriller", "Action"],

    language: "English",
    subtitles: ["English"],
    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "north-star",
    title: "North Star",
    description:
      "A young explorer begins a journey across the Arctic in search of a legendary research station.",
    year: 2024,
    duration: "1h 49m",
    rating: 7.7,
    ageRating: "PG",

    category: "Adventure",
    genres: ["Adventure", "Drama"],

    language: "English",
    subtitles: ["English"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "the-final-letter",
    title: "The Final Letter",
    description:
      "A forgotten letter arrives twenty years late and forces a family to confront the past.",
    year: 2025,
    duration: "1h 44m",
    rating: 8.0,
    ageRating: "PG-13",

    category: "Drama",
    genres: ["Drama", "Romance"],

    language: "English",
    subtitles: ["English", "French"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "deep-water",
    title: "Deep Water",
    description:
      "A marine research team finds something beneath the ocean that was never supposed to be there.",
    year: 2026,
    duration: "1h 58m",
    rating: 8.3,
    ageRating: "16+",

    category: "Thriller",
    genres: ["Thriller", "Mystery"],

    language: "English",
    subtitles: ["English"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "signal",
    title: "Signal",
    description:
      "A mysterious transmission reaches Earth and only one engineer can understand its message.",
    year: 2026,
    duration: "2h 03m",
    rating: 8.5,
    ageRating: "PG-13",

    category: "Science Fiction",
    genres: ["Science Fiction", "Mystery"],

    language: "English",
    subtitles: ["English", "Spanish"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },

  {
    id: "one-last-summer",
    title: "One Last Summer",
    description:
      "A group of friends return to the place where they grew up for one final summer together.",
    year: 2024,
    duration: "1h 38m",
    rating: 7.6,
    ageRating: "PG",

    category: "Romance",
    genres: ["Romance", "Drama"],

    language: "English",
    subtitles: ["English"],

    // Media
    poster: null,
    backdrop: null,
    thumbnail: null,
    video: null,
    trailer: null,

    featured: false,

    reward: {
      base: 25,
      eligible: true,
    },
  },
];