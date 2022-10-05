import React, { useState, useEffect } from "react";
import ContentList from "../lists/ContentList";
import { getContent } from "../../handler/api";
import Loading from "../layout/Loading";
import { Menu } from "../menu/Menu";

const Movies = () => {
  const [selectedMovieType, setSelectedMovieType] = useState("popular")
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movieCategories, setMovieCategories] = useState(["now_playing", "popular", "top_rated", "upcoming"])



  useEffect(() => {
    fetchMovies();
  }, [selectedMovieType]);


  const fetchMovies = () => {
    setIsLoading(true);
    getContent("movie", selectedMovieType)
      .then((res) => {
        setMoviesData(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <Menu setSelectedContent={setSelectedMovieType} selectedContent={selectedMovieType} categories={movieCategories} />
      {isLoading ? <Loading /> : <ContentList data={moviesData} type="movie" />}
    </>
  );
};

export default Movies;
