import React from 'react'
import './teams.scss'
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 
import { FaGithub } from "react-icons/fa";  
import { FaFacebookF } from "react-icons/fa6";
import ceo from '../../assets/CEO.svg'
import thinker from '../../assets/thinker.svg'
const Teams = () => {
  return (
    <div className='main'>
        <div className="profile-card">
            <div className="img">
                <img src={ceo} alt="ceo image" />
            </div>
            <div className="caption">
                <h3>Themydee</h3>
                <p>Full stack Developer</p>
                <div className="socials">
                    <a href="">
                    <FaFacebookF  className='icon'/>
                    </a>
                </div>
                <div className="socials">
                    <a href="#">
                    <FaInstagram  className="icon "/>
                    </a>
                </div>
                <div className="socials">
                    <a href="#">
                    <FaTwitterSquare  className="icon "/>
                    </a>
                </div>
                <div className="socials">
                    <a href="#">
                    <FaGithub className="icon "/>                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Teams