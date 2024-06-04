import React from 'react'

const AboutSection = () => {
    return (
        <div className="overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-4 lg:px-10">
          
    
          {/* text div */}
          <div className="text-start sm:w-1/2">
            <h2 className="text-4xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
            Meet Our Vegan Food Enthusiast


            </h2>
            <p className="text-xl mt-4 text-[#5c5c5c]">Welcome to our culinary haven, where plant-based innovation meets delicious simplicity. Our resident vegan foodie is passionate about exploring and creating delightful recipes that cater to both seasoned vegans and those new to the lifestyle. With a love for experimenting in the kitchen, each dish is a testament to the endless possibilities of vegan cooking. From nutritious meals to indulgent treats, our recipes are designed to inspire and satisfy. Join us on this flavorful journey and discover the joy of plant-based eating. Click below to dive into our collection and start your culinary adventure today!</p>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex">
                    <button className="py-4 px-8 bg-btncolor text-white hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none border border-black rounded-lg">View recipes</button>
                </div>
            </div>
          </div>
          <div >
            
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBjb29raW5nfGVufDB8fDB8fHww"
              alt="featured"
              className="rounded-md w-[800px]"
            />
          </div>
        </div>
      );
}

export default AboutSection