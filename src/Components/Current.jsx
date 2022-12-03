import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

function Current({ movie, index }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const summarystyle = {
    display: show ? "block" : "none",
  };

  return (
    <Card className="movie-container" key={index}>
      <img className="movie-poster" src={movie.poster} alt={movie.name}></img>

      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {movie.name}
            <IconButton
              color="primary"
              aria-label="info"
              onClick={() => navigate(`/moviedetails/${movie.id}`)}
            >
              <InfoIcon />
            </IconButton>

            <IconButton
              color="secondary"
              aria-label="toggle"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>

          <p className="movie-rating" style={styles}>
            ⭐{movie.rating}
          </p>
        </div>

        {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn btn-danger my-2"
          onClick={() => navigate(`/booking/${movie.id}`)}
          // onClick={() => navigate(`/adminlogin`)}
        >
          Book Now
        </button>
      </CardActions>
    </Card>
  );
}

export default Current;
