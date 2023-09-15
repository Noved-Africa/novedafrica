"use client"

import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/common/components'
import Button from '@/common/components/elements/Button/Button'
import Dots from '@/common/components/elements/Dots/dot'
import plane2 from '../../../public/images/plane2.png'
import people from '../../../public/images/people.jpg'
import heart from '../../../public/images/heart.jpg'
import smileyFace from '../../../public/images/smileyFace.jpg'
import envelope from '../../../public/images/envelope.jpg'
import forwardArrow from '../../../public/images/forwardArrow.jpg'
import target from '../../../public/images/target.jpg'
import diamond from '../../../public/images/diamond.jpg'
import flag from '../../../public/images/flag.jpg'
import birthday from '../../../public/images/birthday.jpeg'
import peoplepicnic from '../../../public/images/peoplepinic.jpeg'
import twoWomen from '../../../public/images/twoWomen.jpeg'
import peopleHolding from '../../../public/images/peopleHolding.jpg'
import groupOfPeople from '../../../public/images/groupOfPeople.jpg'
import white_background from '../../../public/images/white_background.png'


const Community = () => {

  return(

    <html>
      <Header/>

      <Head><title>Community | Noved Africa</title></Head>

      <body className='text-black bg-[#D9D9D9]'>
        <div className='bg-[#536D79] xs:pt-24 xs:pl-8 md:py-28 md:px-10 text-white'>
          <small className="lg:ml-[4rem] xs:text-[0.7rem] md:text-[0.7rem]">Our Community</small>
          <p className='md:pt-[3rem] lg:pt-20 font-semibold lg:ml-[3.8rem] md:text-3xl xs:text-[1.3rem] xs:pt-16'>Come grow with us</p>
          <p className='md:mt-6 md:w-[20rem] lg:ml-[3.8rem] xs:text-sm xs:mr-3 lg:w-[26rem]'>Join a community of creative individuals who have the same goals as you do. Realize your career goals faster with the Undergraduate Student Community.<br/><br/>Welcome to a world of possibilities!
          </p>
          <p className="lg:w-60 lg:ml-[3.8rem] mt-10 lg:text-[1rem] xs:w-screen xs:w-[14rem] xs:-ml-4 xs:mt-4 xs:mt-0"><Button text='Join our community'/></p>
        </div>
        <Image src={people} alt='community' className=' lg:w-[22rem] md:w-[14rem] md:ml-[22rem] md:-mt-[13rem] lg:-mt-[19rem] z-10 md:absolute lg:ml-[54rem]'/>
        <Image src={heart} alt='heart emoji' className='md:-mt-[26rem] w-3 md:ml-[32rem] xs:-mt-[36rem] xs:ml-[4rem] xs:absolute
        '/>
        <Image src={heart} alt='heart emoji' className='md:-mt-[16rem] w-6 md:ml-[29rem] lg:-mt-[20rem] xs:-mt-[24.7rem] xs:ml-[17rem] lg:ml-[42rem] xs:absolute
        '/>
        <Image src={smileyFace} alt='smiley face' className='lg:-mt-[9rem] w-4 lg:ml-[48rem] xs:-mt-[35rem] xs:ml-[18rem] md:-mt-[7rem] md:ml-[8rem] xs:absolute
        '/>
        <Image src={smileyFace} alt='smiley face' className='lg:-mt-[7rem] w-4 lg:ml-[12rem] xs:-mt-[27rem] xs:ml-[7rem] md:-mt-[22rem] md:ml-[18rem] xs:absolute
        '/>

        {/* Arc 1 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="lg:-mt-[20rem] lg:mb-[10rem] lg:h-[26rem] md:h-[29rem] xs:h-[24.5rem] xs:-mt-[14.6rem] md:-mt-[18.6rem] w-screen relative z-40"><path fill="#D9D9D9" fill-opacity="1" d="M0,288L120,256C240,224,480,160,720,160C960,160,1200,224,1320,256L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

        <section className="md:-mt-[4rem] md:px-10 xs:-mt-24 xs:px-3">
          <div className="lg:grid lg:grid-cols-3 gap-5">
            <div className="">
              <span className="text-[#4A43CB] font-semibold xs:text-xs md:text-lg">ABOUT USC</span>
              <h2 className="text-3xl xs:text-xl">Undergraduate Student Community</h2>
              <p className="py-4 xs:text-xs md:text-sm lg:text-[0.9rem] lg:w-[32rem]">The Undergraduate Student Community was created with great intentionality to help undergraduates and graduates alike find like minded people to help them grow in their journey. The Undergraduate Student Community focuses on inclusivity as well as career development. Joining our community will give access to several benefits like; community events, networking, and access to first hand updates about all things NOVED Africa related. You will also gain access to our newsletters where you get information about what is happening in the career world, as well as tips on how to get a job and grow in your career.</p>
            </div>
            <div className="lg:ml-[10rem]">
              <Image src={twoWomen} alt='Two Women Laughing' className='w-screen h-72 rounded-2xl lg:h-[28rem] lg:w-[28rem]'/>
            </div>
            <div className="xs:grid xs:grid-cols-2 pt-10 lg:grid-cols-1 gap-7 lg:-mt-[7rem] lg:ml-[4rem]">
            <Image src={peopleHolding} alt='' className='md:order-2 lg:order-1 h-[15rem] w-[28rem] lg:h-[12rem] lg:w-[22rem] rounded-2xl'/>
            <Image src={groupOfPeople} alt='' className=' order-1 h-[15rem] w-[25rem] lg:h-[20rem] lg:w-[22rem] rounded-2xl'/>
            </div>
            
          </div>
        </section>

        {/* 3 boxes */}
        <section  className='lg:mt-40 mt-10 md:px-10 xs:px-3'>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Box 1 */}
            <div className=" pt-12 pb-6 bg-white px-5 rounded-xl lg:w-[22rem]">
              {/* Image and Dot on the same Row */}
              <div className="grid grid-cols-2">
                {/* Image with background */}
                <div className=""><Image src={flag} alt= '' className='bg-[#FF9E6C] rounded-[0.75rem] p-3 w-12'/></div>

                {/* Dots Image*/}
                <div className="-mt-11 ml-16"><Dots/></div>
              </div>
              {/* Text */}
              <div className="mt-5">
                <b className="lg:text-xl">Community Mission</b>
                <p className="mt-2 xs:text-xs lg:text-sm">Our mission is to eradicate unemployability. Here at USC we intend to achieve this by bringing together a community of vibrant people that can depend on each other for growth and career development.</p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="pt-6 bg-white pb-3 px-5 rounded-xl lg:w-[22rem] lg:-mt-[18rem] md:mt-[0rem] xs:mt-5 lg:ml-[51rem]">
                {/* Image with background */}
                <div className=""><Image src={diamond} alt= '' className='bg-[#E27083] rounded-[0.75rem] p-3 w-12'/></div>
                {/* Text */}
                <div className="mt-5">
                  <b className="lg:text-xl">Community Value</b>
                  <p className='xs:text-xs lg:text-sm pt-2'>Our community values are simple;</p>
                  <ul className="mt-2 list-disc xs:text-xs pl-7 lg:text-sm">
                    <li>Inclusivity</li>
                    <li>Together, and</li>
                    <li>Growth.</li>
                  </ul>
                </div>

                {/* Dots Image*/}
                <div className='xs:pl-[13rem] md:pl-[8rem]'><Dots/></div>             </div>
          </div>
          {/* Box 3 */}
          <div className="pt-12 pb-6 bg-white px-5 rounded-xl lg:-mt-36 md:w-[22rem] mt-6 mx-auto ">
            {/* Image and Dot on the same Row */}
            <div className="grid grid-cols-2">
              {/* Image with background */}
              <div className="mt-8 lg:mt-0"><Image src={target} alt= '' className='bg-[#836AFE] rounded-[0.75rem] p-3 w-12'/></div>

              {/* Dots Image*/}
              <div className="-mt-5 lg:-mt-[3rem] ml-16"><Dots/></div>
            </div>
            {/* Text */}
            <div className="mt-5">
              <b className="md:text-xl">Community Goal</b>
              <p className="mt-2 xs:text-xs lg:text-sm">At USC, our goal is to provide you with the correct education, tools, chances and especially opportunities, training and platform you would need to become employable.</p>
            </div>
          </div>
        </section>

        {/* Arc 2 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='z-40 xs:absolute md:pt-10 xs:mt-12 lg:mt-[8rem]'><path fill="#D9D9D9" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,256C640,299,800,309,960,282.7C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        
        <section className="xs:mt-[14rem] md:mt-[18rem]">
          {/* Undergraduate Student community background */}
          <Image src={white_background} alt='Undergraduate Student community background' className='w-screen -mt-44 lg:h-[38rem] md:h-[30rem] xs:h-[18rem] lg:-mt-[5rem] '/>
          <div className="text-center lg:absolute xs:absolute xs:-mt-[13rem] md:-mt-[22rem] xs:pb-7 lg:-mt-[32rem]">
            <b className="md:text-[1.6rem] lg:text-[3rem] xs:text-[1rem] xs:pt-3 xs:px-2 lg:pt-[10rem] md:-pt-[7rem] block">Join the Undergraduate Student<br/> Community</b>
            <small className="pt-5 md:pt-3 md:pt-[3rem] mx-28 md:text-[0.8rem] block lg:text-lg xs:text-xs xs:mx-5 lg:mx-[16rem]">The only procedure required to join our community is to fill the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!</small>
            <button className="bg-[#4A43CB] xs:h-6 md:h-9 lg:h-10 xs:text-xs xs:py-1 md:text-sm rounded-[4rem] text-white px-3 py-2 lg:mt-5 xs:mt-5 md:mt-[2rem]">Join community <Image src={forwardArrow} alt='' className='inline'/></button>
          </div>
        </section>

        <div className="xs:py-10 bg-white py-20 text-center">
          <b className="block xs:text-[1rem] lg:text-[2rem]">Community media</b>
          <small className="lg:text-[1rem] xs:text-sm">Media from some of our live community events</small>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 bg-white xs:px-3 px-10 pb-32 xs:pb-5">
          {/* Image 1 */}
          <div className="text-center">
            <Image src={peoplepicnic} alt='' className='rounded-[2rem]'/>
            <p className="md:-mt-28 text-white xs:absolute xs:-mt-20 xs:text-sm xs:pl-24 lg:pl-[12rem] font-bold lg:-mt-44 lg:text-xl">Community photos</p>
            <div className="mx-auto lg:ml-[10rem] xs:-mt-16 lg:-mt-[10rem] xs:w-[15rem] w-[9rem]"><Button text='See Photos'/></div>
          </div>
          {/* Image 2 */}
          <div className="text-center">
            <Image src={birthday} alt='' className='rounded-[2rem]'/>
            <p className="md:-mt-28 text-white xs:text-sm xs:absolute lg:pl-[12rem] xs:-mt-20 xs:pl-24 font-bold lg:-mt-[10rem] lg:text-xl">Community videos</p>
            <div className="mx-auto w-[9rem] lg:ml-[10.5rem] lg:-mt-[9rem] xs:-mt-16 xs:w-[15rem]"><Button text='See Videos'/></div>
          </div>
        </div>

          {/*  */}
        <section className="text-white lg:grid lg:grid-cols-2">
          {/* Column 1 */}
          <div className="bg-[#444185] pl-10 xs:pl-5 pb-20">
            <p className="lg:text-[2rem] xs:text-[1rem] font-bold pt-10">Explore diverse conversation of our community.</p>
            <p className="lg:text-[1.25rem] xs:text-xs xs:pt-2">Discover engaging articles, stories, and discussions created by our vibrant community as we come together to inspire, learn, and grow.</p>
            <button className="border rounded-[4rem] lg:text-[1rem] xs:ml-3 xs:text-[.7rem] px-6 py-2 mt-10">Read our community blog</button>
          </div>
          {/* Column 2 */}
          <div className="bg-[#6862D4] pl-10 xs:pl-5 pb-20">
            <p className="lg:text-[2rem] xs:text-[1rem] font-bold pt-10">Need more information about the community?</p>
            <p className="lg:text-[1rem] xs:text-xs xs:pt-2">Our team is always on standby to answer any questions you might have. Contact us today! You can also go through our FAQs for more information.</p>
            <button className="border rounded-[4rem] lg:text-[1rem] xs:ml-3 xs:text-[.7rem] px-6 py-2 mt-10">Read our community FAQ</button>
          </div>
        </section>

        {/* Dots Image*/}
        <p className="pl-[7rem] bg-white -mt-10 relative -z-10"><Dots/></p>

        {/* Plane Image */}
        <p className="pl-[35rem] bg-white"><Image src={plane2} alt='Hand Drawn Plane'/></p>

        <section className="bg-white px-10 grid md:grid-cols-2 lg:pt-10 xs:pl-4">
          <div className="md:-mt-2">
            <p className="font-bold lg:text-[2rem] md:text-[1.7rem] xs:pt-5 xs:text-[1.2rem]">Stay Informed with Our Newsletter!</p>
            <p className="lg:text-[1rem] xs:text-sm">Subscribe to our newsletter and never miss an update. Receive exclusive content, latest news, and exciting offers delivered right to your inbox. Join our community and be the first to know!</p>
            <form action="" className="md:mb-32">
              <div className="grid grid-rows-3 gap-4 pt-10">
                <input type="text" name="" className="border rounded-[4rem] px-5 py-1 " placeholder='Full name'/>
                <input type="email" name="" className="border rounded-[4rem] px-5 py-1 " placeholder='Email address'/>
                <input type="submit" value="Subscribe" className='border text-white rounded-[4rem] px-5 xs:py-1 py-2.5 bg-[#4A43CB] cursor-pointer'/>
                {/* <div className=""><Button text='Subscribe'/></div> */}
              </div>
            </form>
          </div>
          
          {/* Envelope */}
          <div className='xs:mt-10'>
          <Image src={envelope} alt='' className='md:ml-[3rem] lg:ml-[15rem] xs:ml-0 xs:mb-16' />
        </div>
            
        </section>
        
        {/* Dots Image*/}
        <p className="bg-white pl-[46rem] relative -z-10 -mb-16"><Dots/></p>
      </body>
    </html>
  )
}

export default Community;