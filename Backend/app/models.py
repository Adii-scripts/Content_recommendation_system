from . import db

class Movie(db.Model):
    __tablename__ = 'movies'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    genres = db.Column(db.String)
    avg_rating = db.Column(db.Float)
    num_ratings = db.Column(db.Integer)
    poster_url = db.Column(db.String)
    backdrop_url = db.Column(db.String)
    synopsis = db.Column(db.Text)
    trailer_url = db.Column(db.String)
    year = db.Column(db.Integer)
    # Add more fields as needed for TMDb enrichment

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "posterUrl": self.poster_url,
            "backdropUrl": self.backdrop_url,
            "synopsis": self.synopsis,
            "trailerUrl": self.trailer_url,
            "genre": self.genres.split('|')[0] if self.genres else None,
            "year": self.year,
            "rating": self.avg_rating
        }
