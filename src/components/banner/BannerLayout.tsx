import React from "react";

import Link from "next/link";

interface BannerProps {
  currentPageLink: string;
  currentPage: string;
}

const BannerLayout: React.FC<BannerProps> = ({
  currentPageLink,
  currentPage,
}) => {
  return (
    <>
      <div className="global-banner relative">
        <div className="container mx-auto">
          <div className="absolute bottom-6">
            <nav aria-label="breadcrumb" className="w-max">
              <ol className="flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60">
                <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
                  <Link href="/" className=" text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                  </Link>
                  <span className="mx-2 font-sans text-2xl antialiased font-normal leading-normal pointer-events-none select-none text-white">
                    /
                  </span>
                </li>
                <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
                  <Link
                    href={currentPageLink}
                    className="text-2xl text-white font-semibold tracking-wider"
                  >
                    {currentPage}
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerLayout;
