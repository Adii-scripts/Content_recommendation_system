from flask import Blueprint, jsonify
from .models import Movie

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/movies/popular', methods=['GET'])
def get_popular_movies():
    movies = Movie.query.order_by(Movie.avg_rating.desc()).limit(20).all()
    return jsonify([m.to_dict() for m in movies])
