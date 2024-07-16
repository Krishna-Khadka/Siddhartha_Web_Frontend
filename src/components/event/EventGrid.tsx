"use client";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import eventBannerImg1 from "../../../public/blog1.jpg";
import eventBannerImg2 from "../../../public/blog2.jpg";
import eventBannerImg3 from "../../../public/blog3.jpg";
import eventBannerImg4 from "../../../public/about1.jpg";
import eventBannerImg5 from "../../../public/event1.jpg";
import eventBannerImg6 from "../../../public/home-about.png";
import Image from "next/image";

export default function EventGrid() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {/* single event card div */}
          <div
            className="bg-[#f9f9f9]"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {/* event banner image div */}
              <div className="w-full sm:w-full md:w-[83%] h-[350px]">
                <Image
                  src={eventBannerImg2}
                  alt="Event Banner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* event info div */}
              <div className="pt-[15px] pr-[20px] pb-[20px] my-auto">
                {/* event meta div */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      30 July 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      12.30AM-05.30PM
                    </span>
                  </div>
                </div>

                {/* event title div */}
                <div className="py-1">
                  <Link href="/">
                    <h3 className="text-[#212121] text-lg font-semibold capitalize w-full sm:w-full md:w-[70%] md:mr-auto">
                      Freshers Day reception ceremony 2017
                    </h3>
                  </Link>
                </div>

                {/* event location div */}
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[15px] text-[#ff3115]" />
                  <span className="text-[15px] text-[#505050]">
                    Siddhartha School Hall
                  </span>
                </div>

                {/* event description */}
                <div className="pt-2">
                  <p className="text-[#505050]">
                    There are many variations of passag of Lorem Ipsum
                    available, but the majority have suffered Lorem Ipsum
                    available.
                  </p>
                </div>

                {/* event join button */}
                <div className="mt-4">
                  <Link
                    href="/"
                    className="capitalize inline-block h-10 leading-10 min-w-32 text-center px-4 bg-[#ff3115] text-white font-semibold"
                  >
                    join event
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f9f9]"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {/* event banner image div */}
              <div className="w-full sm:w-full md:w-[83%] h-[350px]">
                <Image
                  src={eventBannerImg3}
                  alt="Event Banner"
                  className="max-w-full h-full object-cover"
                />
              </div>

              {/* event info div */}
              <div className="pt-[15px] pr-[20px] pb-[20px] my-auto">
                {/* event meta div */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      30 July 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      12.30AM-05.30PM
                    </span>
                  </div>
                </div>

                {/* event title div */}
                <div className="py-1">
                  <Link href="/">
                    <h3 className="text-[#212121] text-lg font-semibold capitalize w-full sm:w-full md:w-[70%] md:mr-auto">
                      Freshers Day reception ceremony 2017
                    </h3>
                  </Link>
                </div>

                {/* event location div */}
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[15px] text-[#ff3115]" />
                  <span className="text-[15px] text-[#505050]">
                    Siddhartha School Hall
                  </span>
                </div>

                {/* event description */}
                <div className="pt-2">
                  <p className="text-[#505050]">
                    There are many variations of passag of Lorem Ipsum
                    available, but the majority have suffered Lorem Ipsum
                    available.
                  </p>
                </div>

                {/* event join button */}
                <div className="mt-4">
                  <Link
                    href="/"
                    className="capitalize inline-block h-10 leading-10 min-w-32 text-center px-4 bg-[#ff3115] text-white font-semibold"
                  >
                    join event
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f9f9]"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {/* event banner image div */}
              <div className="w-full sm:w-full md:w-[83%] h-[350px]">
                <Image
                  src={eventBannerImg1}
                  alt="Event Banner"
                  className="max-w-full h-full object-cover"
                />
              </div>

              {/* event info div */}
              <div className="pt-[15px] pr-[20px] pb-[20px] my-auto">
                {/* event meta div */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      30 July 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      12.30AM-05.30PM
                    </span>
                  </div>
                </div>

                {/* event title div */}
                <div className="py-1">
                  <Link href="/">
                    <h3 className="text-[#212121] text-lg font-semibold capitalize w-full sm:w-full md:w-[70%] md:mr-auto">
                      Freshers Day reception ceremony 2017
                    </h3>
                  </Link>
                </div>

                {/* event location div */}
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[15px] text-[#ff3115]" />
                  <span className="text-[15px] text-[#505050]">
                    Siddhartha School Hall
                  </span>
                </div>

                {/* event description */}
                <div className="pt-2">
                  <p className="text-[#505050]">
                    There are many variations of passag of Lorem Ipsum
                    available, but the majority have suffered Lorem Ipsum
                    available.
                  </p>
                </div>

                {/* event join button */}
                <div className="mt-4">
                  <Link
                    href="/"
                    className="capitalize inline-block h-10 leading-10 min-w-32 text-center px-4 bg-[#ff3115] text-white font-semibold"
                  >
                    join event
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f9f9]"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {/* event banner image div */}
              <div className="w-full sm:w-full md:w-[83%] h-[350px]">
                <Image
                  src={eventBannerImg4}
                  alt="Event Banner"
                  className="max-w-full h-full object-cover"
                />
              </div>

              {/* event info div */}
              <div className="pt-[15px] pr-[20px] pb-[20px] my-auto">
                {/* event meta div */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      30 July 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      12.30AM-05.30PM
                    </span>
                  </div>
                </div>

                {/* event title div */}
                <div className="py-1">
                  <Link href="/">
                    <h3 className="text-[#212121] text-lg font-semibold capitalize w-full sm:w-full md:w-[70%] md:mr-auto">
                      Freshers Day reception ceremony 2017
                    </h3>
                  </Link>
                </div>

                {/* event location div */}
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[15px] text-[#ff3115]" />
                  <span className="text-[15px] text-[#505050]">
                    Siddhartha School Hall
                  </span>
                </div>

                {/* event description */}
                <div className="pt-2">
                  <p className="text-[#505050]">
                    There are many variations of passag of Lorem Ipsum
                    available, but the majority have suffered Lorem Ipsum
                    available.
                  </p>
                </div>

                {/* event join button */}
                <div className="mt-4">
                  <Link
                    href="/"
                    className="capitalize inline-block h-10 leading-10 min-w-32 text-center px-4 bg-[#ff3115] text-white font-semibold"
                  >
                    join event
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f9f9]"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {/* event banner image div */}
              <div className="w-full sm:w-full md:w-[83%] h-[350px]">
                <Image
                  src={eventBannerImg5}
                  alt="Event Banner"
                  className="max-w-full h-full object-cover"
                />
              </div>

              {/* event info div */}
              <div className="pt-[15px] pr-[20px] pb-[20px] my-auto">
                {/* event meta div */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      30 July 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      12.30AM-05.30PM
                    </span>
                  </div>
                </div>

                {/* event title div */}
                <div className="py-1">
                  <Link href="/">
                    <h3 className="text-[#212121] text-lg font-semibold capitalize w-full sm:w-full md:w-[70%] md:mr-auto">
                      Freshers Day reception ceremony 2017
                    </h3>
                  </Link>
                </div>

                {/* event location div */}
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[15px] text-[#ff3115]" />
                  <span className="text-[15px] text-[#505050]">
                    Siddhartha School Hall
                  </span>
                </div>

                {/* event description */}
                <div className="pt-2">
                  <p className="text-[#505050]">
                    There are many variations of passag of Lorem Ipsum
                    available, but the majority have suffered Lorem Ipsum
                    available.
                  </p>
                </div>

                {/* event join button */}
                <div className="mt-4">
                  <Link
                    href="/"
                    className="capitalize inline-block h-10 leading-10 min-w-32 text-center px-4 bg-[#ff3115] text-white font-semibold"
                  >
                    join event
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-[#f9f9f9]"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
              {/* event banner image div */}
              <div className="w-full sm:w-full md:w-[83%] h-[350px]">
                <Image
                  src={eventBannerImg6}
                  alt="Event Banner"
                  className="max-w-full h-full object-cover"
                />
              </div>

              {/* event info div */}
              <div className="pt-[15px] pr-[20px] pb-[20px] my-auto">
                {/* event meta div */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      30 July 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-[15px] text-[#ff3115]" />
                    <span className="text-[15px] text-[#505050]">
                      12.30AM-05.30PM
                    </span>
                  </div>
                </div>

                {/* event title div */}
                <div className="py-1">
                  <Link href="/">
                    <h3 className="text-[#212121] text-lg font-semibold capitalize w-full sm:w-full md:w-[70%] md:mr-auto">
                      Freshers Day reception ceremony 2017
                    </h3>
                  </Link>
                </div>

                {/* event location div */}
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[15px] text-[#ff3115]" />
                  <span className="text-[15px] text-[#505050]">
                    Siddhartha School Hall
                  </span>
                </div>

                {/* event description */}
                <div className="pt-2">
                  <p className="text-[#505050]">
                    There are many variations of passag of Lorem Ipsum
                    available, but the majority have suffered Lorem Ipsum
                    available.
                  </p>
                </div>

                {/* event join button */}
                <div className="mt-4">
                  <Link
                    href="/"
                    className="capitalize inline-block h-10 leading-10 min-w-32 text-center px-4 bg-[#ff3115] text-white font-semibold"
                  >
                    join event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
