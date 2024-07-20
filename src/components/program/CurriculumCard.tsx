import Image, { StaticImageData } from "next/image";
import "./Program.css";

interface CurriculumCardProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  bgColor: string;
}

export default function CurriculumCard({
  imageSrc,
  title,
  description,
  bgColor,
}: CurriculumCardProps) {
  return (
    <div>
      <div
        style={{ backgroundColor: bgColor }}
        className="grade-wrapper rounded-lg flex flex-col items-center py-12 px-12 bg-[#DEF4FD]"
      >
        <Image
          src={imageSrc}
          alt={`${title} icon`}
          className="h-32 w-32 object-cover"
        />
        <h5 className="text-3xl font-bold text-[#0B0B0B] tracking-wider py-6">
          {title}
        </h5>
        <p className="px-4 text-base text-[#121212] font-medium text-center tracking-wider">
          {description}
        </p>
      </div>
    </div>
  );
}
