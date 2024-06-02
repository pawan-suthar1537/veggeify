import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryWrapper from "./CategoryWrapper";
import axios from "axios";
import Card from "../../components/Card";

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
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {
          item && item?.map((item)=>(
            <Card item={item} key={item.id} />
          ))
        }
      </ul>
    </div>
  );
};

export default Categorypage;
