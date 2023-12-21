import React, {useState}  from 'react'
import "./header.scss"
import { FaStrava } from "react-icons/fa";
import { CiGrid42 } from "react-icons/ci";
import { IoCloseCircleSharp } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState('navBar');
  const showNav = () => {
      setActive('navBar activeNavBar')
  }

  const removeNav = () => {
      setActive('navBar')
  }

  const[transparent, setTransparent] = useState('header');
  const addBg =() =>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    } else{
      setTransparent('header')
    }
  }

  window.addEventListener('scroll', addBg)
  return (
    <section className='headerSection'>
      <div className={transparent}>

        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><FaStrava className="icon"/>
              GemAmethyst
            </h1>
          </a>
        </div>

        <div className={active}>
            <ul className="navLists flex">

              <li className="navItem">
                <a href="#" className="navLink">Home</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">About</a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">Offers</a>
              </li>
              
              <li className="navItem">
                <a href="#" className="navLink">Standards</a>
              </li>
              
              <li className="navItem">
                <a href="#" className="navLink">Team</a>
              </li>

              <div className="headerBtns flex">
                <button className='btn loginBtn'>
                  <a href="#">Join Us</a>
                </button>
              </div>

              <div className="headerBtns flex">
                <button className='btn'>
                  <a href="https://amethshop.brimble.app/" target='_blank'>Our Shop</a>
                </button>
              </div>
            </ul>
            
            <div onClick={removeNav} className="closeNavBar">
                 <IoCloseCircleSharp className='icon' />
            </div>
        </div>

        <div onClick={showNav} className="toggleNavBar">
          <CiGrid42 className='icon'/>
        </div>
      </div>
    </section>
  )
}

export default Header