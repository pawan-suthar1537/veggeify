import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';
const apiUrl = import.meta.env.VITE_API_URL;


const Recipes = () => {
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
    <div className='px-6 lg:px-12 py-20'>
        <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        All Recipes
      </h1>
      <CategoryWrapper/>
      <ul className='mt-20 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {
            items.map((item)=>(
                <Card key={item._id} item={item}/>
            ))
        }
      </ul>
    </div>
  )
}

export default Recipes