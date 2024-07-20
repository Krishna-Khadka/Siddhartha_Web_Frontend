// components/ImageGallery.js
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="uppercase text-secColor font-bold tracking-wide text-lg sm:text-lg md:text-3xl mb-2 sm:mb-2 md:mb-6">
        Life at Siddhartha <span className="text-[#FF3115]">Primary Level</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full h-64">
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
