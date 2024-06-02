import React from "react";
import { Link } from "react-router-dom";
import { GoClock } from "react-icons/go";

const Card = ({ item }) => {
  return (
    <div className="container mx-auto flex justify-center md:justify-start">
      <div className="max-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500">
          <img
            src={item?.thumbnail_image}
            alt="image"
            className="rounded-t-lg"
          />
          <div className="py-6 px-5 rounded-lg bg-white">
            <Link to={`/item/${item._id}`}>
              <h1 className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>
            <div className="flex justify-between items-center flex-wrap">
              <button className="bg-blue-100 text-black px-3 py-1 rounded-md mb-2">
                {item?.category}
              </button>
              <div className="flex py-2 items-center">
                <GoClock className="mr-1" />
                <span>{item?.more && item.more.length > 0 && item.more[0].prep_time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
