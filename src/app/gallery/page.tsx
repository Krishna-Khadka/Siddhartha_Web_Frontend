import ComingSoon from "@/components/ComingSoon";
import GalleryList from "@/components/gallery/GalleryList";

import React from "react";

const page = () => {
  // return <ComingSoon />;
  return (
    <div className="container mx-auto">
      <div className="py-20">
        <GalleryList />
      </div>
    </div>
  );
};

export default page;
