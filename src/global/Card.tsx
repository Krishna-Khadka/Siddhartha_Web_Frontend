import { FaCalendar, FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import blog1 from "../../public/blog1.jpg";
import blog2 from "../../public/blog2.jpg";
import blog3 from "../../public/blog3.jpg";
import Link from "next/link";

export default function Card() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full sm:w-full md:w-2/3 ">
            <h4 className="uppercase text-[#535859] text-md font-medium tracking-widest">
              our blogs
            </h4>
            <h2 className="text-4xl text-secColor tracking-wide pt-2 font-extrabold">
              Recent News and Articles
            </h2>
            <p className="text-md font-medium text-[#535859] leading-7 pt-4">
              Since its founding Brivona has been providing its patients with
              the full medical care, encompassing outpatients services, is
              neurology, laboratory, imaging diagnostics and more.
            </p>
          </div>
          <button className="uppercase font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] mt-4 md:mt-0 hover:bg-secColor duration-300 transition-all">
            more articles
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-10">
          <div>
            <div className="imageBanner mb-5">
              <Image
                src={blog1}
                alt="blog image"
                className="w-full h-full object-center"
              />
            </div>
            <div className="">
              <span className="flex items-center gap-3 text-[#6b6b6b] text-[15px] mb-4">
                <FaCalendar className="text-[#92210F]" />
                25 July, 2024
              </span>
              <h3 className="mb-3 text-2xl text-[#252525] font-extrabold">
                How I applying to school
              </h3>
              <p className="mb-3 text-[15px] text-[#6b6b6b] font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                animi dicta ex labore. Ipsum nobis amet nisi voluptate corporis
                consectetur.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 duration-300 transition-all hover:tracking-[1px] hover:text-[#92210f] text-[#252525] pr-5 text-[15px] font-semibold"
              >
                Find out more
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <div className="imageBanner mb-5">
              <Image
                src={blog2}
                alt="blog image"
                className="w-full h-full object-center"
              />
            </div>
            <div className="">
              <span className="flex items-center gap-3 text-[#6b6b6b] text-[15px] mb-4">
                <FaCalendar className="text-[#92210F]" />
                25 July, 2024
              </span>
              <h3 className="mb-3 text-2xl text-[#252525] font-extrabold">
                How I applying to school
              </h3>
              <p className="mb-3 text-[15px] text-[#6b6b6b] font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                animi dicta ex labore. Ipsum nobis amet nisi voluptate corporis
                consectetur.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 duration-300 transition-all hover:tracking-[1px] hover:text-[#92210f] text-[#252525] pr-5 text-[15px] font-semibold"
              >
                Find out more
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <div className="imageBanner mb-5">
              <Image
                src={blog3}
                alt="blog image"
                className="w-full h-full object-center"
              />
            </div>
            <div className="">
              <span className="flex items-center gap-3 text-[#6b6b6b] text-[15px] mb-4">
                <FaCalendar className="text-[#92210F]" />
                25 July, 2024
              </span>
              <h3 className="mb-3 text-2xl text-[#252525] font-extrabold">
                How I applying to school
              </h3>
              <p className="mb-3 text-[15px] text-[#6b6b6b] font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                animi dicta ex labore. Ipsum nobis amet nisi voluptate corporis
                consectetur.
              </p>
              <Link
                href="#"
                className="flex items-center gap-1 duration-300 transition-all hover:tracking-[1px] hover:text-[#92210f] text-[#252525] pr-5 text-[15px] font-semibold"
              >
                Find out more
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
