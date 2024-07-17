import { SCHOOL_HIGHLIGHTS } from "@/constants/index.js";
import './SchoolHighlights.css'

export default function SchoolHighlights() {
  return (
    <>
      <div className="container mx-auto pb-10">
        <div className="relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 z-40 bg-white shadow-xl">
          {SCHOOL_HIGHLIGHTS.map((highlight, index) => (
            <div
            data-aos="fade-up" data-aos-duration="1000"
              key={index}
              className="highlight-box flex flex-col justify-center items-center py-10"
              style={{ borderRight: "1px solid #f2f2f2" }}
            >
              <div className="icon text-mainColor">{highlight.icon}</div>
              <div className="text-center pt-4">
                <h2 className="title font-semibold text-lg text-black transition-all duration-300">
                  {highlight.title}
                </h2>
                <p className="desc text-gray-700 text-xs font-semibold pt-2">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
