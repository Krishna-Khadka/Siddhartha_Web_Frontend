import EventGrid from "@/components/event/EventGrid";
import React from "react";

export default function page() {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-20">
          <EventGrid />
        </div>
      </div>
    </>
  );
}
