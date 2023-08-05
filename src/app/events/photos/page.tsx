import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Header} from '@/common/components/'
import Button from '@/common/components/elements/Button/Button'
import picnic from '../../../../public/images/picnic.png'
import PhotoGallery from '@/common/components/elements/Grid/PhotoGallery';
import Pagination from '@/common/components/elements/Pagination/Pagination';
import { AiOutlineSearch } from "react-icons/ai";
import {Footer} from '@/common/components/';


// const video = ["https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600", 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600',  'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b']

const Events_Photos = () => {

  return(
    <>
    
    <Head>
      <title>Events - Photos</title>
    </Head>

    <body className='text-white font-Albert_sans '>

      <Header/>
      <span className='xs:collapse md:visible md:absolute md:-mt-[14rem] md:ml-10 lg:ml-24 lg:absolute lg:-mt-[8rem] text-sm'>Media / Event Photos</span>
      <div className='mx-5 md:mt-80'>
        <p className='text-4xl text-center lg:ml-[28rem] md:ml-20 md:absolute md:-mt-[1.5rem] lg:mt-[7rem]'>Relive the moments, captured forever.</p>
        <p className='text-center xs:mt-10 md:mx-36 md:absolute md:mt-[2rem] md:mb-[1rem] lg:absolute lg:mt-[12rem] lg:ml-[30rem] '>Browse through our stunning event photos and immerse yourself <br/>in the memories that make our events truly unforgettable.</p>
        <p className='w-3/12 xs:w-11/12 mx-auto md:absolute md:mt-[8rem] lg:ml-[44rem] lg:absolute lg:mt-[16rem] '><Button text='View Photos'/></p>
      </div>
      <Image src={picnic} alt='Our Photos Event Page' className='xs:-mt-[28rem] absolute lg:h-[44rem] md:-mt-[20rem] -z-20 md:h-[40rem] w-screen xs:h-[30rem] lg:-mt-64'/>
      
      {/* For Mobile and Tablet Screens */}

      {/* <div className='lg:collapse xs:mt-[4rem] md:mt-[13rem] w-screen bg-[#FFFADE] grid xs:grid-rows-2 xs:mb-12'>
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
        
      </div> */}
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

      <div className='lg:visible xs:collapse lg:absolute lg:mt-[8rem] bg-[#FFFADE] lg:w-screen pl-20 grid grid-cols-2'>
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
      <PhotoGallery/>

      <Pagination/>
        
    </body>

    </>
  )
}

export default Events_Photos;