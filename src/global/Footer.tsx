"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import Logo from "../../public/logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#172f41] pt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div></div>
            <div className="pl-[2rem] pb-[30px]">
              <h2 className="footerTitle font-card-font">Useful link</h2>
              <ul className="footerList">
                <li>
                  <Link href="#" className="font-OpenSans">
                    Application
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-[2rem] pb-[30px]">
              <h2 className="footerTitle font-card-font">Study</h2>
              <ul className="footerList">
                <li>
                  <Link href="#" className="font-OpenSans">
                    Find a course
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Scholarships
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Study on campus
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-OpenSans">
                    Fees adn costs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="pl-[2rem] pb-[30px]">
              <h2 className="footerTitle font-card-font">Inquiries</h2>
              <ul className="footerContact">
                <li className="font-OpenSans flex gap-2">
                  <div>
                    <GrLocation className="footerIcon" />
                  </div>
                  <div className="font-OpenSans pl-2">
                    <p>Address</p>
                    <Link href="#">Sundarharaincha-12, Morang</Link>
                  </div>
                </li>
                <li className="font-OpenSans flex gap-2">
                  <div>
                    <FaEnvelope className="footerIcon" />
                  </div>
                  <div className="font-OpenSans pl-2">
                    <p>Email</p>
                    <Link href="#">siddhartha123@gmail.com</Link>
                  </div>
                </li>
                <li className="font-OpenSans flex gap-2">
                  <div>
                    <FaEnvelope className="footerIcon" />
                  </div>
                  <div className="font-OpenSans pl-2">
                    <p>Phone</p>
                    <Link href="#">+977 9852054850</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
