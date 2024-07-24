"use client";
import React, { useRef, useEffect } from "react";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-zoom.css";

import gallery1 from "../../../public/eca1.jpg";
import gallery2 from "../../../public/eca2.jpg";
import gallery3 from "../../../public/eca3.jpg";
import gallery4 from "../../../public/eca4.jpg";
import gallery5 from "../../../public/eca5.jpg";
import gallery6 from "../../../public/eca6.jpg";
import gallery7 from "../../../public/eca7.jpg";

const images = [
  { src: gallery1.src, alt: "Gallery Image 1" },
  { src: gallery2.src, alt: "Gallery Image 2" },
  { src: gallery3.src, alt: "Gallery Image 3" },
  { src: gallery4.src, alt: "Gallery Image 4" },
  { src: gallery5.src, alt: "Gallery Image 5" },
  { src: gallery6.src, alt: "Gallery Image 6" },
  { src: gallery7.src, alt: "Gallery Image 7" },
];

const PlusTwoGallery = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const gallery = lightGallery(galleryRef.current, {
        plugins: [lgThumbnail, lgFullscreen, lgZoom],
        speed: 500,
      });

      return () => {
        gallery.destroy();
      };
    }
  }, []);

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        ref={galleryRef}
      >
        {images.map((gallery, index) => (
          <a
            key={index}
            href={gallery.src}
            className="relative group w-full h-64 overflow-hidden"
          >
            <Image
              src={gallery.src}
              alt={gallery.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default PlusTwoGallery;
