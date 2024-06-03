import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp);
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth-110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth-110;
  };

  return (
    <div>
      <HiChevronLeft
        className="text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer hidden md:block"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0 hidden md:block"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-2 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={`${IMG_BASE_URL}${item.backdrop_path}`}
            alt={item.title || item.name}
            className="min-w-full md:h-[370px] object-cover object-top-left mr-5 rounded-lg hover:border-4 border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
