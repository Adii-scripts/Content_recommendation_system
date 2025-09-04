import os
import pandas as pd
from app import create_app, db
from app.models import Movie
from dotenv import load_dotenv

load_dotenv()

app = create_app()

CSV_PATH = os.path.join(os.path.dirname(__file__), '../../data/movies_with_ratings.csv')

def seed_movies():
    df = pd.read_csv(CSV_PATH)
    with app.app_context():
        db.drop_all()
        db.create_all()
        for _, row in df.iterrows():
            movie = Movie(
                id=row['movieId'],
                title=row['title'],
                genres=row['genres'],
                avg_rating=row['avg_rating'],
                num_ratings=row['num_ratings'],
                year=int(row['title'][-5:-1]) if row['title'][-6] == '(' else None
            )
            db.session.add(movie)
        db.session.commit()
        print('Database seeded!')

if __name__ == '__main__':
    seed_movies()
