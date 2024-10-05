"use client"

import React from "react";
import { usePathname } from "next/navigation";
import BannerLayout from "./BannerLayout";

const bannerInfos = [
  {
    currentPageLink: "/notice",
    currentPage: "Notices",
  },
  {
    currentPageLink: "/blog",
    currentPage: "Blogs",
  },
  {
    currentPageLink: "/event",
    currentPage: "Events",
  },
  {
    currentPageLink: "/blog/blogdetail",
    currentPage: "Blogs",
  },
];

const BannerGlobal = () => {
  const pathname = usePathname();

  const bannerInfo = bannerInfos.find(
    (banner) => banner.currentPageLink === pathname
  );

  if (!bannerInfo) {
    return null;
  }
  return (
    <>
      <BannerLayout
        currentPageLink={bannerInfo.currentPageLink}
        currentPage={bannerInfo.currentPage}
      />
    </>
  );
};

export default BannerGlobal;
