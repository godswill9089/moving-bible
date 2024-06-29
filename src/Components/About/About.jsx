import React from 'react'
import "./About.css";
import { FaArrowLeft, FaStarOfLife } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import CardContainer from '../Card/CardContainer';

const About = () => {
  return (
    <div className='About-container'>
      <div className='About-header-text'>
        <h2>
          Learn About who we Are
        </h2>
        <div>
          <FaStarOfLife className='ico' />
        </div>
      </div>
      <div className='about-p'>
        <div>
          <p>
            Welcome to The Moving Bible!
            We are a passionate community dedicated to
            bringing the Gospel of Jesus Christ to life.
            We believe that faith should not just be words,
            but a driving force for positive change in the world.
          </p>
          <p>
            Our vision is ambitious: to inspire and equip 1
            billion souls to live Christ-like lives in the
            next ten years. Imagine a world where the teachings
            of the Bible are reflected in everyday actions,
            transforming communities and individuals.
          </p>
        </div>
        <div className='btn-about'>
          <button><FaArrowLeft /></button>
          <button><FaArrowRight /></button>
        </div>
      </div>
      {/* <CardContainer /> */}
    </div>
  )
}

export default About