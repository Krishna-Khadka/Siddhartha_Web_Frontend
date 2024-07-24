import React, { useEffect } from "react";
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';// Import Fancybox CSS

import gallery1 from "../../../public/eca1.jpg";
import gallery2 from "../../../public/eca2.jpg";
import gallery3 from "../../../public/eca3.jpg";
import gallery4 from "../../../public/eca4.jpg";
import gallery5 from "../../../public/eca5.jpg";
import gallery6 from "../../../public/eca6.jpg";
import gallery7 from "../../../public/eca7.jpg";
import Image from "next/image";

const images = [
  gallery1.src,
  gallery2.src,
  gallery3.src,
  gallery4.src,
  gallery5.src,
  gallery6.src,
  gallery7.src,
];

const PlusTwoGallery = () => {
  useEffect(() => {
    import('@fancyapps/fancybox').then((Fancybox) => {
      Fancybox.bind("[data-fancybox]", {});
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <a
          key={index}
          data-fancybox="gallery"
          href={src}
          className="relative group w-full h-64 overflow-hidden"
        >
          <Image
            src={src}
            alt={`Gallery Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </a>
      ))}
    </div>
  );
};

export default PlusTwoGallery;
