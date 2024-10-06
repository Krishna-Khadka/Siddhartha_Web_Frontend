import React from "react";

import { FaCalendar, FaArrowRight } from "react-icons/fa";

import Image from "next/image";

import Link from "next/link";

import { StaticImageData } from "next/image";

interface BlogProps {
  blog_id: string,
  imageSrc: StaticImageData;
  date: string;
  title: string;
  description: string;
}

const BlogCardLayout: React.FC<BlogProps> = ({
  blog_id,
  imageSrc,
  date,
  title,
  description,
}) => {
  return (
    <>
      <div className="imageBanner">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          className="w-full h-full object-center"
        />
      </div>
      <div className="px-6 py-4">
        <span className="flex items-center gap-3 text-[#6b6b6b] text-[15px] mb-4">
          <FaCalendar className="text-[#92210F]" />
          {date}
        </span>
        <h3 className="mb-3 text-2xl text-[#252525] font-extrabold">{title}</h3>
        <p className="mb-3 text-[15px] text-[#6b6b6b] font-normal">
          {description}
        </p>
        <Link
          href={`./blog/${blog_id}`} passHref
          className="flex items-center gap-1 duration-300 transition-all hover:tracking-[1px] hover:text-[#92210f] text-[#252525] pr-5 text-[15px] font-semibold"
        >
          Find out more
          <FaArrowRight />
        </Link>
      </div>
    </>
  );
};

export default BlogCardLayout;
