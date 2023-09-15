import React from 'react'
import { search } from '@/assets'
import Image from 'next/image'


type text ={
  text: string
}

const SearchComponent = ({ text }:text) => {
  return (
    <div className='  bg-[#FFFADE] flex lg:flex-row flex-col lg:items-center justify-between lg:px-[100px] md:px-8 md:py-8 py-6   md:gap-6 gap-4  px-4  w-full '>
      <p className=' font-medium lg:text-[22px] text-lg md:text-[20px] text-[#292929] '>
        {text}
      </p>

      <form className=' flex lg:w-2/5 gap-3 '>
        <div className=' flex gap-2 bg-white px-4 justify-center items-center w-full rounded-full '>
          <Image src={search} height={200} width={200} className=' h-5 w-5 ' alt='Search' />
          <input
            type='text'
            placeholder='What are you searching for?'
            className=' py-3 text-black w-full focus:outline-0 '
          />
        </div>
        <button className=' bg-[#4A43CB] px-6 md:px-10 py-3 grow-0 shrink rounded-full  '>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchComponent