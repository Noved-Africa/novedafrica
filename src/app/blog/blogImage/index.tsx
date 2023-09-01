import React from 'react'
import Image from 'next/image'

type blogImage={
  image:string,
  category: string
}

const isGrid = true

const BlogImage: React.FC<blogImage> = ({image, category}) => {
  return (
    <div className=" relative " >
      <Image
        className={` ${isGrid ? "rounded-t-2xl" :'rounded- 2xl' }  w-full `}
        src={image}
        alt='Blog Image'
      />
      <div className=' flex justify-between absolute bottom-0 rounded-b-md bg-white/20  py-6 px-4 left-0 right-0 '>
        <p className=' px-3 bg-[#DBD9F5] leading-6 text-sm font-medium text-center rounded-full '>
          {category}
        </p>
        <p className=' text-white'>12 Feb, 2045</p>
      </div>
    </div>
  )
}

export default BlogImage