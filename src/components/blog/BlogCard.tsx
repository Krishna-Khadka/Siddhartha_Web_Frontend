import "./BlogCard.css";

import Image from "next/image";
import { BLOG_DATA } from "@/components/blog/index.js";
import { FaComment, FaUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Link from "next/link";

export default function BlogCard() {
  return (
    <>
      {BLOG_DATA.map((blog, index) => (
        <div key={index} className="flex flex-col shadow-lg blog-card">
          <div>
            <Image
              src={blog.image}
              alt="blog-image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div style={{ padding: "40px 20px 15px 20px" }}>
            <div className="flex justify-start items-center gap-6">
              <div
                className="flex items-center justify-start gap-1"
                style={{ padding: "7px 3px 3px 0px" }}
              >
                <FaComment className="text-mainColor text-xs" />
                <Link
                  href="#"
                  className="text-gray-700 text-xs font-semibold leading-6 tracking-wider"
                >
                  <span>{blog.comments}</span> comments
                </Link>
              </div>
              <div className="flex items-center justify-start gap-1">
                <FaUser className="text-mainColor text-xs" />
                <Link
                  href="#"
                  className="text-gray-700 text-xs font-semibold leading-6 tracking-wider capitalize"
                >
                  {blog.author}
                </Link>
              </div>
            </div>
            <h4 className="mt-2 mb-1 text-2xl font-semibold leading-8 text-secColor hover:text-mainColor transition-all duration-300">
              <Link href="#">{blog.title}</Link>
            </h4>
            <p className="mt-3 border-t-2 pt-3 border-t-[#F1F1F1] text-[#535859] text-md leading-7 font-medium">
              {blog.description}
            </p>
            <div className="flex items-center pt-3 pb-4">
              <Link
                href="#"
                className="uppercase text-sm font-semibold text-mainColor"
              >
                read more
              </Link>
              <IoIosArrowForward className="text-mainColor tracking-wider" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
