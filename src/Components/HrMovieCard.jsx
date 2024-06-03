import React from "react";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
  return (
    <section className="hover:scale-80  transition-all duration-200 ease-in">
      <img
        src={`${IMG_BASE_URL}${movie.backdrop_path}`}
        className="md:w-[180px] w-[100px] hover:border-[3px] border-gray-400 rounded-lg"
      />
      <p className="text-white md:w-[180px] w-[100px] mt-2">
        {movie.original_title}
      </p>
    </section>
  );
};

export default HrMovieCard;
