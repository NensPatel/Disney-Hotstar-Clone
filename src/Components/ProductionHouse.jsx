import React from "react";

const ProductionHouse = () => {
  const ProductionHouseList = [
    {
      id: 1,
      image: "/Images/disney.png",
      video: "/Videos/disney.mp4",
    },
    {
      id: 2,
      image: "/Images/pixar.png",
      video: "/Videos/pixar.mp4",
    },
    {
      id: 3,
      image: "/Images/marvel.png",
      video: "/Videos/marvel.mp4",
    },
    {
      id: 4,
      image: "/Images/starwar.png",
      video: "/Videos/star-wars.mp4",
    },
    {
      id: 5,
      image: "/Images/nationalG.png",
      video: "/Videos/national-geographic.mp4",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {ProductionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative border-2 border-gray-600 rounded-lg hover:scale-110 transition-all ease-in-out duration-300 shadow-xl shadow-black overflow-hidden"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute inset-0 w-full h-full rounded-lg opacity-0 hover:opacity-70 transition-opacity duration-300"
          />
          <img src={item.image} className="w-full rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
