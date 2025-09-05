export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  trailerUrl: string;
  genre: string;
  year: number;
  rating: number;
}

export const trendingMovies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    posterUrl: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    synopsis: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    trailerUrl: "https://www.youtube.com/embed/Way9Dexny3w",
    genre: "Sci-Fi",
    year: 2024,
    rating: 8.5
  },
  {
    id: 2,
    title: "Oppenheimer",
    posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    genre: "Biography",
    year: 2023,
    rating: 8.3
  },
  {
    id: 3,
    title: "Guardians of the Galaxy Vol. 3",
    posterUrl: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3Zbk7N8k.jpg",
    synopsis: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own.",
    trailerUrl: "https://www.youtube.com/embed/u3V5KDHRQvk",
    genre: "Action",
    year: 2023,
    rating: 7.9
  },
  {
    id: 4,
    title: "Spider-Man: Across the Spider-Verse",
    posterUrl: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
    synopsis: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse.",
    trailerUrl: "https://www.youtube.com/embed/cqGjhVJWtEg",
    genre: "Animation",
    year: 2023,
    rating: 8.7
  },
  {
    id: 5,
    title: "The Batman",
    posterUrl: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
    synopsis: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    trailerUrl: "https://www.youtube.com/embed/mqqft2x_Aa4",
    genre: "Action",
    year: 2022,
    rating: 7.8
  }
];

export const actionMovies: Movie[] = [
  {
    id: 6,
    title: "Top Gun: Maverick",
    posterUrl: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
    synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.",
    trailerUrl: "https://www.youtube.com/embed/g4U4BQW9OEk",
    genre: "Action",
    year: 2022,
    rating: 8.2
  },
  {
    id: 7,
    title: "John Wick: Chapter 4",
    posterUrl: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
    synopsis: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.",
    trailerUrl: "https://www.youtube.com/embed/qEVUtrk8_B4",
    genre: "Action",
    year: 2023,
    rating: 7.7
  },
  {
    id: 8,
    title: "Fast X",
    posterUrl: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    synopsis: "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path.",
    trailerUrl: "https://www.youtube.com/embed/aOb15GVFZaQ",
    genre: "Action",
    year: 2023,
    rating: 5.8
  }
];

export const comedyMovies: Movie[] = [
  {
    id: 9,
    title: "Barbie",
    posterUrl: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
    synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    trailerUrl: "https://www.youtube.com/embed/pBk4NYhWNMM",
    genre: "Comedy",
    year: 2023,
    rating: 6.9
  },
  {
    id: 10,
    title: "Everything Everywhere All at Once",
    posterUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    backdropUrl: "https://image.tmdb.org/t/p/w1280/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg",
    synopsis: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    trailerUrl: "https://www.youtube.com/embed/WLRAPgOe4jY",
    genre: "Comedy",
    year: 2022,
    rating: 7.8
  }
];