import Image from "next/image";
import Link from "next/link";
import React from "react";
import event1 from "../../public/event1.jpg";
import event2 from "../../public/blog2.jpg";
import event3 from "../../public/blog3.jpg";

const EventCard = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full sm:w-full md:w-2/3 ">
            <h4 className="uppercase text-[#535859] text-md font-medium tracking-widest">
              our events
            </h4>
            <h2 className="text-4xl text-secColor tracking-wide pt-2 font-extrabold">
              Upcoming Events
            </h2>
            <p className="text-md font-medium text-[#535859] leading-7 pt-4">
              Since its founding Brivona has been providing its patients with
              the full medical care, encompassing outpatients services, is
              neurology, laboratory, imaging diagnostics and more.
            </p>
          </div>
          <button className="uppercase font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] mt-4 md:mt-0 hover:bg-secColor duration-300 transition-all">
            more events
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-10">
          <div className="card-wrapper">
            <div className="relative">
              <Image
                src={event1}
                className="w-full h-full object-cover"
                alt="event banner image"
              />
              <div className="event-date absolute left-0 top-8 w-[70px] h-[86px] text-center">
                <h3 className="flex flex-col justify-center items-center gap-3 text-[28px] font-bold text-[#fefefe] leading-6 pt-3">
                  <p>20</p>
                  <span className="capitalize">APR</span>
                </h3>
              </div>
            </div>
            <div className="pt-5 pr-7 pl-5 pb-7">
              <h4 className="mb-3 font-extrabold text-secColor text-2xl">
                PHP & JavaScript Training
              </h4>
              <ul className="mb-4">
                <li className="flex gap-3 capitalize text-[#606060] mb-2">
                  <p className="text-base font-bold">Time:</p>
                  <p>9.00 AM - 4.45 PM</p>
                </li>
                <li className="flex gap-3 capitalize text-[#606060] mb-2">
                  <p className="text-base font-bold">Venue:</p>
                  <p>Siddhartha Computer Lab</p>
                </li>
              </ul>
              <div>
                <button className="uppercase font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] mt-4 md:mt-0 hover:bg-secColor duration-300 transition-all">
                  join now
                </button>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="relative">
              <Image
                src={event2}
                className="w-full h-full object-cover"
                alt="event banner image"
              />
              <div className="event-date absolute left-0 top-8 w-[70px] h-[86px] text-center">
                <h3 className="flex flex-col justify-center items-center gap-3 text-[28px] font-bold text-[#fefefe] leading-6 pt-3">
                  <p>20</p>
                  <span className="capitalize">APR</span>
                </h3>
              </div>
            </div>
            <div className="pt-5 pr-7 pl-5 pb-7">
              <h4 className="mb-3 font-extrabold text-secColor text-2xl">
                PHP & JavaScript Training
              </h4>
              <ul className="mb-4">
                <li className="flex gap-3 capitalize text-[#606060] mb-2">
                  <p className="text-base font-bold">Time:</p>
                  <p>9.00 AM - 4.45 PM</p>
                </li>
                <li className="flex gap-3 capitalize text-[#606060] mb-2">
                  <p className="text-base font-bold">Venue:</p>
                  <p>Siddhartha Computer Lab</p>
                </li>
              </ul>
              <div>
                <button className="uppercase font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] mt-4 md:mt-0 hover:bg-secColor duration-300 transition-all">
                  join now
                </button>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="relative">
              <Image
                src={event3}
                className="w-full h-full object-cover"
                alt="event banner image"
              />
              <div className="event-date absolute left-0 top-8 w-[70px] h-[86px] text-center">
                <h3 className="flex flex-col justify-center items-center gap-3 text-[28px] font-bold text-[#fefefe] leading-6 pt-3">
                  <p>20</p>
                  <span className="capitalize">APR</span>
                </h3>
              </div>
            </div>
            <div className="pt-5 pr-7 pl-5 pb-7">
              <h4 className="mb-3 font-extrabold text-secColor text-2xl">
                PHP & JavaScript Training
              </h4>
              <ul className="mb-4">
                <li className="flex gap-3 capitalize text-[#606060] mb-2">
                  <p className="text-base font-bold">Time:</p>
                  <p>9.00 AM - 4.45 PM</p>
                </li>
                <li className="flex gap-3 capitalize text-[#606060] mb-2">
                  <p className="text-base font-bold">Venue:</p>
                  <p>Siddhartha Computer Lab</p>
                </li>
              </ul>
              <div>
                <button className="uppercase font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] mt-4 md:mt-0 hover:bg-secColor duration-300 transition-all">
                  join now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
