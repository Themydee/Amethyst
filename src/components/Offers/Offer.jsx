import React from 'react'
import './offer.scss'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import img1 from '../../assets/mb.jpg'

// const Data = [
//   {
//     id: 1,
//     imgSrc: img1,
//     servName: 'Web Development',
//     servSubtitle: 'Lorem Lorem Lorem',
//     recommendation: 'Online '
//   }
// ]

const Offer = () => {
  return (
    <section className='ofeer section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Our Services
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis, reiciendis adipisci tempore officiis error saepe dignissimos vitae corporis ratione?
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>
        </div>

        <div className="mainContent grid">
        <div className="services">
                <div className="servImage">
                  <img src={img1} alt="Image Title" />
                    {/* <div className="addInfo">
                      <BsArrowRightShort  className='icon'/>
                    </div> */}
                </div>
    
                <div className="servFooter">
                  <div className="number">
                    01
                  </div>
    
                  <div className="serText">
                  <h3>Web Development</h3>
                     <p>Lorem Lorem Lorem</p>
                    {/* <span className="flex">
                      <span className="dot">
                        <BsDot  className='icon'/>
                        Dot
                      </span>
                    </span> */}
                  </div>
                </div>
              </div>
        </div>
      </div>

    </section>
  )
}

export default Offer