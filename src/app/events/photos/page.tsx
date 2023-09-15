import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Header} from '@/common/components/'
import Button from '@/common/components/elements/Button/Button'
import picnic from '../../../../public/images/picnic.png'
import PhotoGallery from '@/common/components/elements/Grid/PhotoGallery';
import Pagination from '@/common/components/elements/Pagination/Pagination';
import { AiOutlineSearch } from "react-icons/ai";


const Events_Photos = () => {

  return(
    <>
    
    <Head>
      <title>Events - Photos</title>
    </Head>

    <body className='text-white font-Albert_sans '>

      <Header/>
      <span className='xs:collapse md:visible md:absolute md:-mt-[14rem] md:ml-10 lg:ml-24 text-sm'>Media / Event Photos</span>
      <div className='mx-5 md:mt-80'>
        <p className='lg:text-5xl md:text-4xl text-center lg:ml-[10rem] md:ml-4 md:absolute md:mt-[8rem] lg:mt-[10rem] xs:text-lg xs:absolute xs:pt-[8rem]'>Relive the moments, captured forever.</p>
        <p className='text-center xs:mt-[13rem] xs:absolute md:mx-10 md:ml-[2rem] md:mt-[24rem] md:mb-[1rem] lg:mt-[24rem] xs:-ml-1 xs:text-xs md:mx-[5rem] xs:mx-8 lg:ml-[16rem] md:text-lg lg:text-xl'>Browse through our stunning event photos and immerse yourself <br/>in the memories that make our events truly unforgettable.</p>
        <p className='w-3/12 xs:w-11/12 mx-auto md:absolute md:mt-[34rem] lg:ml-[36rem] lg:absolute xs:absolute xs:mt-[20rem] lg:mt-[29rem] '><Button text='View Photos'/></p>
      </div>
      <Image src={picnic} alt='Our Photos Event Page' className='xs:-mt-[2rem] xs:relative lg:h-[44rem] md:-mt-[20rem] -z-20 md:h-[40rem] lg:relative w-screen xs:h-[30rem]'/>

      

{/* Mobile & Tablet Screen */}
      <div className='lg:collapse md:mt-[1rem] w-screen bg-[#FFFADE] md:absolute grid xs:grid-rows-2 xs:mb-12'>
        <form className='xs:mt-5 xs:grid xs:grid-cols-2'>
          <p><input type='text' placeholder='What are you looking for?' className='rounded-[3rem] border bg-white p-2 outline-none xs:pl-8 xs:text-sm xs:mt-2 xs:w-[12rem] md:w-[20rem] h-11 xs:h-8 xs:text-[8px] xs:ml-3'/>
          <AiOutlineSearch className=' absolute xs:-mt-6 xs:ml-6' fill='grey' size={18}/></p>
          <p className='xs:w-8/12 xs:-mt-3 md:mt-0  md:ml-[5rem] xs:ml-12'><Button text = 'Search'/></p>
        </form>
        <p className='grid xs:grid-cols-4 gap-1 h-5 mx-3'>
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
          <p><input type='text' placeholder='What are you looking for?' className='rounded-[3rem] border bg-white p-2 outline-none h-9 pl-14 w-[28rem] mt-7'/>
          <AiOutlineSearch className='-mt-7 ml-4 ' fill='grey' size={20}/></p>
          <p className='ml-[11.5rem] -mt-1'><Button text = 'Search'/></p>
        </form>
      </div>

      {/* <PhotoGallery images={video}/> */}
      <PhotoGallery/>

      <Pagination/>
        
    </body>

    </>
  )
}

export default Events_Photos;