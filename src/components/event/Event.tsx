import Image from "next/image";
import event1 from "../../../public/event1.jpg";

export default function Event() {
  return (
    <>
      <div className="relative rounded-md w-[90%] mx-auto sm:mx-auto md:mr-auto shadow-lg">
        <span className="absolute top-1 sm:top-1 md:top-4 left-1 sm:left-1 md:left-4 py-1 px-1 md:py-2 md:px-3 bg-secColor text-white text-xs sm:text-xs md:text-sm rounded-sm z-20">
          06-Nov-17
        </span>
        <div className="relative">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          {/* Image */}
          <Image
            src={event1}
            alt="event-image"
            className="rounded-md w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute bottom-0 text-white w-full rounded-md"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, black 100%)",
          }}
        >
          <div className="pb-3 sm:pb-3 md:pb-10 lg:pb-10">
            <h3 className="relative pl-4 sm:pl-4 md:pl-12 text-3xl font-semibold">
              Event Heading
            </h3>
            <p className="pl-4 sm:pl-4 pr-4 sm:pr-4 md:pr-0 md:pl-12 text-xs sm:text-xs md:text-md pt-1 sm:pt-1 md:pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the ...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
