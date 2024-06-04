import React from "react";

const About = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        About
      </h1>
      <p className="text-center sm:w-1/2 mx-auto mb-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        perferendis debitis quod at illum odio ad perspiciatis repellat
        asperiores officia voluptatibus, necessitatibus repudiandae voluptates
        facere accusamus dolorem animi voluptate possimus sit molestiae qui
        beatae excepturi? Consectetur, et voluptatibus? Fugit ab quaerat
        accusamus aliquid et consequatur corporis sed repudiandae vel ea!
      </p>

      <article className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-white">
                {" "}
                Favorite <span className="text-white">Recipes</span>{" "}
              </strong>
            </h1>

            <p className="mt-4 text- text-white max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/recipes"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                All Recipes
              </a>

              <a
                href="/contact"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* article */}
      
    </section>
  );
};

export default About;
