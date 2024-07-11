import Image from "next/image";
import "./HomeAbout.css";

import aboutImage from "../../../public/aboutImage.png";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <>
      <div className="bg-[#f8fafb] py-20 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="about-img">
              <div style={{ width: "95%"  }}>
                <Image
                  src={aboutImage}
                  alt="home about image"
                  className="w-full h-full object-cover align-middle"
                />
              </div>
            </div>
            <div className="pl-4">
              <span className="text-[#92210f] mb-3 font-bold block text-base">
                About our school
              </span>
              <h2 className="mb-5 text-5xl text-[#252525] font-extrabold leading-[1.1]">
                Our education system inspires the next generation
              </h2>
              <p className="text-base mb-4 leading-[1.8] text-[#6b6b6b] font-normal">
                Curabitur aliquet quam id dui posuere blandit. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi. Donec
                rutrum congue leo eget malesuada. Pellentesque in ipsum id orci
                porta dapibus. Proin eget tortor risus. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit.
              </p>
              <Link
                href="#"
                className="hoverButton bg-[#92210f] pt-[13px] pr-[57px] pb-[14px] pl-[35px] text-white inline-block text-center relative overflow-hidden z-1 border-none font-semibold text-base"
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
