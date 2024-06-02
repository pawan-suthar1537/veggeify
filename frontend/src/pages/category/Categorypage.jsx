import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;


const Categorypage = () => {
  const { category } = useParams();
  const [item,setitem] = useState([])
  const [loading, setloading] = useState(false);


  useEffect(()=>{
    const fetchCategorydata = async () => {
      setloading(true)
      try {
        const response = await axios.get(`${apiUrl}/api/category/${category}`);
        console.log("--->categorydata",response.data)
        setitem(response.data)

        
      } catch (error) {
        console.log(error.message)
        
      }
    }
    fetchCategorydata()

  },[category])

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl p-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {category}
      </h1>
      <CategoryWrapper/> 
      <ul>
        {
          item && item?.map((item)=>(
            <li key={item._id}>
              {item.name}

            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Categorypage;
