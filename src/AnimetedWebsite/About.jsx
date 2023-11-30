import React from 'react'
import web from "../AnimetedWebsite/Images/php.jpg"
import { Link } from 'react-router-dom'
import Common from '../AnimetedWebsite/Common'


const About = () => {
  
  return (
    <>
      <Common name='Welcome to About page' 
      imgsrc={web} 
      visit='/contact' 
      btname="Contact Now" />
    </>
  )
}

export default About

