import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames) return;

  return (
    <div className="p-4 m-4 bg-black bg-opacity-80 text-white">
      <div>
        {/* <h1>{movieNames[0]}</h1> */}
        {movieNames.map((movieNames, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={movieResults[index]}>
            </MovieList>
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestion;
