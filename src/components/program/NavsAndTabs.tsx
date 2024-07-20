"use client";

import { useState } from "react";

import CurriculumCard from "./CurriculumCard";
import Facility from "./Facility";
import { StaticImageData } from "next/image";

// icons import

import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";

import science from "../../../public/science.png";
import math from "../../../public/math.png";
import english from "../../../public/english.png";
import social from "../../../public/social.png";
import computer from "../../../public/science.png";
import nepali from "../../../public/nepali.png";
import health from "../../../public/health.png";
import gk from "../../../public/gk.png";

type Tab = "Curriculum" | "ECA" | "Facilities" | "Parental Involvement";

interface FacilityCardProps {
  facImageSrc: StaticImageData;
  title: string;
  description: string;
}

interface CardData {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  bgColor: string;
}

const facilityData: FacilityCardProps[] = [
  {
    facImageSrc: blog1,
    title: "Science Labs",
    description:
      "Our fully equipped science labs provide a hands-on learning environment where students can conduct experiments and explore scientific concepts.",
  },
  {
    facImageSrc: blog2,
    title: "Computer Labs",
    description:
      "Featuring the latest technology and software, our computer labs are designed to enhance digital literacy and support our technology-integrated curriculum.",
  },
  {
    facImageSrc: blog3,
    title: "Library",
    description:
      "Our library boasts a vast collection of books, journals, and digital resources, fostering a love for reading and research.",
  },
  {
    facImageSrc: blog1,
    title: "Art Studios",
    description:
      "These creative spaces are equipped with various art supplies and tools, encouraging students to express themselves through different art forms.",
  },
  {
    facImageSrc: blog2,
    title: "Sports Facilities",
    description:
      "Our sports fields, gymnasium, and swimming pool offer ample opportunities for physical education and team sports.",
  },
  {
    facImageSrc: blog3,
    title: "Auditorium",
    description:
      "A multi-purpose auditorium for school assemblies, performances, and events, providing a platform for students to showcase their talents.",
  },
  {
    facImageSrc: blog1,
    title: "Cafeteria",
    description:
      "Serving nutritious meals and snacks, our cafeteria is a place where students can enjoy healthy food in a comfortable environment.",
  },
];

const cardData: CardData[] = [
  {
    imageSrc: science,
    title: "Science",
    description:
      "Exploring the fundamental principles of physics, chemistry, and biology to understand the natural world and develop critical thinking skills.",
    bgColor: "#DEF4FD",
  },
  {
    imageSrc: math,
    title: "Maths",
    description:
      "Developing problem-solving skills and understanding mathematical concepts like algebra, geometry to solve real-world problems.",
    bgColor: "#FCF2DB",
  },
  {
    imageSrc: english,
    title: "English",
    description:
      "Enhancing communication skills through reading, writing, and analyzing literature, understanding grammar, composition, and creative expression.",
    bgColor: "#ECE0FC",
  },
  {
    imageSrc: social,
    title: "Social",
    description:
      "Studying historical events, cultural developments to understand human societies and their interactions across time and space.",
    bgColor: "#DEF4FD",
  },
  {
    imageSrc: computer,
    title: "Computer",
    description:
      "Learning fundamental and advanced computer science concepts including programming and digital literacy to thrive in a technology-driven world.",
    bgColor: "#FCF2DB",
  },
  {
    imageSrc: nepali,
    title: "Nepali",
    description:
      "Building proficiency in the Nepali language through literature, grammar, and composition, and exploring cultural heritage and contemporary issues.",
    bgColor: "#ECE0FC",
  },
  {
    imageSrc: health,
    title: "Health",
    description:
      "Understanding principles of personal health, nutrition, and wellness to promote a balanced and healthy lifestyle and make informed health decisions.",
    bgColor: "#DEF4FD",
  },
  {
    imageSrc: gk,
    title: "GK",
    description:
      "Expanding general knowledge on various topics including current events, geography, politics, and culture to foster awareness.",
    bgColor: "#FCF2DB",
  },
];

export default function NavsAndTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Curriculum");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Curriculum":
        return (
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cardData.map((card, index) => (
                <CurriculumCard
                  key={index}
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  bgColor={card.bgColor}
                />
              ))}
            </div>
          </div>
        );
      case "ECA":
        return <div>ECA Content</div>;
      case "Facilities":
        return (
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {facilityData.map((facility, index) => (
                <Facility
                  key={index}
                  facImageSrc={facility.facImageSrc}
                  title={facility.title}
                  description={facility.description}
                />
              ))}
            </div>
          </div>
        );
      case "Parental Involvement":
        return <div>Parental Involvement Content</div>;
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <div>
      <nav>
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 border-b">
          <li
            onClick={() => handleTabChange("Curriculum")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Curriculum" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Curriculum
          </li>
          <li
            onClick={() => handleTabChange("ECA")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "ECA" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Extracurricular Activities
          </li>
          <li
            onClick={() => handleTabChange("Facilities")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Facilities" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Facilities
          </li>
          <li
            onClick={() => handleTabChange("Parental Involvement")}
            style={{
              cursor: "pointer",
              fontWeight:
                activeTab === "Parental Involvement" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Parental Involvement
          </li>
        </ul>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
}
