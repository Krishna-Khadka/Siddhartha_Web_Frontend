import BannerGlobal from "@/components/banner/BannerGlobal";
import EventGrid from "@/components/event/EventGrid";
import React from "react";

export default function page() {
  return (
    <>
      <BannerGlobal />
      <div className="container mx-auto">
        <div className="py-20">
          <EventGrid />
        </div>
      </div>
    </>
  );
}
