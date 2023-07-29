import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import {Header} from '@/common/components/'
import Button from '@/common/components/elements/Button/Button'
import picnic from '../../../../public/images/picnic.png'
import PhotoGallery from '@/common/components/elements/Grid/PhotoGallery';
import Pagination from '@/common/components/elements/Pagination/Pagination';
import { AiOutlineSearch } from "react-icons/ai";


const video = ["https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600", 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600',  'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/3810788/pexels-photo-3810788.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.unsplash.com/photo-1515187029135-18ee286d815b']

const Events_Photos = () => {

  return(
    <>
    
    <Head>
      <title>Events - Photos</title>
    </Head>

    <body className='text-white font-Albert_sans '>

      <Header/>
      <div className='mx-5'>
        <span className='xs:hidden md:visible'>Media / Event Photos</span>
        <p className='text-4xl text-center '>Relive the moments, captured forever.</p>
        <p className='text-center xs:mt-10'>Browse through our stunning event photos and immerse yourself in the memories that make our events truly unforgettable.</p>
        <Button text='View Photos'/>
      </div>
      <Image src={picnic} alt='Our Photos Event Page' className='xs:-mt-[28rem] absolute -z-20 md:mt-0 w-screen xs:h-[30rem] lg:h-[40rem]'/>
      

      <div className='xs:mt-[14rem] bg-[#FFFADE] grid xs:grid-rows-2 xs:mt-8 xs:mb-12'>
        <form className='xs:mt-5 xs:grid xs:grid-cols-2'>
          <p><input type='text' placeholder='What are you looking for?' className='rounded-[3rem] border bg-white p-2 outline-none xs:pl-12 xs:text-sm xs:w-[16rem] h-11 xs:ml-7'/>
          <AiOutlineSearch className=' absolute xs:-mt-7 xs:ml-10' fill='grey' size={20}/></p>
          <p className='xs:w-8/12 xs:-mt-3 xs:ml-10'><Button text = 'Search'/></p>
        </form>
        <p className='grid xs:grid-cols-4 gap-1 h-5 mx-5'>
          <Button text = 'All Photos'/>
          <Button text = 'Events'/>
          <Button text = 'Community'/>
          <Button text = 'Hangout'/>
        </p>
        
      </div>

      <PhotoGallery images={video}/>

      <Pagination/>

    </body>

    </>
  )
}

export default Events_Photos;