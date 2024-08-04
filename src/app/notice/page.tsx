import BannerGlobal from "@/components/banner/BannerGlobal";
import Notice from "@/components/notice/Notice";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <BannerGlobal />
        <div className="container mx-auto py-20">
          <Notice />
        </div>
      </div>
    </>
  );
}
