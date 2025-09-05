import { Movie } from "@/data/mockMovies";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div 
      className="group relative flex-shrink-0 cursor-pointer movie-card"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-cinema-card">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="h-[300px] w-[200px] object-cover"
          loading="lazy"
        />
        
        {/* Overlay with rating */}
        <div className="absolute top-2 right-2 flex items-center space-x-1 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span>{movie.rating}</span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-sm font-semibold text-white line-clamp-2">
              {movie.title}
            </h3>
            <p className="text-xs text-white/80">
              {movie.year} • {movie.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};