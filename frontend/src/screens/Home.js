import React from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Carousel from '../components/Carousel';
const Home = () => {

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
  ];

  return (
    <>
    <div>
      <Navbar/>
    
    </div>
    <Carousel slides={slides} />
    <div> 
      <Body/>
    </div>
    <div> 
      <Footer/>
    </div>3
    </>
  )
}

export default Home