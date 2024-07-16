import React from "react";
import image1 from "../../../public/teacher1.webp";


import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const teachers = [
  {
    name: "John Doe",
    title: "Mathematics Teacher",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "Jane Smith",
    title: "Science Teacher",
    socialMedia: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "John Doe",
    title: "Mathematics Teacher",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    name: "John Doe",
    title: "Mathematics Teacher",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
];

export default function Faculty() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="relative max-w-xs rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
            style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="relative h-80 w-full">
              <Image
                src={image1}
                alt={teacher.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <div className="flex space-x-6">
                  <Link
                    href={teacher.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaFacebook className="text-xl" />
                  </Link>
                  <Link
                    href={teacher.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaLinkedin className="text-xl" />
                  </Link>
                  <Link
                    href={teacher.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaInstagram className="text-xl" />
                  </Link>
                  <Link
                    href={teacher.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FaTwitter className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
