import React from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <>
      <img
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        className="md:w-[130px] w-[60px] hover:border-[3px] border-gray-400 transition-all duration-150 ease-in rounded-lg hover:scale-110 cursor-pointer"
      />
        {/* <p className="text-white">{movie.original_title}</p> */}
    </>
  );
};

export default MovieCard;
