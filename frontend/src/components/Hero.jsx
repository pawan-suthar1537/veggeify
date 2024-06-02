import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="mt-6 mb-10 text-4xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
        A blog template made influcencers
      </h1>
      <form
        action="/search"
        className="bg-white p-4 rounded relative flex items-center"
      >
        <IoSearchOutline className="w-10 h-5  text-black " size={20} />
        <input
          className="outline-none ml-4 w-full placeholder:text-[#1b2629]"
          type="search"
          name="query"
          placeholder="Search for a recepie"
          id="search"
          required=""
        />
      </form>
    </div>
  );
};

export default Hero;
