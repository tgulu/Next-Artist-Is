import React from "react";
import { hero1 } from "../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Hero = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute md:top-[50%] top-[60%] md:right-[100%] right-[90%] text-black cursor-pointer"
      >
        <MdKeyboardArrowLeft size={52} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute md:top-[50%] top-[60%] md:left-[100%] left-[90%] z-10 text-black cursor-pointer"
      >
        <MdKeyboardArrowRight size={52} />
      </div>
    );
  }

  return (
    <>
      <section
        className="hero  relative bottom-10 flex flex-col  items-center justify-center"
        style={{ height: "calc(100vh - var(--header-height))" }}
      >
        {/* Title */}
        <div className="w-full text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600">
            Posters of Events
          </h2>
        </div>

        {/* Posters */}
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-[90%] h-[90%] md:w-[40%] md:h-[75%] lg:w-[30%] lg:h-[80%] ">
            <Slider {...setting}>
              {hero1.map((item, index) => (
                <div className="box relative h-full w-full" key={index}>
                  <img
                    src={item.cover}
                    alt="cover"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
