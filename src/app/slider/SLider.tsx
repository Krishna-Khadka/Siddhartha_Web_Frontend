"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";

import "./Swiper.css";
import Image from "next/image";

import slider1 from "../../../public/about3.jpg";
import slider2 from "../../../public/blog2.jpg";
import slider3 from "../../../public/about1.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500} // Adjusted speed to match the website
        autoplay={{
          delay: 4000, // Delay between transitions
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        loop={true} // Enable infinite loop
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-inner">
            <div className="background-overlay"></div>
            <div className="content text-left">
              <h2 className="text-3xl sm:text-3xl md:text-6xl text-white tracking-[2.4px] mb-6 leading-[75px]  font-[900]">
                Discover, Learn, Grow: School Experience Unleashed
              </h2>
              <p className="text-base font-medium">
                Fermentum montes nisl condimentum litora vel aptent ultricies
                nibh mus lorem. Potenti phasellus nunc at aliquet ornare id
                vehicula.
              </p>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-3  bg-secColor text-white text-lg leading-[1] py-5 px-8 border-none font-semibold capitalize text-center hover:bg-[#C1272D] duration-500 transition-all"
                  >
                    View all programs
                    <FaLongArrowAltRight />
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-3  bg-[#C1272D] text-white text-lg leading-[1] py-5 px-8 font-semibold capitalize text-center border border-transparent hover:border-[#C1272D] hover:bg-transparent duration-500 transition-all"
                  >
                    View reports
                    <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
            <Image src={slider1} alt="Slider image 1" className="slide-image" />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slide-inner">
            <div className="background-overlay"></div>
            <div className="content text-left">
              <h2 className="text-6xl text-white tracking-[2.4px] mb-6 leading-[75px]  font-[900]">
                Discover, Learn, Grow: School Experience Unleashed
              </h2>
              <p className="text-base font-medium">
                Fermentum montes nisl condimentum litora vel aptent ultricies
                nibh mus lorem. Potenti phasellus nunc at aliquet ornare id
                vehicula.
              </p>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-3  bg-secColor text-white text-lg leading-[1] py-5 px-8 border-none font-semibold capitalize text-center hover:bg-[#C1272D] duration-500 transition-all"
                  >
                    View all programs
                    <FaLongArrowAltRight />
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-3  bg-[#C1272D] text-white text-lg leading-[1] py-5 px-8 font-semibold capitalize text-center border border-transparent hover:border-[#C1272D] hover:bg-transparent duration-500 transition-all"
                  >
                    View reports
                    <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
            <Image src={slider2} alt="Slider image 2" className="slide-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-inner">
            <div className="background-overlay"></div>
            <div className="content text-left">
              <h2 className="text-6xl text-white tracking-[2.4px] mb-6 leading-[75px]  font-[900]">
                Discover, Learn, Grow: School Experience Unleashed
              </h2>
              <p className="text-base font-medium">
                Fermentum montes nisl condimentum litora vel aptent ultricies
                nibh mus lorem. Potenti phasellus nunc at aliquet ornare id
                vehicula.
              </p>
              <div className="flex items-center gap-5 mt-6">
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-3  bg-secColor text-white text-lg leading-[1] py-5 px-8 border-none font-semibold capitalize text-center hover:bg-[#C1272D] duration-500 transition-all"
                  >
                    View all programs
                    <FaLongArrowAltRight />
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-3  bg-[#C1272D] text-white text-lg leading-[1] py-5 px-8 font-semibold capitalize text-center border border-transparent hover:border-[#C1272D] hover:bg-transparent duration-500 transition-all"
                  >
                    View reports
                    <FaLongArrowAltRight />
                  </Link>
                </div>
              </div>
            </div>
            <Image src={slider3} alt="Slider image 3" className="slide-image" />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
