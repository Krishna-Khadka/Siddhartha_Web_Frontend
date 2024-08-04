import React from "react";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";
import BlogCardLayout from "@/components/blog/BlogCardLayout";

const blogs = [
  {
    imageSrc: blog1,
    date: "25 July 2024",
    title: "How I applying to school",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore",
  },
  {
    imageSrc: blog2,
    date: "15 August 2024",
    title: "How I applying to school",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore",
  },
  {
    imageSrc: blog3,
    date: "27 August 2024",
    title: "How I applying to school",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi dicta ex labore",
  },
];

const BlogCard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <BlogCardLayout
              imageSrc={blog.imageSrc}
              date={blog.date}
              title={blog.title}
              description={blog.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
