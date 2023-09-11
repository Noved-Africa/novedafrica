import React from 'react'
import Image from 'next/image'
import Head from "next/head"
import wave from '../../../public/images/wave.png'
import Career_progress from '../../../public/images/Career_progress.png'
import group_five from '../../../public/images/group_five.png'
import { Header } from '@/common/components'
import Button from '@/common/components/elements/Button/Button'
import Frame128 from '../../../public/images/Frame 194.png'
// import Frame129 from '../../../public/images/Frame129.png'
import star_1 from '../../../public/images/star_1.png'
import bulb from '../../../public/images/bulb.png'
import peopleLogo from '../../../public/images/peopleLogo.png'

const Careers = () => {

   return (
    <>
      <Head>
				<title>Careers | Noved Africa</title>
			</Head>
      
      <body className='bg-white font-Albert_sans'>
        <Header/>
        <div className='relative -mt-36 -z-10'>
          <Image src={wave} alt='wavy background' className='w-screen h-[48rem] xs:h-[56rem] lg:mt-[7rem] md:-mt-[15rem] relative z-20'/>
          <Image src={Career_progress} alt='Career_progress' className='absolute lg:-mt-[42rem] md:-mt-[27rem] lg:w-[22rem] lg:ml-[48rem] z-[60] md:w-[12rem] md:ml-[22rem] xs:w-[12rem] xs:-mt-[21rem] xs:ml-[3rem]'/>
          <Image src={group_five} alt='group_five' className='w-full -mt-32 md:-mt-25 md:h-[24rem] lg:h-[35rem] xs:h-[18rem]'/>
        </div>
        <section>
          <h5 className='text-sm xs:text-xs absolute font-normal text-[#292929] lg:-mt-[72rem] md:ml-[2rem] md:-mt-[49rem] z-30 xs:-mt-[50rem] xs:ml-[2rem] xs:text-xs mx-[6rem] lg:ml-[6.5rem]'>Careers at Noved Africa</h5>
          <div className='absolute lg:-mt-[54rem] md:-mt-[46rem] md:ml-[7rem] lg:ml-[10.5rem] xs:-mt-[50rem] z-30 xs:ml-[7rem] mx-[6rem]'>
            <p className='lg:text-5xl md:text-[1.8rem] xs:text-2xl xs:mt-24 xs:text-xl font-semibold xs:-ml-[5rem] lg:-mt-[7.5rem]'>Welcome to a World of <br/>Possibilities. <Image src={star_1} alt='star' className='inline'/></p>
            <h4 className='mt-4 md:text-sm xs:text-xs xs:-ml-[5rem] xs:text-[1.2rem]'>Come be a part of us!</h4>
            <p className='lg:mt-2 md:mt-10 xs:-ml-[6rem] md:w-fit  md:-ml-20 xs:mt-7 lg:-ml-[4rem] xs:w-[16rem]'><Button text="See Our Openings" /></p>
          </div>
          <span className='bg-[#D2F7F9CC] absolute  -mt-20 ml-[7rem] lg:ml-[7rem] py-2 px-4 rounded-3xl font-semibold lg:text-lg md:font-semi-bold md:ml-[4rem] md:-mt-14 text-[#3E38A9] xs:ml-[2rem] xs:py-1 xs:text-xs xs:-mt-[2rem]'>The Noved Team</span>
        </section>

        <main className='xs:mx-[6rem] lg:mx-[9rem] xs:-mt-7'>
          <section>
            <div>
              <h2 className='text-3xl mt-20 xs:text-xl font-semibold xs:-mx-[5rem]'>Why work with Noved Africa?</h2>
              <p className='lg:w-[38rem] md:w-[42rem] xs:text-sm xs:w-[16rem] xs:-ml-[5rem] mt-5 '>
                Our goal is to tackle unemployability by empowering and equipping undergraduates and fresh graduates with necessary skills, distinctive engagements and remarkable training needed to become and employable. Our team includes inventive, innovative and creative people working together to achieve this goal. Join us and help with our mission.
              </p>
            </div>
            <div className='lg:grid grid-cols-2 gap-11 xs:-mx-[5rem]'>
              <div className='px-6 pt-8 pb-16 mt-20 md:mt-10 bg-[#EDFCFD]'>
                <Image src={peopleLogo} alt='logo'/>
                <h2 className='my-3 font-bold'>Collaboration</h2>
                <p className='xs:text-sm'>You get to be a part of an inclusive and impactful community. We thrive on collaboration and believe that no one should be left behind.</p>
              </div>
              <div className='px-6 pt-8 pb-16 mt-20 md:mt-10 bg-[#F7FFE0]'>
                <Image src={bulb} alt='logo'/>
                <h2 className='my-3 font-bold'>Innovation</h2>
                <p className='xs:text-sm'>Noved Africa is an innovative organization. Our mission is built on the desire to empower undergraduate and fresh graduates to become employable graduates and job creators.</p>
              </div>
            </div>
            <div className='mt-[8rem] xs:-ml-[6rem] xs:w-[18rem] md:w-screen'>
              <h2 className='lg:text-3xl text-3xl font-semibold xs:text-xl pb-5 lg:ml-[31rem] xs:ml-[6rem] md:ml-[13rem]'>Our openings</h2>
              <p className='text-center xs:text-sm xs:ml-4 xs:w-[16rem] xs:text-[14px] md:mx-[4rem] lg:mx-[24rem] lg:ml-[20rem]'>Find the perfect spot here at Noved Africa. We are working towards eradicating graduate unemployment in Africa, be a part of it.</p>
            </div>
          </section>
          <section className='mt-[6rem] lg:mx-[1rem] xs:-mx-[3rem]'>
            <div className='lg:flex bg-[#FAFAFA] xs:-ml-5 sm:pb-6 rounded-lg'>
              <div className='p-7 xs:-ml-4 lg:mr-[25rem] flex-auto lg:w-[34rem]'>
                <h3 className='text-xl xs:text-lg mb-3 font-semibold'>Customer Support Lead</h3>
                <p className='xs:text-sm'>To take up this role, you would be expected to have strong leadership skills. As a customer support lead, you would oversee the day-to-day management of the customer service department. You would also be responsible for creating new policies or procedures that would help raise the quality of the service offered by the customer service department to the users.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Fulltime | Remote</p>           
              </div>
              <p className='flex-auto lg:w-[10rem]'><Button text='Apply now!'/></p>
            </div>
            
            <div className='lg:flex xs:-ml-5 mt-7 bg-[#FAFAFA] sm:pb-6 rounded-lg'>
              <div className='p-7 xs:-ml-4 lg:mr-[25rem] flex-auto lg:w-[34rem]'>
                <h3 className='text-xl mb-3 xs:text-lg font-semibold'>Front End Developer</h3>
                <p className='xs:text-sm'>As a Front End Developer, implementing visual elements within a web application that are visible to computer users is your responsibility. You are in charge of turning UI/UX wireframes into functional code. A Front End Developer should be able to mix the science of programming and the art of design.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Contract | Remote</p>
              </div>
              <p className="flex-auto lg:w-[10rem]"><Button text='Apply now!'/></p>
            </div>
            <div className='lg:flex xs:-ml-5 mt-7 bg-[#FAFAFA] sm:pb-6 rounded-lg'>
              <div className='p-7 xs:-ml-4 lg:mr-[25rem] flex-auto lg:w-[34rem]'>
                <h3 className='text-xl xs:text-lg mb-3 font-semibold'>Social Media Manager</h3>
                <p className='xs:text-sm'>Social Media Managers establish an Organization's online presence and brand value. You would make use of videos, photographs, infographics and text posts on social media platforms. Their skill level impacts how well the company can represent its brand image online.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Fulltime | Remote</p>
              </div>
              <p className='flex-auto lg:w-[10rem]'><Button text='Apply now!'/></p>
            </div>
          </section>
          <div className='text-center md:-ml-[3rem] md:w-[28rem] lg:w-[32rem] lg:ml-[12rem] xs:w-[16rem] xs:text-sm xs:-ml-[4.7rem] my-[5rem] lg:mx-[5rem]'>
            <p>Our team includes people who are willing to empower others to succeed. We take great pride in our work and put in maximum effort. Ready to join us?</p>
            {/* <p className='lg:ml-[15rem]'><Button text='See Our Openings'/></p> */}
            <button className="bg-[#4A43CB] hover:bg-blue-600 text-white lg:-mx-4 sm:mt-5 font-medium lg:mt-9 py-2 px-4 xs:mt-4 rounded-3xl">
      See Our Openings
    </button>
          </div>
          
        </main>
      </body>
    </>
  )
}

export default Careers
