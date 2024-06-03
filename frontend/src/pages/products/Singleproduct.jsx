import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Singleproduct = () => {
  const item = useLoaderData();
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  //   console.log("iiiitem",item)
  const extractnum = (timestring) => {
    if (timestring) {
      let timearray = timestring.split(" ");
      return parseInt(timearray[0]);
    }
    return 0;
  };

  let preptime = extractnum(item?.data.more[0].prep_time);
  let cooktime = extractnum(item?.data.more[0].cook_time);
  let total = preptime + cooktime;

  return (
    <section className="min-h-dvh md:flex justify-center items-center md:bg-eggshell">
      <article>
        <div className=" md:my-[5rem] md:py-8 pb-2 p-4 md:rounded-xl">
          <picture className="flex justify-center">
            <img
              src={item.data.thumbnail_image}
              alt="image"
              className="md:max-w-[100%] w-[500px] md:h-[520px] rounded-xl lg:-mt-16 md:rounded-xl mx-auto"
            />
          </picture>

          <div className="px-8">
            <h1 className="text-2xl lg:text-4xl mt-4 lg:mt-10">
              {item.data.name}
            </h1>
            <p className="mt-6">{item.data.instruction}</p>
            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className="text-xl font-semibold ml-2 ">Prepration time</h3>
              <ul className="list-disc mt-3  ml-8 text-lg marker:text-orange-500">
                <li className="pl-3">
                  <p>
                    <span>Total:</span> <span>{total}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Prepration:</span>{" "}
                    <span>{item.data.more[0].prep_time}</span>
                  </p>
                </li>
                <li className="pl-3 mt-3">
                  <p>
                    <span>Cooking:</span>{" "}
                    <span>{item.data.more[0].cook_time}</span>
                  </p>
                </li>
              </ul>
            </article>
          </div>

          <div className="px-8">
            <article className="bg-rose-50 mt-6 p-5 rounded-xl">
              <h3 className="text-xl font-semibold ml-2 ">ingredients</h3>
              <ul className="list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle">
                {item.data.ingredients.map((ing, index) => (
                  <li key={index} className="pl-4 mt-2">
                    <span className="mr-1">{ing.name}:</span>
                    <span className="">{ing.quantity}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <h3 className="text-3xl lg:text-4xl mt-6 ">instruction</h3>
          <p className="mt-2  ">{item.data.instruction}</p>
          <div className=" mt-6 py-2">
            <h3 className="text-3xl lg:text-4xl mt-6">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.data.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-blue-200 text-black rounded-full px-3 py-1 m-1"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Singleproduct;
