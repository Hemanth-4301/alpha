import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import h1 from "../assets/highlights/h1.jpg";
import h2 from "../assets/highlights/h2.jpg";
import h3 from "../assets/highlights/h3.jpg";
import { motion } from "framer-motion";

const Highlights = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const images = [
    {
      src: h1,
      alt: "Image 1",
    },
    {
      src: h2,
      alt: "Image 2",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="pb-20 md:pb-28">
      <div className="carousel-container">
        <h2 className="text-4xl font-bold text-slate-100 mb-10 text-center">
          Highlights
        </h2>
        <Slider ref={setSliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <motion.img
                initial={{ y: -10 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6 }}
                src={image.src}
                alt={image.alt}
                className="carousel-image border-1 border-slate-500"
              />
            </div>
          ))}
        </Slider>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => sliderRef?.slickGoTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
