
import BlogDetail from '@/components/blog/BlodDetail'
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
            <BlogDetail />
        </div>
        </>
    )
}

export default page