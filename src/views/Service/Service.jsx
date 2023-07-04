import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>My Services</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Web Development" text = "We offers a variety of website design and development services in which we use modern technologies of Era.." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Software Development" text = "Software development is an amalgamation of several activities like designing, testing, programming.."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Web Hosting" text = "A web host, or web hosting service provider, is a business that provides the technologies and services .." />
      </div>
    </div>
    </>
  )
}

export default Service
