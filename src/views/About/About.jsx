import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/man.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Yash Chauhan</h2>
        <p>Hi, my name is Yash Chauhan and I am a full-stack web developer of experience with modern technologies like React js, Node js, Express JS, Next js, Mongo DB etc.. </p>
        <a href="https://www.linkedin.com/in/yash-chauhan-7b7a25200/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
