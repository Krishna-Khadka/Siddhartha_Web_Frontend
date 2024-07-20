import Image from "next/image";
import "./Program.css";

import primary from "../../../public/blog3.jpg";
import programBG from "../../../public/programBG.jpg";
import clip from "../../../public/clip.jpg";
import activity1 from "../../../public/soccer.png";
import activity2 from "../../../public/paint-palette.png";
import activity3 from "../../../public/puzzlepiece.png";

import cir1 from "../../../public/literature.png";
import cir2 from "../../../public/calculator.png";
import cir3 from "../../../public/innovation.png";
import cir4 from "../../../public/earth.png";
import ProgramTestimonial from "./ProgramTestimonial";

import ImageGallery from "@/global/ImageGallery";

const images = [
  {
    src: "/slider3.jpg",
    alt: "Image 1"
  },
  {
    src: "/blog2.jpg",
    alt: "Image 2"
  },
  {
    src: "/slider1.jpg",
    alt: "Image 3"
  },
  {
    src: "/blog3.jpg",
    alt: "Image 4"
  },
  {
    src: "/slider3.jpg",
    alt: "Image 5"
  },
  {
    src: "/slider2.jpg",
    alt: "Image 6"
  },
];

export default function Primary() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="text-center pt-12 sm:pt-12 md:pt-20 w-full sm:w-full md:w-[65%] md:mx-auto">
            <h2 className="banner-text tracking-wider text-5xl sm:text-5xl md:text-7xl font-bold">
              Welcome to Our <br />{" "}
              <span className="text-[#FF3115]">Primary School</span>
            </h2>
            <p className="text-base sm:text-base md:text-xl font-medium text-[#2b2b2b] pt-6">
              Our Primary School offers a nurturing environment where young
              learners thrive. We emphasize holistic development, fostering
              curiosity, creativity, and critical thinking.
            </p>
          </div>

          <div className="py-10 sm:py-10 md:py-16">
            <Image
              src={primary}
              className="max-w-full h-[50dvh] sm:h-[50dvh] md:h-[80dvh] object-cover"
              alt="Pre Primary Level Image"
            />
          </div>

          <div className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#DEF4FD] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={cir1}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  Literacy
                </h5>
                <p className="px-4 text-base text-[#121212] font-medium text-center tracking-wider">
                  Developing reading, writing, and comprehension skills.
                </p>
              </div>
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#FCF2DB] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={cir2}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  Numeracy
                </h5>
                <p className="px-4 text-[#121212] text-base font-medium text-center tracking-wider">
                  Building strong mathematical foundations.
                </p>
              </div>
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#ECE0FC] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={cir3}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  Science
                </h5>
                <p className="px-4 text-[#121212] text-base font-medium tracking-wider text-center">
                  Exploring the wonders of science through experiments.
                </p>
              </div>
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#DEF4FD] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={cir4}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  Social Studies
                </h5>
                <p className="px-4 text-[#121212] text-base font-medium tracking-wider text-center">
                  Understanding our world and its history.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* engaging activities div */}
        <div className="mt-14">
          <div
            className="activities relative"
            style={{ backgroundImage: `url(${programBG.src})` }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
                <div className="z-30">
                  <h2 className="text-4xl font-white font-semibold tracking-wider bg-transparent text-white">
                    Beyond the Classroom
                  </h2>
                  <p className="text-white font-bold text-lg tracking-wider py-6">
                    We offer a variety of extracurricular activities to enhance
                    learning and personal growth.
                  </p>
                  <div>
                    <ul>
                      <li className="flex items-center gap-12 bg-white px-8 py-4 rounded-[60px] mt-6">
                        <Image
                          src={activity1}
                          alt="activity icon"
                          className="w-12 h-12 object-cover"
                        />
                        <h6 className="text-[#0B0B0C] text-xl font-semibold">
                          Encouraging physical fitness and teamwork
                        </h6>
                      </li>
                      <li className="flex items-center gap-12 bg-white px-8 py-4 rounded-[60px] mt-6">
                        <Image
                          src={activity2}
                          alt="activity icon"
                          className="w-12 h-12 object-cover"
                        />
                        <h6 className="text-[#0B0B0C] text-xl font-semibold">
                          Fostering creativity through art and music.
                        </h6>
                      </li>
                      <li className="flex items-center gap-12 bg-white px-8 py-4 rounded-[60px] mt-6">
                        <Image
                          src={activity3}
                          alt="activity icon"
                          className="w-12 h-12 object-cover"
                        />
                        <h6 className="text-[#0B0B0C] text-xl font-semibold">
                          Exploring interests in various academic clubs.
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="activity-img-wrapper h-full sm:h-full md:h-[80dvh]">
                  <div className="activity-img">
                    <Image
                      src={clip}
                      alt="Clipped Image"
                      className="max-w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20">
          <ProgramTestimonial />
        </div>

        <div className="pt-12">
          <ImageGallery images={images} />
        </div>
      </div>
    </>
  );
}
