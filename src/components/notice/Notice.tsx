import Link from "next/link";
import "./Notice.css";

import { IoIosArrowDroprightCircle } from "react-icons/io";

// import { NOTICE_DATA } from "@/components/notice/index.js";

export default function Notice() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
        {/* first notice div */}
        <div style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}>
          <div className="flex">
            {/* date side */}
            <div>
              <div className="flex flex-col">
                {/* date div */}
                <div className="bg-[#FF3115] text-center text-white py-2 px-3">
                  <h6 className="text-2xl font-bold tracking-wider">06</h6>
                  <h6 className="text-2xl font-bold tracking-wider">AUG</h6>
                </div>
                {/* detail link div */}
                <div className="bg-white text-secColor py-2 px-3 hover:bg-secColor hover:text-white transition-all duration-500">
                  <Link
                    href="/"
                    className="flex flex-col items-center justify-center"
                  >
                    <IoIosArrowDroprightCircle className="text-2xl" />
                    <span className="text-xl font-semibold tracking-wider">
                      Detail
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* content side */}
            <div className="py-3 px-4">
              <Link href="/">
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-secColor tracking-wider hover:text-[#FF3115] duration-500 transition-all">
                  Board Exam notice for XI Science, Management, Humanities and
                  Law.
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}>
          <div className="flex">
            {/* date side */}
            <div>
              <div className="flex flex-col">
                {/* date div */}
                <div className="bg-[#FF3115] text-center text-white py-2 px-3">
                  <h6 className="text-2xl font-bold tracking-wider">25</h6>
                  <h6 className="text-2xl font-bold tracking-wider">SEP</h6>
                </div>
                {/* detail link div */}
                <div className="bg-white text-secColor py-2 px-3 hover:bg-secColor hover:text-white transition-all duration-500">
                  <Link
                    href="/"
                    className="flex flex-col items-center justify-center"
                  >
                    <IoIosArrowDroprightCircle className="text-2xl" />
                    <span className="text-xl font-semibold tracking-wider">
                      Detail
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* content side */}
            <div className="py-3 px-4">
              <Link href="/">
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-secColor tracking-wider hover:text-[#FF3115] duration-500 transition-all">
                  Anuual Parents Day 2081.
                </h2>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}>
          <div className="flex">
            {/* date side */}
            <div>
              <div className="flex flex-col">
                {/* date div */}
                <div className="bg-[#FF3115] text-center text-white py-2 px-3">
                  <h6 className="text-2xl font-bold tracking-wider">15</h6>
                  <h6 className="text-2xl font-bold tracking-wider">OCT</h6>
                </div>
                {/* detail link div */}
                <div className="bg-white text-secColor py-2 px-3 hover:bg-secColor hover:text-white transition-all duration-500">
                  <Link
                    href="/"
                    className="flex flex-col items-center justify-center"
                  >
                    <IoIosArrowDroprightCircle className="text-2xl" />
                    <span className="text-xl font-semibold tracking-wider">
                      Detail
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* content side */}
            <div className="py-3 px-4">
              <Link href="/">
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold text-secColor tracking-wider hover:text-[#FF3115] duration-500 transition-all">
                  Second Terminal Examination 2081.
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* {NOTICE_DATA.map((notice, index) => (
        <div key={index} className="noticeBox">
          <Link href="#">
            <div className="flex gap-6 shadow-lg pb-3 pt-4 px-3 rounded-lg">
              <div className="flex flex-col items-center bg-secColor text-white px-6 py-2 min-h-20 h-full">
                <div>
                  <h2 className="font-bold text-lg">02</h2>
                </div>
                <div>
                  <h5 className="font-bold text-lg capitalize">sep</h5>
                </div>
              </div>
              <div className="pb-8">
                <h2 className="noticeTitle relative text-xl font-bold">
                  {notice.title}
                </h2>
                <p className="text-sm font-semibold pt-4 leading-6">
                  {notice.description}
                </p>
              </div>
            </div>
        
        </Link>
        </div>
      ))} */}
    </>
  );
}
