"use client";

import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import review1 from "../../../public/review1.jpg";
import review2 from "../../../public/review2.jpg";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <>
      <div className="container mx-auto relative testimonial-container">
        <div>
          <div className="mb-2 sm:mb-2 md:mb-6">
            <h2 className="uppercase text-black font-bold tracking-wide text-lg sm:text-lg md:text-3xl">
              testimonial
            </h2>
          </div>
          <div className="mb-6 sm:mb-6 md:mb-9">
            <p className="text-[#505050] text-base sm:text-base md:text-lg">
              Fusce sem dolor, interdum in efficitur at, faucibus nec lorem. Sed
              nec molestie justo.
            </p>
          </div>
        </div>

        {/* testimonial slider section */}
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
        >
          <SwiperSlide>
            <div className="slide-inner">
              <div className="review-item relative overflow-visible">
                <div className="review-img">
                  <Image
                    src={review1}
                    alt="review person image"
                    className="block w-[100px] h-[100px] rounded-[50%]"
                  />
                </div>
                <div className="review-desc">
                  <FaQuoteLeft className="inline-block mb-2 text-[#FF3115] text-[26px]" />
                  <h4 className="text-xl mb-4 font-bold text-black">
                    John Doe
                  </h4>
                  <p className="text-base mb-2 font-normal text-[#505050]">
                    Etiam non elit nec augue tempor gravida et sed velit.
                    Aliquam tempus eget lorem ut malesuada. Phasellus dictum est
                    sed libero posuere dignissim.
                  </p>
                  <FaQuoteRight className="ml-auto text-[#FF3115] text-[26px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner">
              <div className="review-item relative overflow-visible">
                <div className="review-img">
                  <Image
                    src={review2}
                    alt="review person image"
                    className="block w-[100px] h-[100px] rounded-[50%]"
                  />
                </div>
                <div className="review-desc">
                  <FaQuoteLeft className="inline-block mb-2 text-[#FF3115] text-[26px]" />
                  <h4 className="text-xl mb-4 font-bold text-black">
                    John Doe
                  </h4>
                  <p className="text-base mb-2 font-normal text-[#505050]">
                    Etiam non elit nec augue tempor gravida et sed velit.
                    Aliquam tempus eget lorem ut malesuada. Phasellus dictum est
                    sed libero posuere dignissim.
                  </p>
                  <FaQuoteRight className="ml-auto text-[#FF3115] text-[26px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner">
              <div className="review-item relative overflow-visible">
                <div className="review-img">
                  <Image
                    src={review1}
                    alt="review person image"
                    className="block w-[100px] h-[100px] rounded-[50%]"
                  />
                </div>
                <div className="review-desc">
                  <FaQuoteLeft className="inline-block mb-2 text-[#FF3115] text-[26px]" />
                  <h4 className="text-xl mb-4 font-bold text-black">
                    John Doe
                  </h4>
                  <p className="text-base mb-2 font-normal text-[#505050]">
                    Etiam non elit nec augue tempor gravida et sed velit.
                    Aliquam tempus eget lorem ut malesuada. Phasellus dictum est
                    sed libero posuere dignissim.
                  </p>
                  <FaQuoteRight className="ml-auto text-[#FF3115] text-[26px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-inner">
              <div className="review-item relative overflow-visible">
                <div className="review-img">
                  <Image
                    src={review2}
                    alt="review person image"
                    className="block w-[100px] h-[100px] rounded-[50%]"
                  />
                </div>
                <div className="review-desc">
                  <FaQuoteLeft className="inline-block mb-2 text-[#FF3115] text-[26px]" />
                  <h4 className="text-xl mb-4 font-bold text-black">
                    John Doe
                  </h4>
                  <p className="text-base mb-2 font-normal text-[#505050]">
                    Etiam non elit nec augue tempor gravida et sed velit.
                    Aliquam tempus eget lorem ut malesuada. Phasellus dictum est
                    sed libero posuere dignissim.
                  </p>
                  <FaQuoteRight className="ml-auto text-[#FF3115] text-[26px]" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides as needed */}
        </Swiper>

        {/* Swiper default navigation buttons */}
        {/* <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> */}
      </div>
    </>
  );
}
