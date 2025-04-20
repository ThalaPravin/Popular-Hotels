import React from "react";
import NoOfRev from "../../public/assets/images/NoOfRev.png";
import LocationIcon from "../../public/assets/images/LocationIcon.png";
import CarTagicon from "../../public/assets/images/CarTagicon.png";
import RightMark from "../../public/assets/images/RightMark.png";
import WrongIcon from "../../public/assets/images/WrongIcon.png";

const HotelCard = ({ hotel }) => {
  const {
    name,
    location,
    price,
    priceUnit,
    available,
    rating,
    reviews,
    image,
  } = hotel;

  return (
    <div className="flex bg-white md:flex-row lg:flex-row rounded-lg relative">
      <div className="w-1/4">
        <img src={image} alt={name} className="h-full w-full object-contain lg:object-cover" />
      </div>

      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium font-['Candara'] lg:whitespace-nowrap text-gray-800">
            {name}
          </h3>

          <div className="flex items-center mt-2">
            <img src={LocationIcon} alt="LocationIcon" className="w-[16px]" />
            <span className="ml-1 font-['Candara'] text-gray-600">{location}</span>
            <img src={CarTagicon} alt="CarTagIcon" className="w-[20px] ml-3" />

            <span className="ml-2 flex items-center">
              {available ? (
                <img
                  src={RightMark}
                  alt="RightMark"
                  className="w-[28px] ml-2"
                />
              ) : (
                <img
                  src={WrongIcon}
                  alt="WrongIcon"
                  className="w-[28px] ml-2"
                />
              )}
            </span>
          </div>

          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 font-['Candara'] text-gray-700">{rating}</span>

            <span className="ml-2 flex items-center">
              <img src={NoOfRev} alt="" className="w-[20px]" />
              <span className="ml-1 font-['Candara'] text-gray-600">{reviews / 1000}K</span>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center items-center mt-11 lg:mt-4 md:mt-4 gap-4 p-3">
        <div>
          <span className="md:text-xl font-medium font-['Cinzel']">₹{price}</span>
          <span className="md:text-xs text-center text-gray-500 block ">/{priceUnit}</span>
        </div>

        <button className="bg-white text-pink-500 border border-pink-500 rounded-full px-6 py-1 text-sm font-medium hover:bg-pink-50 transition lg:whitespace-nowrap font-['Candara']">
          Check now
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
