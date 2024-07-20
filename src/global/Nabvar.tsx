"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import {
  FaEnvelope,
  FaLocationDot,
  FaPhoneVolume,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleAboutToggle = () => {
    setAboutOpen(!aboutOpen);
  };

  const handleResourcesToggle = () => {
    setResourcesOpen(!resourcesOpen);
  };

  const handleProgramToggler = () => {
    setProgramOpen(!programOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
  }, [menuOpen]);

  return (
    <nav className="w-full h-20 shadow-x">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-20 w-full">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width="80"
              height="75"
              className="cursor-pointer"
              priority
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex items-center">
              <Link href="/">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-mainColor hover:pb-2 text-md text-secColor hover:text-mainColor duration-300 transition-all">
                  Home
                </li>
              </Link>
              <div className="relative group">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-mainColor hover:pb-2 text-md text-secColor hover:text-mainColor duration-300 transition-all group-hover:block">
                  About Us
                </li>
                <div className="absolute z-[90] left-0 w-48 bg-white border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block transition-opacity duration-300">
                  <Link href="/about">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      About Siddhartha
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Mission & Vision
                    </div>
                  </Link>
                  <Link href="/faculty">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Members
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-mainColor hover:pb-2 text-md text-secColor hover:text-mainColor duration-300 transition-all group-hover:block">
                  Programs
                </li>
                <div className="absolute z-[90] left-0 w-48 bg-white border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block transition-opacity duration-300">
                  <Link href="/pre">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Pre Primary Level
                    </div>
                  </Link>
                  <Link href="/primary">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Primary Level
                    </div>
                  </Link>
                  <Link href="/secondary">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Secondary Level
                    </div>
                  </Link>
                  <Link href="/plustwo">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Heigher Secondary
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-mainColor hover:pb-2 text-md text-secColor hover:text-mainColor duration-300 transition-all group-hover:block">
                  Resources
                </li>
                <div className="absolute z-[90] left-0 w-48 bg-white border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block transition-opacity duration-300">
                  <Link href="/notice">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Notices
                    </div>
                  </Link>
                  <Link href="/event">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Events
                    </div>
                  </Link>
                  <Link href="/blog">
                    <div className="tracking-wider capitalize font-semibold text-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
                      Blogs
                    </div>
                  </Link>
                </div>
              </div>
              <Link href="/">
                <li className="ml-10 tracking-wider capitalize font-semibold hover:border-b hover:border-mainColor hover:pb-2 text-md text-secColor hover:text-mainColor duration-300 transition-all">
                  Contact
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10">
                  <button className="tracking-wider capitalize font-semibold bg-mainColor text-white text-sm py-3 px-6 rounded-[40px] hover:bg-secColor duration-300 transition-all">
                    view vacancy
                  </button>
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={`fixed top-0 w-[85%]  sm:hidden h-screen bg-gray-900 p-10 z-50 ease-in duration-500 ${
          menuOpen ? "left-0" : "left-[-100%]"
        }`}
        style={{ overflowY: "auto", maxHeight: "100vh" }}
      >
        <div className="flex w-full items-center justify-end">
          {/* <Link href="/navbar">
            <Image
              src={Logo}
              alt="Logo"
              width="80"
              height="75"
              className="cursor-pointer"
              priority
            />
          </Link> */}
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} className="text-white" />
          </div>
        </div>

        {/* mobile nav navigation links */}
        <div className="flex flex-col">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 tracking-wider cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Home
              </li>
            </Link>
            <div>
              <li
                onClick={handleAboutToggle}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                About Us
              </li>
              {aboutOpen && (
                <div className="flex flex-col pl-4">
                  <Link href="/about">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      About Siddhratha
                    </div>
                  </Link>
                  <Link href="/missionvision">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Mission & Vision
                    </div>
                  </Link>
                  <Link href="/faculty">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Members
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div>
              <li
                onClick={handleProgramToggler}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Programs
              </li>
              {programOpen && (
                <div className="flex flex-col pl-4">
                  <Link href="/pre">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Pre Primary Level
                    </div>
                  </Link>
                  <Link href="/primary">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Primaray Level
                    </div>
                  </Link>
                  <Link href="/secondary">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Secondary Level
                    </div>
                  </Link>
                  <Link href="/plustwo">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Higher Secondary Level
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/faculty">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Teachers
              </li>
            </Link>
            <div>
              <li
                onClick={handleResourcesToggle}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Resources
              </li>
              {resourcesOpen && (
                <div className="flex flex-col pl-4">
                  <Link href="/notice">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Notice
                    </div>
                  </Link>
                  <Link href="/event">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Events
                    </div>
                  </Link>
                  <Link href="/blog">
                    <div className="py-2 cursor-pointer text-lg text-white">
                      Blogs
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl uppercase border-b border-gray-500 mt-2 font-normal text-white"
              >
                Contact
              </li>
            </Link>
            <Link href="/">
              <button className="bg-blue-600 text-white py-2 px-6 mt-4 rounded-sm">
                Log In
              </button>
            </Link>
          </ul>
        </div>

        {/* mobile nav contact details */}
        <div className="flex flex-col mt-8 border-b border-gray-500 pb-4">
          <div className="flex items-center gap-4">
            <span className="icon-bg">
              <FaEnvelope size={18} className="cursor-pointer" />
            </span>
            <Link href="#">
              <h3 className="text-lg font-normal tracking-wider text-white">
                mail@gmail.com
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-4 py-4">
            <span className="icon-bg">
              <FaPhoneVolume size={18} className="cursor-pointer" />
            </span>
            <Link href="/">
              <h3 className="text-lg font-normal tracking-wider text-white">
                (+977) 9762548964
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="icon-bg">
              <FaLocationDot size={18} className="cursor-pointer" />
            </div>
            <h3 className="text-lg font-normal tracking-wider text-white">
              Sundarharaincha 12, Khorsane
            </h3>
          </div>
        </div>

        {/* mobile nav social links */}
        <div className="flex flex-row items-center mt-8 gap-4 pb-4">
          <span className="icon-bg">
            <FaFacebook size={18} className="cursor-pointer" />
          </span>
          <span className="icon-bg">
            <FaInstagram size={18} className="cursor-pointer" />
          </span>
          <span className="icon-bg">
            <FaTwitter size={18} className="cursor-pointer" />
          </span>
          <span className="icon-bg">
            <FaLinkedin size={18} className="cursor-pointer" />
          </span>
        </div>
      </div>
    </nav>
  );
}
