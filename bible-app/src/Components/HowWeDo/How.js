import React from 'react';
import HowWedo from './HowWedo';
import "./How.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const blogs = [
  {
    title: 'Faith In Action',
    description: 'We Believe In Putting Our Beliefs Into Practice, Serving Others, And Spreading The Message Of Love And Hope.',
  },
  {
    title: 'Spreading',
    description: 'Sharing The Good News Of Jesus Christ With Every Corner Of The Earth Is At The Heart Of Our Mission.',
  },
  {
    title: 'Christ',
    description: 'We Strive To Embody The Teachings Of Jesus Christ In Our Thoughts, Words, And Deeds.',
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const How = () => {
  return (
    <div className="items-container">
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <HowWedo key={index} title={blog.title} description={blog.description} />
        ))}
      </Slider>
    </div>
  )
}

export default How