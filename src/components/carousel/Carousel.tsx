"use client";

import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideCount = slidesRef.current?.children.length || 0;
  const timeAutoNext = 7000;

  useEffect(() => {
    // Set the slide width based on the container's width
    if (slidesRef.current) {
      setSlideWidth(slidesRef.current.children[0]?.clientWidth || 0);
    }

    // Update slide width on window resize
    const handleResize = () => {
      setSlideWidth(slidesRef.current?.children[0]?.clientWidth || 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showNextSlide = () => {
    if (slidesRef.current) {
      const newIndex = (currentIndex + 1) % slideCount;
      setCurrentIndex(newIndex);
      slidesRef.current.style.transform = `translateX(-${slideWidth * newIndex}px)`;
    }
  };

  const showPrevSlide = () => {
    if (slidesRef.current) {
      const newIndex = (currentIndex - 1 + slideCount) % slideCount;
      setCurrentIndex(newIndex);
      slidesRef.current.style.transform = `translateX(-${slideWidth * newIndex}px)`;
    }
  };

  useEffect(() => {
    const autoSlide = setInterval(showNextSlide, timeAutoNext);

    return () => {
      clearInterval(autoSlide);
    };
  }, [currentIndex, slideWidth]);

  return (
    <div className="relative w-screen h-[80dvh] overflow-hidden">
      <div className="absolute inset-0">
        <div
          ref={slidesRef}
          className="flex transition-transform duration-500"
          style={{ width: `${slideWidth * slideCount}px` }}
        >
          {/* Carousel items */}
          <div className="w-screen h-screen flex-shrink-0 bg-cover bg-[url('/slider1.jpg')]"></div>
          <div className="w-screen h-screen flex-shrink-0 bg-cover bg-[url('/slider2.jpg')]"></div>
          <div className="w-screen h-screen flex-shrink-0 bg-cover bg-[url('/slider3.jpg')]"></div>
          {/* Add more slides as needed */}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button
          onClick={showPrevSlide}
          className="w-12 h-12 bg-green-400 text-white rounded-full hover:bg-white hover:text-black"
        >
          Prev
        </button>
        <button
          onClick={showNextSlide}
          className="w-12 h-12 bg-green-400 text-white rounded-full hover:bg-white hover:text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
