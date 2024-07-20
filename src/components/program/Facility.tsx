import Image, { StaticImageData } from "next/image";


interface FacilityCardProps {
  facImageSrc: StaticImageData;
  title: string;
  description: string;
}

export default function Facility({
  facImageSrc,
  title,
  description,
}: FacilityCardProps) {
  return (
    <>
        <div className="card-wrapper">
          <div className="relative">
            <Image
              src={facImageSrc}
              className="w-full h-full object-cover"
              alt={`${title} icon`}
            />
          </div>
          <div className="pt-5 pr-7 pl-5 pb-7">
            <h4 className="mb-3 font-extrabold text-secColor text-2xl">
              {title}
            </h4>
            <p className="mb-3 text-[15px] text-[#6b6b6b] font-normal">
              {description}
            </p>
          </div>
        </div>
    </>
  );
}
