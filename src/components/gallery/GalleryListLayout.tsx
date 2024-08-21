import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GalleryInfo {
  imgSrc: StaticImageData;
  title: string;
  description: string;
}

const GalleryListLayout = ({ imgSrc, title, description }: GalleryInfo) => {
  return (
    <>
      <Link href="#">
        <div className="card-wrapper">
          <div className="relative">
            <Image
              src={imgSrc}
              className="w-full h-full object-cover"
              alt="image gallery"
            />
          </div>
          <div className="pt-5 pr-7 pl-5 pb-7">
            <h4 className="mb-3 font-extrabold text-secColor text-2xl">
              {title}
            </h4>
            <p className="mb-3 text-[15px] text-[#6b6b6b] font-medium tracking-wider">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GalleryListLayout;
