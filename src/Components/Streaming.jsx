import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const StreamMovies = [
  {
    name: "Legend",
    poster:
      "https://popcornusa.s3.amazonaws.com/movies/650/10528-40341-TheLegen",
    languages: "Tamil | Hindi | Telugu",
    imdb: "2.7 / 10",
    genre: "Action , Drama , Romance",
  },
  {
    name: "Vikram",
    poster:
      "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227915/Vikram-posterart.jpg",
    languages: "Tamil | Hindi | Telugu",
    imdb: "8 / 10",
    genre: "Action , Adventure , Thriller",
  },
  {
    name: "Gulu Gulu",
    poster:
      "https://popcornusa.s3.amazonaws.com/movies/650/10529-0-GuluGulujpg",
    languages: "Tamil | Hindi | Telugu",
    imdb: "7 / 10",
    genre: "Action , Comedy , Fantasy",
  },
];

function Streaming() {
  return (
    <div className="container my-5">
      <div className="row">
        <div>
          <h1 className="text-center">Now streaming on</h1>
        </div>
        <div className="movie-list my-4">
          {StreamMovies.map((movie, index) => (
            <Card className="movie-container" key={index}>
              <img
                className="movie-poster"
                src={movie.poster}
                alt={movie.name}
              ></img>

              <CardContent>
                <div className="content">
                  <div className="movie-specs">
                    <h3 className="movie-name">{movie.name}</h3>
                  </div>
                  <div>
                    <p>
                      <span className="f-b">Languages</span> : {movie.languages}
                    </p>
                    <p>
                      <span className="f-b">Genre</span> : {movie.genre}
                    </p>
                    <p>
                      <span className="f-b">IMDB</span> : {movie.imdb}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Streaming;
