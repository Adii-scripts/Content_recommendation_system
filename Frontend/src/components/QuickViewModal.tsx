import { Movie } from "@/data/mockMovies";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Star, X } from "lucide-react";
import { useState } from "react";

interface QuickViewModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal = ({ movie, isOpen, onClose }: QuickViewModalProps) => {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!movie) return null;

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  const handleCloseTrailer = () => {
    setShowTrailer(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 modal-backdrop">
        <div className="relative">
          {/* Backdrop image */}
          <div className="relative h-64 md:h-80">
            <img
              src={movie.backdropUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-6 bg-background">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold mb-2 fade-in">
                {movie.title}
              </DialogTitle>
            </DialogHeader>

            <div className="flex items-center space-x-4 mb-4 fade-in">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{movie.rating}</span>
              </div>
              <span className="text-muted-foreground">{movie.year}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{movie.genre}</span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed fade-in">
              {movie.synopsis}
            </p>

            {!showTrailer ? (
              <Button 
                onClick={handleWatchTrailer}
                size="lg"
                className="w-full sm:w-auto fade-in"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Trailer
              </Button>
            ) : (
              <div className="fade-in">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Trailer</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCloseTrailer}
                  >
                    Close Trailer
                  </Button>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`${movie.trailerUrl}?autoplay=1`}
                    title={`${movie.title} Trailer`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};