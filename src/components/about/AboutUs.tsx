import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import "./about.css";

import aboutBanner from "../../../public/blog3.jpg";
import about1 from "../../../public/about1.jpg";
import about2 from "../../../public/blog2.jpg";
import about3 from "../../../public/about3.jpg";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <div className="container">
        <div style={{ height: "70dvh;" }} className="my-20">
          <Image
            src={aboutBanner}
            alt="about banner image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <div style={{ margin: "auto 0" }}>
              <h1 className="text-4xl font-bold tracking-wider">
                Siddhartha <br />
                Secondary <br />
                School
              </h1>
            </div>
            <div>
              <p className="text-[#525271] text-base leading-8">
                Falar University has the biggest campus in Canada, as well as
                satellite facilities in several Manhattan neighborhoods. Come
                visit our campus. Attend one of our public programs. Take a tour
                of our university. Stop by one of the area’s local restaurants
                or cafés.
              </p>
              <p className="text-[#525271] text-base leading-8">
                Welcome to Falar, where knowledge meets innovation and where
                every student is journey to success begins.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="w-full md:w-1/4">
              <Image
                src={about1}
                className="w-full h-full object-cover"
                alt="about image first"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={about2}
                className="w-full h-full object-cover"
                alt="about image first"
              />
            </div>
            <div className="w-full md:w-1/4">
              <Image
                src={about3}
                className="w-full h-full object-cover"
                alt="about image first"
              />
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div style={{ maxWidth: "1170px" }}>
            <h1 className="text-black text-4xl font-[900] tracking-[1.28px] mb-[70px]">
              Our campus build lifelong friendships with students who share your
              interests, passions, and perspectives{" "}
            </h1>
          </div>
          <div>
            <div className="aboutUsInfo grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <p className="text-[#525271] text-base leading-8">
                  Falar University has the biggest campus in Canada, as well as
                  satellite facilities in several Manhattan neighborhoods. Come
                  visit our campus. Attend one of our public programs. Take a
                  tour of our university. Stop by one of the area’s local
                  restaurants or cafés.
                </p>
                <p className="text-[#525271] text-base leading-8">
                  Welcome to Falar, where knowledge meets innovation and where
                  every student is journey to success begins.
                </p>
              </div>
              <div style={{ maxWidth: "500px", marginLeft: "auto" }}>
                <div className="grid grid-cols-2 gap-16">
                  <div>
                    <ul className="list-none">
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Sports Club
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Music Club
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Drama Club
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Arts Club
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Football
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Volleyball
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Taekwondo
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                      <li className="flex gap-3 items-center mb-[25px] pl-[50px]">
                        <Link
                          href="#"
                          className= "text-xl font-bold text-[#353688]"
                        >
                          Athletics
                        </Link>
                        <FaArrowRightLong className="text-[#353688]" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <div style={{ margin: "auto 0" }}>
              <h1 className="text-4xl font-bold tracking-wider">
                Siddhartha <br />
                Working <br />
                Hours
              </h1>
            </div>
            <div>
              <p className="text-[#525271] text-base leading-8">
                Access to academic buildings is by reservation only. The four
                buildings below will be open Monday - Friday and closed on the
                weekends from September 15th through December 25th.
              </p>
              <ul className="mt-5">
                <li className="text-lg text-[#353688] font-semibold mb-2">
                  Sunday to Friday
                  <span className="px-2">-</span>
                  9:00 am to 04:00 pm
                </li>
                <li className="text-lg text-[#C1272D] font-semibold mb-0">
                  Saturday
                  <span className="px-2">-</span>
                  closed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
