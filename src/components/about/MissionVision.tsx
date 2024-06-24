"use client";

import Image from "next/image";
import "./about.css";

// importing icons
import target from "../../../public/target.png";
import vision from "../../../public/vision.png";
import quality from "../../../public/quality.png";
import check from "../../../public/check.png";

export default function MissionVision() {
  return (
    <>
      <div className="bg-[#F8F8FF]">
        <div className="container mx-auto py-20">
          {/* vision div  */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <div className="py-5 px-12">
                <div className="mvIcon mb-4">
                  <Image
                    src={vision}
                    alt="target icon"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <h1 className="capitalize text-4xl font-semibold text-[#434343] mb-4 font-libre">
                  our vision
                </h1>
                <p className="text-lg text-[#323239] font-medium leading-[2] m-0 font-libre">
                  We envision Samriddhi School as a dynamic and inspiring
                  educational institution that sets an example for the learning
                  community.
                </p>
                <p className="text-lg text-[#323239] font-medium leading-[2] m-0 font-libre">
                  We are committed to providing an outstanding learning
                  environment to our students, to enable them to excel and
                  thrive in a complex, constantly changing world, getting more
                  interconnected by the day .
                </p>
              </div>
            </div>
            <div>
              <div className="mvBG mvBG1"></div>
            </div>
          </div>

          {/* mission div */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center py-20">
            <div>
              <div className="mvBG mvBG2"></div>
            </div>
            <div>
              <div className="py-5 px-12">
                <div className="mvIcon mb-4">
                  <Image
                    src={target}
                    alt="target icon"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <h1 className="capitalize text-4xl font-semibold text-[#434343] mb-4 font-libre">
                  our mission
                </h1>
                <p className="text-lg text-[#323239] font-medium leading-[2] m-0 font-libre">
                  The mission of Samriddhi School is to produce lifelong
                  learners with a value system that turns them into good human
                  beings. Honesty, integrity, and sincerity are values that form
                  the strong foundation on which we build an educational
                  process, culminating in academic and personal success of our
                  students.
                </p>
                <p className="text-lg text-[#323239] font-medium leading-[2] m-0 font-libre">
                  To this end, we make use of the best educational practices and
                  a rich curriculum. Added to this, we plan on collaborating
                  with all stakeholders including students, parents, families,
                  business houses, civic organizations, higher education
                  institutions and the community at large.
                </p>
              </div>
            </div>
          </div>

          {/* coreValue div */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <div className="py-5 px-12">
                <div className="mvIcon mb-4">
                  <Image
                    src={quality}
                    alt="target icon"
                    className="w-12 h-12 object-cover"
                  />
                </div>
                <h1 className="capitalize text-4xl font-semibold text-[#434343] mb-4 font-libre">
                  Our Core Values
                </h1>
                <p className="text-lg text-[#323239] font-medium leading-[2] m-0 mb-4 font-libre">
                  Building quality lives and strong culture through…
                </p>
                <ul className="coreValueList">
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Compassion</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Respect</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Service</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Excellence</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Responsibility</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Teamwork</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Integrity</p>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <Image src={check} alt="check" className="w-5" />
                    <p className="text-lg font-light font-libre">Empowerment</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mvBG mvBG3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
