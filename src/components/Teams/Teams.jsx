import React from 'react'
import './teams.scss'
import ceo from '../../assets/CEO.svg'
import thinker from '../../assets/thinker.svg'
const Teams = () => {
  return (
    <section className='teams section container'>
        <div className="secContainer">
            <h3 className="title">
                Our Team
            </h3>

            <div className="mainContent grid">
                <div className="services">
                    <div className="servImage">
                        <img src={ceo} alt="Image Title" />
                        {/* <div className="addInfo">
                            <BsArrowRightShort  className='icon'/>
                        </div> */}
                    </div>

                    <div className="servFooter">
                        <div className="number">
                         CEO
                        </div>

                        <div className="serText">
                            <h3>Otuene Hephzebah</h3>
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
                        <img src={thinker} alt="Image Title" />
                        {/* <div className="addInfo">
                            <BsArrowRightShort  className='icon'/>
                        </div> */}
                    </div>

                    <div className="servFooter">
                        <div className="number">
                         CEO
                        </div>

                        <div className="serText">
                            <h3>Otuene Hephzebah</h3>
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


export default Teams