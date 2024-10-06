

import GalleryDetail from '@/components/gallery/GalleryDetail';
import React from 'react'

interface Params {
    params: {
      id: string;
    };
  }
  

const page = ({params} :Params) => {
    const {id} = params;
    return (
        <>
         {/* <p>Displaying details for Image ID: {id}</p> */}
        <div>
            <GalleryDetail />
        </div>
        </>
    )
}

export default page