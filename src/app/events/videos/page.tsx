"use client"

import React from "react";
import Head from 'next/head'
import {Header} from '@/common/components/'
import Image from 'next/image'
import PhotoGallery from '@/common/components/elements/Grid/PhotoGallery';
import Pagination from '@/common/components/elements/Pagination/Pagination';
import { AiOutlineSearch } from "react-icons/ai";
import Button from '@/common/components/elements/Button/Button'
import picnic from '../../../../public/images/picnic.png'
import VideoMagnifier from '@/common/components/elements/VideoMagnifier/VideoMagnifier';

const Events_Videos = () => {

  const videoUrl = 'https://www.youtube.com/watch?v=Zs4nfpSs5P0';
  return(
    <>

      <Head>
        <title>Events - Videos</title>
      </Head>

      <body>
        <Header/>

        <span className='xs:collapse md:visible md:absolute md:-mt-[14rem] md:ml-10 lg:ml-24 text-sm'>Media / Event Photos</span>
      <div className='mx-5 md:mt-80'>
        <p className='text-4xl text-center lg:ml-[28rem] md:ml-20 md:absolute md:-mt-[1.5rem] lg:mt-[19rem]'>Relive the moments, captured forever.</p>
        <p className='text-center xs:mt-10 md:mx-36 md:absolute md:mt-[2rem] md:mb-[1rem] lg:absolute lg:mt-[24rem] lg:ml-[30rem] '>Browse through our stunning event photos and immerse yourself <br/>in the memories that make our events truly unforgettable.</p>
        <p className='w-3/12 xs:w-11/12 mx-auto md:absolute md:mt-[8rem] lg:ml-[44rem] lg:absolute lg:mt-[28rem] '><Button text='View Photos'/></p>
      </div>
      <Image src={picnic} alt='Our Photos Event Page' className='xs:-mt-[28rem] xs:absolute lg:h-[44rem] md:-mt-[20rem] -z-20 md:h-[40rem] lg:relative w-screen xs:h-[30rem]'/>


      <div className='lg:collapse xs:mt-[4rem] md:mt-[13rem] w-screen bg-[#FFFADE] grid xs:grid-rows-2 xs:mb-12'>
        <form className='xs:mt-5 xs:grid xs:grid-cols-2'>
          <p><input type='text' placeholder='What are you looking for?' className='rounded-[3rem] border bg-white p-2 outline-none xs:pl-12 xs:text-sm xs:w-[16rem] md:w-[25rem] h-11 xs:ml-7'/>
          <AiOutlineSearch className=' absolute xs:-mt-7 xs:ml-10' fill='grey' size={20}/></p>
          <p className='xs:w-8/12 xs:-mt-3 md:mt-0 xs:ml-10'><Button text = 'Search'/></p>
        </form>
        <p className='grid xs:grid-cols-4 gap-1 h-5 mx-5'>
          <Button text = 'All Photos'/>
          <Button text = 'Events'/>
          <Button text = 'Community'/>
          <Button text = 'Hangout'/>
        </p>
        
      </div>

{/* Tablet Screen */}
      <div className='lg:collapse md:mt-[13rem] w-screen bg-[#FFFADE] md:absolute md:mt-[20rem] grid xs:grid-rows-2 xs:mb-12'>
        <form className='xs:mt-5 xs:grid xs:grid-cols-2'>
          <p><input type='text' placeholder='What are you looking for?' className='rounded-[3rem] border bg-white p-2 outline-none xs:pl-12 xs:text-sm xs:w-[16rem] md:w-[25rem] h-11 xs:ml-7'/>
          <AiOutlineSearch className=' absolute xs:-mt-7 xs:ml-10' fill='grey' size={20}/></p>
          <p className='xs:w-8/12 xs:-mt-3 md:mt-0 xs:ml-10'><Button text = 'Search'/></p>
        </form>
        <p className='grid xs:grid-cols-4 gap-1 h-5 mx-5'>
          <Button text = 'All Photos'/>
          <Button text = 'Events'/>
          <Button text = 'Community'/>
          <Button text = 'Hangout'/>
        </p>
        
      </div>

      {/* For Desktop Screens */}

      <div className='lg:visible xs:collapse  lg:mt-[2rem] bg-[#FFFADE] lg:w-screen pl-20 grid grid-cols-2'>
        <p className='grid grid-cols-4 h-12 -mt-1'>
            <Button text = 'All Photos'/>
            <Button text = 'Events'/>
            <Button text = 'Community'/>
            <Button text = 'Hangout'/>
        </p>
        <form className='grid grid-cols-2'>
          <p><input type='text' placeholder='What are you looking for?' className='rounded-[3rem] border bg-white p-2 outline-none h-11 pl-14 w-[31rem] mt-8'/>
          <AiOutlineSearch className='-mt-7 ml-4 ' fill='grey' size={20}/></p>
          <p className='ml-[10rem]'><Button text = 'Search'/></p>
        </form>
      </div>

      {/* <PhotoGallery images={video}/> */}
      {/* <PhotoGallery/> */}

      <VideoMagnifier videoUrl={videoUrl} />

      <Pagination/>
      </body>
    </>
  )
}

export default Events_Videos;