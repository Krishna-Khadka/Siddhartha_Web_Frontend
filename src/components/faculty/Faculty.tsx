"use client";

import React, { useState } from "react";
import image1 from "../../../public/teacher1.webp";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: "executive", label: "Executives" },
  { id: "teacher", label: "Teachers" },
  { id: "staff", label: "Staff" },
  { id: "it", label: "IT Department" },
];

const teachers = [
  {
    name: "John Doe",
    title: "Mathematics Teacher",
    post: "executive",
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
    post: "teacher",
    socialMedia: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
    },
  },
  {
    name: "Alice Johnson",
    title: "English Teacher",
    post: "staff",
    socialMedia: {
      facebook: "https://facebook.com/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
      instagram: "https://instagram.com/alicejohnson",
      linkedin: "https://linkedin.com/in/alicejohnson",
    },
  },
  {
    name: "Bob Brown",
    title: "Math Teacher",
    post: "staff",
    socialMedia: {
      facebook: "https://facebook.com/bobbrown",
      twitter: "https://twitter.com/bobbrown",
      instagram: "https://instagram.com/bobbrown",
      linkedin: "https://linkedin.com/in/bobbrown",
    },
  },
];

const Faculty = () => {
  const [activeTab, setActiveTab] = useState("executive");

  const filteredTeachers = teachers.filter(
    (teacher) => teacher.post === activeTab
  );

  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredTeachers.length === 0 ? (
          <div className="p-4 text-center">No available for this category.</div>
        ) : (
          filteredTeachers.map((teacher, index) => (
            <div
              key={index}
              className="relative max-w-xs rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 group"
              style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="relative h-72 sm:h-72 lg:h-[300px] w-full">
                <Image
                  src={image1}
                  alt={teacher.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg "
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
                      <FaTwitter className="text-xl" />
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
                      <FaLinkedin className="text-xl" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-1">{teacher.name}</h3>
                <p className="text-gray-600 text-sm">{teacher.title}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Faculty;
