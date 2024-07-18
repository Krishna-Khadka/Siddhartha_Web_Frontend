import Image from "next/image";
import pre from "../../../public/slider3.jpg";
import clip from "../../../public/clip.jpg";
import programBG from "../../../public/programBG.jpg";
import "./Program.css";
// icons
import nursery from "../../../public/blocks.png";
import lkg from "../../../public/ABCblocks.png";
import ukg from "../../../public/graduation-hat.png";

import activity1 from "../../../public/activityblocks.png";
import activity2 from "../../../public/book.png";
import activity3 from "../../../public/paint-palette.png";

const Pre = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="text-center pt-12 sm:pt-12 md:pt-20 w-full sm:w-full md:w-[65%] md:mx-auto">
            <h2 className="banner-text text-5xl sm:text-5xl md:text-7xl font-bold">
              Discover, Play & Learn
            </h2>
            <p className="text-base sm:text-base md:text-xl font-medium text-[#2b2b2b] pt-6">
              Our Pre-Primary program engages young children with interactive
              and playful learning experiences, fostering curiosity and
              creativity in a nurturing environment.
            </p>
          </div>

          <div className="py-10 sm:py-10 md:py-16">
            <Image
              src={pre}
              className="max-w-full h-[50dvh] sm:h-[50dvh] md:h-[80dvh] object-cover"
              alt="Pre Primary Level Image"
            />
          </div>

          <div className="py-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#DEF4FD] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={nursery}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  Nursery
                </h5>
                <p className="px-4 text-base text-[#121212] font-medium text-center tracking-wider">
                  Introducing basic concepts through engaging play and sensory
                  activities to stimulate early development.
                </p>
              </div>
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#FCF2DB] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={lkg}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  L.K.G.
                </h5>
                <p className="px-4 text-[#121212] text-base font-medium text-center tracking-wider">
                  Building foundational literacy and numeracy skills with
                  interactive, hands-on learning experiences.
                </p>
              </div>
              <div className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#ECE0FC] hover:translate-y-[-30px] transition-all duration-500">
                <Image
                  src={ukg}
                  alt="nursery icon"
                  className="h-32 w-32 object-cover"
                />
                <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
                  U.K.G.
                </h5>
                <p className="px-4 text-[#121212] text-base font-medium tracking-wider text-center">
                  Preparing for primary school with structured lessons,
                  enhancing literacy and numeracy skills.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="activities relative"
          style={{ backgroundImage: `url(${programBG.src})` }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
              <div className="z-30">
                <h2 className="text-4xl font-white font-semibold tracking-wider bg-transparent text-white">Engaging Activities</h2>
                <p className="text-white font-bold text-lg tracking-wider py-6">Developing creativity, motor skills, and a love for learning through interactive play, storytelling, and crafts.</p>
                <div>
                  <ul>
                    <li className="flex items-center gap-12 bg-white px-8 py-4 rounded-[60px] mt-6">
                      <Image
                        src={activity1}
                        alt="activity icon"
                        className="w-12 h-12 object-cover"
                      />
                      <h6 className="text-[#0B0B0C] text-xl font-semibold">Play-Based Learning</h6>
                    </li>
                    <li className="flex items-center gap-12 bg-white px-8 py-4 rounded-[60px] mt-6">
                      <Image
                        src={activity2}
                        alt="activity icon"
                        className="w-12 h-12 object-cover"
                      />
                      <h6 className="text-[#0B0B0C] text-xl font-semibold">Story Time</h6>
                    </li>
                    <li className="flex items-center gap-12 bg-white px-8 py-4 rounded-[60px] mt-6">
                      <Image
                        src={activity3}
                        alt="activity icon"
                        className="w-12 h-12 object-cover"
                      />
                      <h6 className="text-[#0B0B0C] text-xl font-semibold">Arts and Crafts</h6>
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
    </>
  );
};

export default Pre;
