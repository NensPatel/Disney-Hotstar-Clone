import React, { useState, useEffect, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    const getMovieByGenreId = async () => {
      try {
        const resp = await GlobalApi.getMovieByGenreId(genreId);
        console.log(resp.data.results);
        setMoviesList(resp.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    getMovieByGenreId();
  }, [genreId]);

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += window.innerWidth - 500;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= window.innerWidth - 500;
    }
  };

  return (
    <div>
      <HiChevronLeft
        className={`text-white text-[30px] absolute mx-8 mt-[90px] cursor-pointer left-0 hidden md:block ${
          index_ % 3 == 0 ? "mt-[60px]" : "mt-[90px]"
        }`}
        onClick={sliderLeft}
      />
      <HiChevronRight
        className={`text-white text-[30px] absolute mx-8 mt-[90px] cursor-pointer right-0 hidden md:block ${
          index_ % 3 == 0 ? "mt-[60px]" : "mt-[90px]"
        }`}
        onClick={sliderRight}
      />

      <div
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-5"
        ref={elementRef}
      >
        {moviesList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard key={index} movie={item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
