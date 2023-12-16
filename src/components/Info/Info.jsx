import React from 'react'
import './info.scss'
import img1 from '../../assets/staff.jpg'
import img2 from '../../assets/success.jpg'
import img3 from '../../assets/happy.jpg'
import img4 from '../../assets/years.jpg'

const Info = () => {
  return (
    <section className='about section' >
      <div className="secContainer">
        <h3 className="title">
          Why Amethyst?
        </h3>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img4} alt="Image Name" />
            <h3>3Years In Business</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus temporibus necessitatibus molestias dolore nesciunt tempora alias eligendi maiores excepturi?
            </p>
            
          </div>
          <div className="singleItem">
            <img src={img3}alt="Image Name" />
            <h3>50+ Happy Customers</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus temporibus necessitatibus molestias dolore nesciunt tempora alias eligendi maiores excepturi?
            </p>

          </div>
          <div className="singleItem">
            <img src={img2} alt="Image Name" />
            <h3>100% Success Rate</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus temporibus necessitatibus molestias dolore nesciunt tempora alias eligendi maiores excepturi?
            </p>

          </div>
          <div className="singleItem">
            <img src={img1} alt="Image Name" />
            <h3>Over qualified Staffs</h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod accusamus temporibus necessitatibus molestias dolore nesciunt tempora alias eligendi maiores excepturi?
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Info