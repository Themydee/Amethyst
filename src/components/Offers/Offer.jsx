import React from 'react'
import './offer.scss'
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import img1 from '../../assets/web.jpg'
import img2 from '../../assets/app.jpg'
import img3 from '../../assets/digital.jpg'
import img4 from '../../assets/engi.jpg'
import img5 from '../../assets/graphics.jpg'
import img6 from '../../assets/om.jpg'

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aspernatur repellendus inventore fuga itaque non, ipsa ut sed quia quisquam?
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

          <div className="services">
            <div className="servImage">
              <img src={img2} alt="Image Title" />
                {/* <div className="addInfo">
                  <BsArrowRightShort  className='icon'/>
                </div> */}
            </div>

            <div className="servFooter">
              <div className="number">
                02
              </div>

              <div className="serText">
              <h3>App Development</h3>
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

          <div className="services">
            <div className="servImage">
              <img src={img3} alt="Image Title" />
                {/* <div className="addInfo">
                  <BsArrowRightShort  className='icon'/>
                </div> */}
            </div>

            <div className="servFooter">
              <div className="number">
                03
              </div>

              <div className="serText">
              <h3>Digital Products</h3>
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

          <div className="services">
            <div className="servImage">
              <img src={img4} alt="Image Title" />
                {/* <div className="addInfo">
                  <BsArrowRightShort  className='icon'/>
                </div> */}
            </div>

            <div className="servFooter">
              <div className="number">
                04
              </div>

              <div className="serText">
              <h3>Engineering Design</h3>
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

          <div className="services">
            <div className="servImage">
              <img src={img5} alt="Image Title" />
                {/* <div className="addInfo">
                  <BsArrowRightShort  className='icon'/>
                </div> */}
            </div>

            <div className="servFooter">
              <div className="number">
                05
              </div>

              <div className="serText">
              <h3>Graphics Design</h3>
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

          <div className="services">
            <div className="servImage">
              <img src={img6} alt="Image Title" />
                {/* <div className="addInfo">
                  <BsArrowRightShort  className='icon'/>
                </div> */}
            </div>

            <div className="servFooter">
              <div className="number">
                06
              </div>

              <div className="serText">
              <h3>Digital Marketing</h3>
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