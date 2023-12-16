import React from 'react'
import './footer.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaStrava } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">

          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h3 className='flex'>
                <FaStrava className="icon"/> GemAmethyst
              </h3>
            </a>
          </div>

          <div className="socials flex">
            <FaLinkedin className="icon "/>
            <FaTwitterSquare  className="icon "/>
            <FaGithub className="icon "/>
            <FaInstagram  className="icon "/>
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Helpful Links
          </span>

          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Printshop</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>


        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Info
          </span>

          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>


        </div>

        <div className="footerLinks">
          <span className="linkTitle">
            Contact
          </span>

          <span className="phone">+1112223344</span>
          <span className="mail">anything@anything.com</span>
        </div>

        
      </div>
    </div>
  )
}

export default Footer