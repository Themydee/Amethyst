import React from 'react'
import './teams.scss'
import ceo from '../../assets/CEO.svg'
import thinker from '../../assets/thinker.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";  
import { FaInstagram } from "react-icons/fa";
const Teams = () => {
  return (
    <section className='teams section container'>
        <div className="secContainer">
          <h3 className="title">
            Our Team
          </h3>
          <hr />

          <div className="wrapper">
              <div className="members">
                <div className="team-mem">
                  <img src={ceo} alt="" />

                  <h4>Otuene Hephzebah</h4>
                  <p>CEO</p>

                  <div className="socials flex">
                    <FaLinkedin className="icon "/>
                    <FaTwitterSquare  className="icon "/>
                    <FaGithub className="icon "/>
                    <FaInstagram  className="icon "/>
                  </div>
                </div>

                <div className="team-mem">
                  <img src={ceo} alt="" />

                  <h4>Otuene Hephzebah</h4>
                  <p>CEO</p>

                  <div className="socials flex">
                    <FaLinkedin className="icon "/>
                    <FaTwitterSquare  className="icon "/>
                    <FaGithub className="icon "/>
                    <FaInstagram  className="icon "/>
                  </div>
                </div>

                <div className="team-mem">
                  <img src={ceo} alt="" />

                  <h4>Otuene Hephzebah</h4>
                  <p>CEO</p>

                  <div className="socials flex">
                    <FaLinkedin className="icon "/>
                    <FaTwitterSquare  className="icon "/>
                    <FaGithub className="icon "/>
                    <FaInstagram  className="icon "/>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}


export default Teams