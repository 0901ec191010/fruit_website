import React from 'react'
import web from "../AnimetedWebsite/Images/1.png"
import Common from "../AnimetedWebsite/Common"


const Home = () => {
  
  return (
    <>
   
   <Common name='Grow your business with' 
      imgsrc={web} 
      visit='/service' 
      btname="Get Started" />
   
    </>
  )
}

export default Home
