import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

 const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to Step into the future before others?
        </h1>
      </div>

      <div className='gpt3__footer-btn'>
      <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt='logo' />
        <p>Block A23, Main Land Ikeja, Lagos State. All Rights Reserved</p>
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters </p>
        <p>Contact</p>        
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms and Conditions</p>
        <p>Social Media</p>
        <p>Privacy Policy </p>
        <p>Contact</p>        
      </div>

      <div className="gpt3__footer-links_div">
        <h4>Get in Touch</h4>
        <p>Cretcjerwpprd K12 182 DK aljknsn</p>
        <p>081-246787768</p>
        <p>info@opayme.net </p>
      </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>2022 GPT-3. All rights reserved</p>
      </div>    
    </div>
  )
}
export default Footer
