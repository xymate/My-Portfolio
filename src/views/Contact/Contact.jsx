import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contact Me</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="mailto:yash.chauhan.ug20@nsut.ac.in"/>
        <ContactBox animation="fade-up" class= "fab fa-github" name="Github" link="https://github.com/xymate"/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link="https://www.linkedin.com/in/yash-chauhan-7b7a25200/"/>
      </div>

    </div>
    </>
  )
}

export default Contact
