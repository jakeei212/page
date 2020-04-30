import React from "react";
import Slider from "react-slick";
import slide_one from '../../../resources/images/1.jpg'
import slide_two from '../../../resources/images/2.jpg'
import slide_three from '../../../resources/images/4.jpg'
import slide_5 from '../../../resources/images/13.jpg'
import slide_6 from '../../../resources/images/7.jpg'
import slide_7 from '../../../resources/images/11.jpg'
import slide_8 from '../../../resources/images/15.jpg'
import slide_9 from '../../../resources/images/5.jpg'
import slide_10 from '../../../resources/images/10.jpg'
import slide_11 from '../../../resources/images/12.jpg'

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: "hidden",
        width: '100%',
      }}
    >
      <Slider {...settings}>
        <div><div className="carrousel_image" style={{background:`url(${slide_one})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_two})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_three})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_5})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_6})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_7})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_8})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_9})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_10})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
        <div><div className="carrousel_image" style={{background:`url(${slide_11})`,height:`${window.innerHeight}px`,backgroundPosition:"center center"}}></div></div>
      </Slider>
    </div>
  );
};

export default Carrousel;
