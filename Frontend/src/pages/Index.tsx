import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MovieCarousel } from "@/components/MovieCarousel";
import { QuickViewModal } from "@/components/QuickViewModal";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/movies/popular");
      if (!res.ok) throw new Error("Failed to fetch movies");
      return res.json();
    },
  });

  // Split movies for carousels (for demo, just chunk the array)
  const movies = data || [];
  const trendingMovies = movies.slice(0, 5);
  const actionMovies = movies.slice(5, 8);
  const comedyMovies = movies.slice(8, 10);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Discover Your Next
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Favorite Film
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore curated collections of movies, get personalized recommendations,
            and watch trailers to find your perfect entertainment.
          </p>
        </div>
        {/* Movie Carousels */}
        <div className="space-y-12">
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-48 mb-4" />
              <div className="flex space-x-4">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-[300px] w-[200px]" />
                ))}
              </div>
              <Skeleton className="h-8 w-48 mb-4 mt-12" />
              <div className="flex space-x-4">
                {[...Array(3)].map((_, i) => (
                  <Skeleton key={i} className="h-[300px] w-[200px]" />
                ))}
              </div>
              <Skeleton className="h-8 w-48 mb-4 mt-12" />
              <div className="flex space-x-4">
                {[...Array(2)].map((_, i) => (
                  <Skeleton key={i} className="h-[300px] w-[200px]" />
                ))}
              </div>
            </>
          ) : error ? (
            <div className="text-red-500">
              Failed to load movies. Please try again later.
            </div>
          ) : (
            <>
              <MovieCarousel
                title="Trending Now"
                movies={trendingMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieCarousel
                title="Action & Adventure"
                movies={actionMovies}
                onMovieClick={handleMovieClick}
              />
              <MovieCarousel
                title="Comedy & Feel Good"
                movies={comedyMovies}
                onMovieClick={handleMovieClick}
              />
            </>
          )}
        </div>
      </main>
      {/* Quick View Modal */}
      <QuickViewModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
