import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import UserContext from "./usercontext";
// import axios from "axios";
// import { Config } from "./Config";
import movieDatas from "../Helper/movieDatas";
import Current from "../Components/Current";

function Movies() {
  const [show, setShow] = useState(true);
  const [movieData, setMovieData] = useState([...movieDatas]);
  const [movieList, setMovieList] = useState([]);

  // let movieData = useContext(UserContext);

  // let fetchAllMovieData = async () => {
  //   try {
  //     let fullmovieDatas = await axios.get(`${Config.api}/movies`, {
  //       headers: {
  //         Authorization: `${localStorage.getItem("react-app-token")}`,
  //       },
  //     });
  //     movieData.setMovieList(fullmovieDatas.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchAllMovieData();
  // }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h1 className="text-center">Currently Streaming</h1>
        </div>
      </div>

      <div>
        <div className="movie-list">
          {movieDatas.map((movie, index) => (
            <Current movie={movie} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
