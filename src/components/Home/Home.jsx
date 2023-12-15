import React from 'react'
import './home.scss'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Get accustomed to being served right
          </h1>
          <p className="subtitle">Here at Gemamethyst we take the priority of our customers serious and give them top notch services </p>

          <button className="btn">
            <a href="#">Find out more</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="serviceDiv">
            <label htmlFor="service">Service Needed</label>
            <select name="" id="">
              <option value="SELECT">Select A category</option>
              <option value="WEB">WEB DEVELOPMENT</option>
              <option value="DIGITAL">DIGITAL PRODUCTS</option>
              <option value="WEB">ENGINEERING DESIGN</option>
              <option value="WEB">GRAPHICS DESIGN</option>
              <option value="WEB">DIGITAL MARKETING</option>
              <option value="WEB">APPLICATION DEVELOPMENT</option>
            </select>
          </div>

          <div className="locationDiv">
            <label htmlFor="service">Location</label>
            <select name="" id="">
              <option value="SELECT">Select One</option>
              <option value="Online">ONLINE</option>
              <option value="Onsite">ONSITE </option>
              <option value="Hybrid">HYBRID</option>
            </select>
          </div>

          <div className="priceDiv">
            <label htmlFor="service">Price</label>
            <select name="" id="">
              <option value="SELECT">Choose a price plan(Naira)</option>
              <option value="simple">Plan A (0-100k)</option>
              <option value="WEB">Plan B (100-300k) </option>
              <option value="WEB">Plan C (300K+)</option>
            </select>
          </div>

          <button className='btn'>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Home