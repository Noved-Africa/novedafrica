import React from 'react'
import { FiLink } from 'react-icons/fi'
import BlogCard from '@/common/components/blogCard'

const BlogDetails = () => {
  return (
    <div className=' bg-white lg:pt-32 pt-[90px] relative text-black '>


      <p className=' text-black lg:pl-[100px] md:pl-8 pl-4 md:text-[16px] text-sm '>
        Media / Noved Blog
      </p>


      <div className=' max-w-[920px] my-20 mx-auto '>
        <p className=' rounded-full bg-[#DBD9F5] text-[#3E38A9] w-fit px-10 py-3 text-sm font-medium mb-6 '>Stories</p>
        <h1 className=' mb-0 text-5xl leading-[56px] font-semibold mb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <div className=' border-t border-b py-6 mb-12 flex justify-between '>
          <p>12 February, 2045</p>

          <div className=' flex gap-2 items-center justify-center'>
            <FiLink className=' h-6 w-6' />
            <p>Copy link to post</p>
          </div>
        </div>

        <div>
          <div>
            <p className=' mb-5 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit. Lor ipsum dolor sit amet,
            </p>

            <p className=' mb-5 '>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit. Lor ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit.
            </p>

            <p className=' mb-5 '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit. Lor ipsum dol
            </p>


            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit. Lor ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit. Quis posu adipiscing coallis sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur adipiscing elit.
            </p>


          </div>
        </div>



      </div>
      
      <div className=' bg-[#EBEBEB] px-24 py-20  '>
        <h1 className=' mb-0 font-semibold text-4xl  '>
          Others articles:
        </h1>

        <div className=' grid grid-cols-3 mt-12 gap-10 '>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          

        </div>
      </div>
    </div>
  )
}

export default BlogDetails;