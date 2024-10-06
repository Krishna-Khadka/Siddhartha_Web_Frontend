"use client";
import "./gallery.css"
import React, { useState } from "react";
import Image from "next/image";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import image1 from "../../../public/blog1.jpg";
import image2 from "../../../public/blog3.jpg";
import image3 from "../../../public/eca2.jpg";
import image4 from "../../../public/eca5.jpg";
import image5 from "../../../public/eca7.jpg";
import image6 from "../../../public/home-about.png";
import image7 from "../../../public/about3.jpg";
import image8 from "../../../public/aboutBanner.jpg";
import image9 from "../../../public/blog2.jpg";
import image10 from "../../../public/eca1.jpg";

const data = [
  { id: 1, imgSrc: image1 },
  { id: 2, imgSrc: image2 },
  { id: 3, imgSrc: image3 },
  { id: 4, imgSrc: image4 },
  { id: 5, imgSrc: image5 },
  { id: 6, imgSrc: image6 },
  { id: 7, imgSrc: image7 },
  { id: 8, imgSrc: image8 },
  { id: 9, imgSrc: image9 },
  { id: 10, imgSrc: image10 },
];

const GalleryDetail = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 p-3">
        {data.map((item, index) => (
          <div
            className="mb-3 cursor-pointer hover:opacity-80"
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={item.imgSrc}
              alt={`Image of ID: ${item.id}`}
              className="w-full"
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={data.map((item) => ({ src: item.imgSrc.src }))}
          index={currentIndex}
          controller={{ closeOnBackdropClick: true }}
        />
      )}
    </>

  );
};

export default GalleryDetail;
