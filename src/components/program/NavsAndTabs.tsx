"use client";

import { useState } from "react";

import CurriculumCard from "./CurriculumCard";
import { StaticImageData } from "next/image";

// icons import

import science from "../../../public/science.png";
import math from "../../../public/math.png";
import english from "../../../public/english.png";
import social from "../../../public/social.png";
import computer from "../../../public/science.png";
import nepali from "../../../public/nepali.png";
import health from "../../../public/health.png";
import gk from "../../../public/gk.png";

type Tab = "Curriculum" | "ECA" | "Facilities" | "Parental Involvement";

interface CardData {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  bgColor: string;
}

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
        return <div>Extracurricular Activities Content</div>;
      case "Facilities":
        return <div>Facilities Content</div>;
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
