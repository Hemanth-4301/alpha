import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import h1 from "../assets/highlights/h1.jpg";
import h2 from "../assets/highlights/h2.jpg";

const Highlights = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    { src: h1, alt: "Image 1" },
    { src: h2, alt: "Image 2" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  return (
    <div className="pb-16 md:pb-24">
      <div className="carousel-container">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Highlights
        </h2>

        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <motion.img
                  initial={{ opacity: 0.8, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image border border-slate-600"
                />
              </div>
            ))}
          </Slider>
        </div>

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
