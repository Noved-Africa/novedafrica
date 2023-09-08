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
        <div className='bg-[#536D79] md:py-28 md:px-10 text-white'>
          <small className="lg:ml-[4rem]">Our Community</small>
          <p className='md:pt-28 lg:pt-20 font-semibold lg:ml-[3.8rem] text-3xl'>Come grow with us</p>
          <p className='md:mt-6 lg:ml-[3.8rem] w-[26rem]'>Join a community of creative individuals who have the same goals as you do. Realize your career goals faster with the Undergraduate Student Community.<br/><br/>Welcome to a world of possibilities!
          </p>
          <p className="w-60 lg:ml-[3.8rem] mt-10"><Button text='Join our community'/></p>
        </div>
        <Image src={people} alt='community' className='w-[22rem] -mt-[19rem] z-10 absolute ml-[34rem]'/>
        <Image src={heart} alt='heart emoji' className='md:-mt-[26rem] w-3 md:ml-[26rem] absolute
        '/>
        <Image src={heart} alt='heart emoji' className='md:-mt-[22rem] w-6 md:ml-[40rem] absolute
        '/>
        <Image src={smileyFace} alt='smiley face' className='md:-mt-[8rem] w-4 md:ml-[32rem] absolute
        '/>
        <Image src={smileyFace} alt='smiley face' className='md:-mt-[5rem] w-4 md:ml-[4rem] absolute
        '/>

        {/* Arc 1 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="-mt-[13rem] lg:w-[98rem] lg:mb-[10rem] h-[14.5rem] w-screen relative z-40"><path fill="#D9D9D9" fill-opacity="1" d="M0,288L120,256C240,224,480,160,720,160C960,160,1200,224,1320,256L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>

        <section className="md:py-16 md:px-10">
          <div className="lg:grid lg:grid-cols-3 gap-5">
            <div className="">
              <span className="text-[#4A43CB] font-semibold">ABOUT USC</span>
              <h2 className="text-3xl ">Undergraduate Student Community</h2>
              <p className="py-4">The Undergraduate Student Community was created with great intentionality to help undergraduates and graduates alike find like minded people to help them grow in their journey. The Undergraduate Student Community focuses on inclusivity as well as career development. Joining our community will give access to several benefits like; community events, networking, and access to first hand updates about all things NOVED Africa related. You will also gain access to our newsletters where you get information about what is happening in the career world, as well as tips on how to get a job and grow in your career.</p>
            </div>
            <div className="lg:ml-[10rem]">
              <Image src={twoWomen} alt='Two Women Laughing' className='w-screen h-72 rounded-2xl lg:h-[28rem] lg:w-[28rem]'/>
            </div>
            <div className="md:grid md:grid-cols-2 pt-10 lg:grid-cols-1 gap-7 lg:-mt-[7rem] lg:ml-[4rem]">
            <Image src={peopleHolding} alt='' className='md:order-2 lg:order-1 h-[15rem] w-[28rem] lg:h-[12rem] lg:w-[22rem] rounded-2xl'/>
            <Image src={groupOfPeople} alt='' className='order-1 h-[15rem] w-[25rem] lg:h-[20rem] lg:w-[22rem] rounded-2xl'/>
            </div>
            
          </div>
        </section>

        {/* 3 boxes */}
        <section className='mt-10 md:px-10'>
          <div className="md:grid md:grid-cols-2 lg:grid-cols-1 gap-5">
            {/* Box 1 */}
            <div className=" pt-12 pb-6 bg-white px-5 rounded-xl w-[28rem]">
              {/* Image and Dot on the same Row */}
              <div className="grid grid-cols-2">
                {/* Image with background */}
                <div className=""><Image src={flag} alt= '' className='bg-[#FF9E6C] rounded-[0.75rem] p-3 w-12'/></div>

                {/* Dots Image*/}
                <div className="-mt-11 ml-16"><Dots/></div>
              </div>
              {/* Text */}
              <div className="mt-5">
                <b className="">Community Mission</b>
                <p className="mt-2">Our mission is to eradicate unemployability. Here at USC we intend to achieve this by bringing together a community of vibrant people that can depend on each other for growth and career development.</p>
              </div>
            </div>
            {/* Box 2 */}
            <div className="pt-6 bg-white px-5 rounded-xl w-[28rem] md:-mt-[19rem] md:ml-[65rem]">
                {/* Image with background */}
                <div className=""><Image src={diamond} alt= '' className='bg-[#E27083] rounded-[0.75rem] p-3 w-12'/></div>
                {/* Text */}
                <div className="mt-5">
                  <b className="">Community Value</b>
                  <p>Our community values are simple;</p>
                  <ul className="mt-2 list-disc pl-7">
                    <li>Inclusivity</li>
                    <li>Together, and</li>
                    <li>Growth.</li>
                  </ul>
                </div>

                {/* Dots Image*/}
                <p className='ml-[16rem]'><Dots/></p>
              </div>
          </div>
          {/* Box 3 */}
          <div className="pt-12 pb-6 bg-white px-5 rounded-xl w-[28rem] md:-mt-[10rem] mt-6 mx-auto ">
            {/* Image and Dot on the same Row */}
            <div className="grid grid-cols-2">
              {/* Image with background */}
              <div className="mt-8"><Image src={target} alt= '' className='bg-[#836AFE] rounded-[0.75rem] p-3 w-12'/></div>

              {/* Dots Image*/}
              <div className="-mt-5 ml-16"><Dots/></div>
            </div>
            {/* Text */}
            <div className="mt-5">
              <b className="">Community Goal</b>
              <p className="mt-2">At USC, our goal is to provide you with the correct education, tools, chances and especially opportunities, training and platform you would need to become employable.</p>
            </div>
          </div>
        </section>

        {/* Arc 2 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='z-40 relative lg:absolute lg:mt-40'><path fill="#D9D9D9" fill-opacity="1" d="M0,64L80,101.3C160,139,320,213,480,256C640,299,800,309,960,282.7C1120,256,1280,192,1360,160L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

        <section className="lg:-mt-56">
          {/* Undergraduate Student community background */}
          <Image src={white_background} alt='Undergraduate Student community background' className='w-screen -mt-44 lg:mt-[24rem] '/>
          <div className="text-center lg:absolute md:-mt-[22rem] lg:-mt-[32rem]">
            <b className="text-[2.5rem] lg:text-[3.5rem] block">Join the Undergraduate Student<br/> Community</b>
            <small className="pt-5  mx-40 text-[1rem] block text-lg lg:mx-[24rem]">The only procedure required to join our community is to fill the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!</small>
            <button className="bg-[#4A43CB] rounded-[4rem] text-white px-3 py-2 mt-5">Join community <Image src={forwardArrow} alt='' className='inline'/></button>
          </div>
        </section>

        <div className="bg-white py-20 text-center">
          <b className="block text-[2rem]">Community media</b>
          <small className="text-[1rem]">Media from some of our live community events</small>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-4 bg-white px-10 pb-32">
          {/* Image 1 */}
          <div className="text-center">
            <Image src={peoplepicnic} alt='' className='rounded-[2rem]'/>
            <p className="md:-mt-28 text-white font-bold lg:-mt-44 lg:text-xl">Community photos</p>
            <div className="mx-auto lg:ml-[20rem] w-[9rem]"><Button text='See Photos'/></div>
          </div>
          {/* Image 2 */}
          <div className="text-center">
            <Image src={birthday} alt='' className='rounded-[2rem]'/>
            <p className="md:-mt-28 text-white font-bold lg:-mt-44 lg:text-xl">Community videos</p>
            <div className="mx-auto w-[9rem]"><Button text='See Videos'/></div>
          </div>
        </div>

          {/*  */}
        <section className="text-white lg:grid lg:grid-cols-2">
          {/* Column 1 */}
          <div className="bg-[#444185] pl-10 pb-20">
            <p className="text-[2rem] font-bold pt-10">Explore diverse conversation of our community.</p>
            <p className="text-[1.25rem]">Discover engaging articles, stories, and discussions created by our vibrant community as we come together to inspire, learn, and grow.</p>
            <button className="border rounded-[4rem] px-6 py-2 mt-10">Read our community blog</button>
          </div>
          {/* Column 2 */}
          <div className="bg-[#6862D4] pl-10 pb-20">
            <p className="text-[2rem] font-bold pt-10">Need more information about the community?</p>
            <p className="text-[1.25rem]">Our team is always on standby to answer any questions you might have. Contact us today! You can also go through our FAQs for more information.</p>
            <button className="border rounded-[4rem] px-6 py-2 mt-10">Read our community FAQ</button>
          </div>
        </section>

        {/* Dots Image*/}
        <p className="pl-[7rem] bg-white -mt-10 relative -z-10"><Dots/></p>

        {/* Plane Image */}
        <p className="pl-[35rem] bg-white"><Image src={plane2} alt='Hand Drawn Plane'/></p>

        <section className="bg-white px-10 grid md:grid-cols-2 lg:pt-10">
          <div className="">
            <p className="font-bold text-[2rem]">Stay Informed with Our Newsletter!</p>
            <p className="text-[1rem]">Subscribe to our newsletter and never miss an update. Receive exclusive content, latest news, and exciting offers delivered right to your inbox. Join our community and be the first to know!</p>
            <form action="" className="">
              <div className="grid grid-rows-3 gap-4 pt-10">
                <input type="text" name="" className="border rounded-[4rem] px-5 py-1 " placeholder='Full name'/>
                <input type="email" name="" className="border rounded-[4rem] px-5 py-1 " placeholder='Email address'/>
                <input type="submit" value="Subscribe" className='border text-white rounded-[4rem] px-5 py-2.5 bg-[#4A43CB] cursor-pointer'/>
                {/* <div className=""><Button text='Subscribe'/></div> */}
              </div>
            </form>
          </div>
          
          {/* Envelope */}
          <Image src={envelope} alt='' className='float-right ml-40'/>
        </section>
        
        {/* Dots Image*/}
        <p className="bg-white pl-[46rem] relative -z-10 -mb-16"><Dots/></p>
      </body>
    </html>
  )
}

export default Community;