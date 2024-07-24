"use client";

import React, { act, useState } from "react";
import Admission from "./Admission";
import PlusTwoGallery from "./PlusTwoGallery";
import PlusTwoTestimonials from "./PlusTwoTestimonials";

type Tab =
  | "Overview"
  | "Admission"
  | "CourseStructure"
  | "Faq"
  | "Testimonials"
  | "Gallery";

export default function PlusTwoNavsTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return <div>Computer Science Nav</div>;
      case "Admission":
        return (
          <div className="shadow-xl px-0 sm:px-0 md:px-2 lg:px-6">
            <h2 className="text-[#FF3115] text-4xl font-bold capitalize tracking-wider py-4">
              Admission process
            </h2>
            <Admission />
          </div>
        );
      case "CourseStructure":
        return <div>Hotel Management</div>;
      case "Faq":
        return <div>Faq Faculty</div>;
      case "Testimonials":
        return (
          <div>
            <PlusTwoTestimonials />
          </div>
        );
      case "Gallery":
        return (
          <div>
            <PlusTwoGallery />
          </div>
        );
    }
  };

  return (
    <div>
      <nav>
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 border-b">
          <li
            onClick={() => handleTabChange("Overview")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Overview" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Overview
          </li>
          <li
            onClick={() => handleTabChange("Admission")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Admission" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Admission
          </li>
          <li
            onClick={() => handleTabChange("CourseStructure")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "CourseStructure" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Course Structure
          </li>
          <li
            onClick={() => handleTabChange("Faq")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Faq" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            FAQ
          </li>
          <li
            onClick={() => handleTabChange("Testimonials")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Testimonials" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Testimonials
          </li>
          <li
            onClick={() => handleTabChange("Gallery")}
            style={{
              cursor: "pointer",
              fontWeight: activeTab === "Gallery" ? "bold" : "normal",
            }}
            className="flex-1 w-full sm:w-full md:py-2 md:px-4 rounded text-center bg-blue-500 text-white"
          >
            Image Gallery
          </li>
        </ul>
      </nav>
      <div>{renderContent()}</div>
    </div>
  );
}
