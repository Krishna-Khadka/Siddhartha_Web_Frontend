import Image from "next/image";
import { StaticImageData } from "next/image";

interface TestimonialProps {
  imageSrc: StaticImageData;
  name: string;
  batch: string;
  review: string;
}

const PlusTwoTestimonialLayout: React.FC<TestimonialProps> = ({
  imageSrc,
  name,
  batch,
  review,
}) => (
  <>
    <div className="px-3 sm:px-3 md:px-6 lg:px-12 py-6 shadow-lg mt-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Image div */}
        <div className="w-full md:w-1/5 flex justify-center md:justify-start">
          <Image
            src={imageSrc}
            alt={`${name} image`}
            className="w-36 h-36 object-cover rounded-full"
          />
        </div>
        {/* Review div */}
        <div className="w-full md:w-4/5">
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex items-center gap-4">
              <h2 className="text-[#FF3115] text-xl md:text-2xl font-bold tracking-wide">
                {name}
              </h2>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                {batch}
              </span>
            </div>
            <div>
              <p className="text-base md:text-lg text-justify">{review}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PlusTwoTestimonialLayout;
