import React from "react";

const FeaturedSection = () => {
  return (
    <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-4 lg:px-10">
      <div className="relative">
        <div className="absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider">
          Featured Recepie
        </div>
        <img
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D"
          alt="featured"
          className="rounded-md w-[600px]"
        />
      </div>

      {/* text div */}
      <div className="text-start sm:w-1/2">
        <h2 className="text-4xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
            Pizza hai bhai bahot bhadiya
        </h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto nemo ipsa vitae eligendi error officia sed fugiat cum accusamus?</p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex">
                <button className="py-4 px-8 hover:bg-btncolor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none border border-black rounded-lg">View recipes</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
