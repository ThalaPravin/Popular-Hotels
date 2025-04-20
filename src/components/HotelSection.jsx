import React from "react";
import HotelCard from "./HotelCard";

const HotelSection = ({ hotels }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-3xl font-semibold font-['Cinzel'] text-gray-800">
          Popular Hotels
        </h2>
        <div className="flex items-center">
          <span className="text-blue-500 mr-1">Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-3">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelSection;
