import React from 'react';
import './HowWedo.css';
import "../About/About.css";
import { FaStarOfLife } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HowWedo = ({ title, description, }) => {
  return (
    <div className='About-container'>
      <div className='About-header-text wedo'>
        <h2>
          How We Do It
        </h2>
        <div>
          <FaStarOfLife className='ico' />
        </div>
      </div>
      <p className="how-we-do-it-description">
        That the purpose of Jesus Christ shall not only be left in the holy book but men shall live out these mysteries and as it happened in Antioch and new rebirth for the name "Christians" would be given.
        <br />
        <strong className='strong' l>We offer various avenues for you to connect with The Moving Bible and be part of the movement.</strong>
      </p>

      <div className='bg-img'>
        <div className="cards">
          <div className='card-top'>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <a href="/" className="card-link">
              Learn More <span className="arrow"> <FaArrowRight /> </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWedo;