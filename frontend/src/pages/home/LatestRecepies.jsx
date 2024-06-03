import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const LatestRecepies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getitems = async () => {
      const res = await axios.get(`${apiUrl}/api/items`);
      //   console.log("---> latest rescipies", res.data.data);
      setItems(res.data.data);
    };
    getitems();
  }, []);

  return (
    <div className="px-5 xl:px-10 p-16">
      <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest Recipes
      </h2>
      {/* get all items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.length > 0 ? (
          items
            .slice(0, 4)
            .map((item, index) => <Card key={item._id} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="sm:w-64 mx-auto mt-16">
        <Link to="/recipes">
        <button className="py-4 px-8 hover:bg-btncolor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none border border-black rounded-lg">
          View All recipes
        </button></Link>
      </div>
    </div>
  );
};

export default LatestRecepies;
