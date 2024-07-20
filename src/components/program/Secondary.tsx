import Image from "next/image";

import secondary from "../../../public/blog2.jpg";
import ProgramTestimonial from "./ProgramTestimonial";
import ImageGallery from "@/global/ImageGallery";
import NavsAndTabs from "./NavsAndTabs";

const images = [
  {
    src: "/slider3.jpg",
    alt: "Image 1",
  },
  {
    src: "/blog2.jpg",
    alt: "Image 2",
  },
  {
    src: "/slider1.jpg",
    alt: "Image 3",
  },
  {
    src: "/blog3.jpg",
    alt: "Image 4",
  },
  {
    src: "/slider3.jpg",
    alt: "Image 5",
  },
  {
    src: "/slider2.jpg",
    alt: "Image 6",
  },
];

export default function Secondary() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="text-center pt-12 sm:pt-12 md:pt-20 w-full sm:w-full md:w-[65%] md:mx-auto">
            <h2 className="banner-text tracking-wider text-5xl sm:text-5xl md:text-7xl font-bold">
              Welcome to Siddhartha <br />{" "}
              <span className="text-[#FF3115]">Secondary Level</span>
            </h2>
            <p className="text-base sm:text-base md:text-xl font-medium text-[#2b2b2b] pt-6">
              The secondary level at our school is designed to provide students
              with a robust educational foundation that prepares them for higher
              education and future career paths. Our curriculum is crafted to
              develop critical thinking, creativity, and a passion for lifelong
              learning..
            </p>
          </div>

          <div className="pt-10 sm:pt-10 md:pt-16">
            <Image
              src={secondary}
              className="max-w-full h-[50vh] sm:h-[50dvh] md:h-[80dvh] object-cover"
              alt="Pre Primary Level Image"
            />
          </div>

          <div className="pt-12">
            <NavsAndTabs />
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
