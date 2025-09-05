import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('postgresql://your_mac_username@localhost:5432/moviedb')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
