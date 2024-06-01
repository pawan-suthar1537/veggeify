import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10">
      <h1 className="mt-6 mb-10 text-4xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">
        A blog template made influcencers
      </h1>
      <form
        action="/serch"
        className="bg-white p-4 rounded relative flex items-center"
      >
        <IoSearchOutline clssName="w-10 h-5  text-primary " size={20} />
        <input
          className="outline-none ml-4 w-full placeholder:text-[#1b2629]"
          type="serch"
          name="query"
          placeholder="Serch for a recepie"
          id="serch"
          required=""
        />
      </form>
    </div>
  );
};

export default Hero;
