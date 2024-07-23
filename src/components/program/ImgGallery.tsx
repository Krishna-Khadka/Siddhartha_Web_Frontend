import React from "react";
import Image from "next/image";
import gallery1 from "../../../public/eca1.jpg";
import gallery2 from "../../../public/eca2.jpg";
import gallery3 from "../../../public/eca3.jpg";
import gallery4 from "../../../public/eca4.jpg";
import gallery5 from "../../../public/eca5.jpg";
import gallery6 from "../../../public/eca6.jpg";
import gallery7 from "../../../public/eca7.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
];

const headings = [
  "Football",
  "Cricket",
  "Basketball",
  "Volleyball",
  "Table Tennis",
  "Singing",
  "Dancing",
];

const ImgGallery = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((gallery, index) => (
          <div
            key={index}
            className="relative group w-full h-64 overflow-hidden"
          >
            <Image
              src={gallery}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-white text-3xl font-bold tracking-wider">{headings[index]}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImgGallery;
