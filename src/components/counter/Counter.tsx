"use client";

import Image from "next/image";
import counterBannerImg from "../../../public/blog2.jpg";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export default function Counter() {
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".counter-section") as HTMLElement;
      if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
        setStartCounter(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="counterImg counter-section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3">
            <div data-aos="fade-right">
              <div className="mb-2 sm:mb-2 md:mb-6">
                <h2 className="uppercase text-white font-bold tracking-wide text-lg sm:text-lg md:text-3xl">
                  achievements
                </h2>
              </div>
              <div className="mb-6 sm:mb-6 md:mb-9">
                <p className="text-[#FFFFFF99] text-base sm:text-base md:text-lg">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart like mine.
                </p>
              </div>
              <div
                style={{ boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
                className="hidden sm:hidden md:block"
              >
                <Image
                  src={counterBannerImg}
                  alt="counter banner image"
                  className="max-w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="my-auto">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-white w-full sm:w-full md:w-[90%] mx-auto text-center p-[30px] border border-solid border-[rgba(255, 255, 255, 0.2)] transition-all duration-300 hover:border-[#ff3115]"
                >
                  <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold mb-2">
                    {startCounter && <CountUp end={1500} duration={4} />}
                  </h2>
                  <h4 className="uppercase text-xl font-medium mb-0">
                    Students
                  </h4>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-white w-full sm:w-full md:w-[90%] mx-auto text-center p-[30px] border border-solid border-[rgba(255, 255, 255, 0.2)] transition-all duration-300 hover:border-[#ff3115]"
                >
                  <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold mb-2">
                    {startCounter && <CountUp end={50} duration={4} />}
                  </h2>
                  <h4 className="uppercase text-xl font-medium mb-0">
                    Teachers
                  </h4>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-white w-full sm:w-full md:w-[90%] mx-auto text-center p-[30px] border border-solid border-[rgba(255, 255, 255, 0.2)] transition-all duration-300 hover:border-[#ff3115] mt-0 sm:mt-0 md:mt-6"
                >
                  <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold mb-2 ">
                    {startCounter && <CountUp end={40} duration={4} />}
                  </h2>
                  <h4 className="uppercase text-xl font-medium mb-0">
                    Courses
                  </h4>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="text-white w-full sm:w-full md:w-[90%] mx-auto text-center p-[30px] border border-solid border-[rgba(255, 255, 255, 0.2)] transition-all duration-300 hover:border-[#ff3115] mt-0 sm:mt-0 md:mt-6"
                >
                  <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold mb-2 ">
                    {startCounter && <CountUp end={25} duration={4} />}
                  </h2>
                  <h4 className="uppercase text-xl font-medium mb-0">
                    ECA&apos;s
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
