"use client"

import React from 'react'
import BannerGlobal from '../banner/BannerGlobal'
import Image from 'next/image'

import banner from "../../../public/blog1.jpg"

import { FaCalendar, FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';

const BlogDetail = () => {
    // const blogUrl = window.location.href; 
    const blogUrl = typeof window !== 'undefined' ? window.location.href : ''; // Get the current URL safely
    const title = "Most students say their mental health suffered in pandemic.";
    return (
        <>
            <BannerGlobal />
            <div className="py-20">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className='w-full md:w-2/3'>
                            <div className='w-full h-[500px]'>
                                <Image
                                    src={banner}
                                    alt='banner image'
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='py-10'>
                                <h2 className='text-3xl font-semibold text-secColor'>{title}</h2>
                                <div className="flex gap-8 items-center py-6">
                                    <p className='font-bold text-black tracking-wide text-base'>Suman Parajuli</p>
                                    <p className='text-base font-medium tracking-wide text-[#696969]'>July 25, 2024</p>
                                    <p className='text-base font-medium tracking-wide text-[#696969]'>1524 <span>views</span></p>
                                    <p className='text-base font-medium tracking-wide text-[#696969]'>0 <span>comments</span></p>
                                </div>
                                <div>
                                    <p className='text-[#696969] pt-4 leading-[1.9] text-[17px]'>On average 56% of university students worldwide said their mental health suffered during the COVID-19 pandemic, in a survey of about 17,000 students in 21 countries that was conducted for Chegg.org, an educational technology and textbook rental firm in the United States.</p>
                                    <p className='text-[#696969] pt-4 leading-[1.9] text-[17px]'>Brazil had the highest percentage saying their mental health suffered, at 76%, followed closely by the United States (75%), Canada (73%) and the United Kingdom (70%).</p>
                                    <p className='text-[#696969] pt-4 leading-[1.9] text-[17px]'>At 25%, Italy had the lowest number of students who said their mental health had suffered, followed by Russia (29%), China (38%) and South Korea (39%). Kenya, the only African country among the 21 countries in the survey, mirrored the global average with 56%.</p>
                                    <p className='text-[#696969] pt-4 leading-[1.9] text-[17px]'>As Thomas pointed out, Cheggs survey appears more like a scorecard that details obstacles and challenges that the current university undergraduate student population is going through in their universities and countries during and probably after the COVID-19 pandemic.</p>
                                    <p className='text-[#696969] pt-4 leading-[1.9] text-[17px]'>But there is a light at the end of the tunnel in that, despite mounting learning challenges and pressures caused by the COVID-19 pandemic and by widening economic disparities, 56% of the students surveyed still felt optimistic and ready for future challenges in the years ahead.</p>
                                </div>
                            </div>
                            {/* Share buttons section */}
                            <div className='mt-10'>
                                <h3 className='text-2xl font-semibold'>Share this post:</h3>
                                <div className='flex gap-4 mt-4'>
                                    <FacebookShareButton url={blogUrl} title={title}>
                                        <FacebookIcon size={32} round={true} />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={blogUrl} title={title}>
                                        <TwitterIcon size={32} round={true} />
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={blogUrl} title={title}>
                                        <LinkedinIcon size={32} round={true} />
                                    </LinkedinShareButton>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <div className='px-0 md:px-8'>
                                <h2 className='inline-block text-3xl text-secColor font-semibold capitalize border-b-4 pb-2 border-secColor'>categories</h2>
                                <div>
                                    <ul>
                                        <li className='mt-4'>
                                            <Link href="#" className='flex items-center justify-between group'>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>Education</p>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>(7)</p>
                                            </Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="#" className='flex items-center justify-between group'>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>Dancing</p>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>(12)</p>
                                            </Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="#" className='flex items-center justify-between group'>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>Society</p>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>(12)</p>
                                            </Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="#" className='flex items-center justify-between group'>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>Psychology</p>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>(12)</p>
                                            </Link>
                                        </li>
                                        <li className='mt-4'>
                                            <Link href="#" className='flex items-center justify-between group'>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>Politics</p>
                                                <p className='text-[17px] font-semibold text-[#9b9b9b] group-hover:text-black transition-all duration-500'>(12)</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='mt-6'>
                                    <h2 className='inline-block text-3xl text-secColor font-semibold capitalize border-b-4 pb-2 border-secColor'>latest blogs</h2>
                                    <ul className='mt-8'>
                                        <li>
                                            <div style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.15)" }}>
                                                <div className="imageBanner">
                                                    <Image
                                                        src={banner}
                                                        alt="image"
                                                        className="w-full h-full object-center"
                                                    />
                                                </div>
                                                <div className="px-6 py-4">
                                                    <span className="flex items-center gap-3 text-[#6b6b6b] text-[15px] mb-4">
                                                        <FaCalendar className="text-[#92210F]" />
                                                        21 Jan
                                                    </span>
                                                    <h3 className="mb-3 text-2xl text-[#252525] font-extrabold">This is my first blog</h3>
                                                    {/* <p className="mb-3 text-[15px] text-[#6b6b6b] font-normal">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam temporibus accusantium fugit placeat maxime unde harum deleniti eius repellat quis nisi minima perspiciatis molestias, provident quae deserunt animi dolor.
                                                    </p> */}
                                                    <Link
                                                        href="#"
                                                        className="flex items-center gap-1 duration-300 transition-all hover:tracking-[1px] hover:text-[#92210f] text-[#252525] pr-5 text-[15px] font-semibold"
                                                    >
                                                        Find out more
                                                        <FaArrowRight />
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail