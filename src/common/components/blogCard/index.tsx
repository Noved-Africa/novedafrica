import React from 'react'
import Image from 'next/image'
import BlogImage from '@/app/blog/blogImage'
import { blogPicture } from '@/assets'
import Link from "next/link";
import { arrowLeft } from '@/assets';

const BlogCard = () => {
  return (
    <div className=' text-black bg-[#DBD9F5] rounded-lg '>
      <div>
        <BlogImage image={blogPicture} category='Social' />
      </div>

      <div className=' flex flex-col gap-2 px-4 pt-8 pb-6 '>
        <h1 className='  text-[28px] font-bold leading-9 ' >This is the heading for the other articles.</h1>
        <p className=' font-normal text-lg  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet mi amet.</p>
        <Link href={"/"} className='  flex items-center mt-6 text-[#4A43CB] '>
          Read this Article <span> <Image className=' ml-2 h-4 w-4 ' src={arrowLeft} alt='arrow left' /> </span>{" "}
        </Link>
      </div>
    </div>
  )
}

export default BlogCard