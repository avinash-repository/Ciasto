import React, { useState, useEffect } from 'react'
import Card from './Card'
import cakes from '../cakesdata';
import { useAsyncError } from 'react-router-dom';
const Body = () => {

  const [cakeCat , setcakeCat] = useState([]);
  const [cakeitem, setcakeitem] = useState([]);

  const loaddata= async () =>{
      let response = await fetch("http://localhost:5000/api/cakedata", {
        method:"POST",
        headers: {
              'Content-Type' : 'application/json'

        }
      });

      response= await response.json();
      //console.log(response[0], response[1])
      setcakeitem(response[0]);
      
      setcakeCat(response[1]);
  }

  useEffect(()=>{
    loaddata()
  }, [])
  const getCakeItemsByCategory = (category) => {
    return cakeitem.filter(item => item.category === category);
  }



  return (
    <div className='flex md:flex-row bg-gradient-to-r from-[#000000] to-[#923CB5] h-full '>
    <div className='flex flex-wrap m-10'>
      {cakeCat.map((data, index) => (
        <div className=' mb-4 text-white  ' key={index}>
          <div className='text-3xl uppercase pt-5  mt-2 underline pb-5'>
          <h2>{data.CategoryName}</h2>
          </div>
   
          <div className='flex flex-wrap'>
            {cakeitem.map((item, index) => (
              item.category === data.CategoryName && (
                <div className=' md:w-1/3' key={index}>
                  <Card
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    prices={item.prices[0]}
                    
                  />
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>  

  )
}

export default Body;