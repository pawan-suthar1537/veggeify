import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { mirage } from "ldrs";
import axios from "axios";
import Card from "../components/Card";
const apiUrl = import.meta.env.VITE_API_URL;

mirage.register();

const Search = () => {
  const { query: queryParam } = useParams();
  const [query, setQuery] = useState(queryParam || "");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryparam = params.get("query");
    if (queryparam && query !== queryparam) {
      setQuery(queryparam);
    }
  }, []);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      fetchItems();
    }, 500);

    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [query]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/api/items`, {
        params: { q: query },
      });
      const filteredResults = response.data.data.filter((item) =>
        item.name.toLowerCase().startsWith(query.toLowerCase())
      );
      setResult(filteredResults);
    } catch (error) {
      console.log("Error fetching items:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setQuery(searchText);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="bg-white p-4 rounded relative flex items-center md:max-w-3xl mx-auto">
        <IoSearchOutline className="w-10 h-5 text-black" size={20} />
        <input
          onChange={handleSearchChange}
          className="outline-none ml-4 w-full placeholder:text-[#1b2629]"
          type="search"
          name="query"
          placeholder="Search for a recipe"
          id="search"
          value={query}
          required
        />
      </div>
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white/70 z-50">
          
           
            <l-mirage size="60" speed="2.5" color="black"></l-mirage>
          
        </div>
      )}

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {result.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </ul>
    </div>
  );
};

export default Search;
