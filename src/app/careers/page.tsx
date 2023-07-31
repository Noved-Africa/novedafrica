import React from 'react'
import Image from 'next/image'
import Head from "next/head"
import wave from '../../../public/images/wave.png'
import Career_progress from '../../../public/images/Career_progress.png'
import group_five from '../../../public/images/group_five.png'
import { Header } from '@/common/components'
import Button from '@/common/components/elements/Button/Button'
import Frame128 from '../../../public/images/Frame128.png'
import Frame129 from '../../../public/images/Frame129.png'
import star_1 from '../../../public/images/star_1.png'

const Careers = () => {

   return (
    <>
      <Head>
				<title>Careers | Noved Africa</title>
			</Head>
      
      <body className='bg-white font-Albert_sans'>
        <Header/>
        <div className='relative -mt-36 -z-10'>
          <Image src={wave} alt='wavy background' className='w-screen h-[48rem] md:-mt-[15rem]  relative z-20'/>
          <Image src={Career_progress} alt='Career_progress' className='absolute lg:-mt-[34rem] md:-mt-[33rem] lg:w-[22rem] lg:ml-[58rem] z-[60] md:w-[14rem] md:ml-[32rem] xs:w-[12rem] xs:-mt-[19rem] xs:ml-[8rem]'/>
          <Image src={group_five} alt='group_five' className='w-full -mt-32 md:-mt-25 md:h-[24rem] lg:h-[35rem] xs:h-[18rem]'/>
        </div>
        <section>
          <h5 className='text-sm absolute font-normal text-[#292929] lg:-mt-[58rem] md:-mt-[43rem] z-30 xs:-mt-[48rem] xs:ml-7 xs:text-xs mx-[6rem] lg:ml-[6rem]'>Careers at Noved Africa</h5>
          <div className='absolute lg:-mt-[54rem] md:-mt-[39rem] lg:ml-[10rem] xs:-mt-[42rem] z-30 mx-[6rem]'>
            <p className='lg:text-5xl md:text-4xl xs:text-4xl xs:-mx-[4rem]'>Welcome to a World of <br/>Possibilities. <Image src={star_1} alt='star' className='inline'/></p>
            <h4 className='mt-4 md:text-sm xs:text-xs xs:-ml-14 xs:text-[1.2rem]'>Come be a part of us!</h4>
            <p className='md:mt-10 xs:-ml-[4rem] md:w-fit md:-ml-20 xs:mt-7 lg:-ml-[3rem] xs:w-[28rem]'><Button text="See Our Openings" /></p>
          </div>
          <span className='bg-[#D2F7F9CC] absolute  -mt-20 ml-[7rem] lg:ml-[7rem] py-2 px-4 rounded-3xl font-semibold lg:text-lg md:font-semi-bold md:ml-[4rem] md:-mt-14 text-[#3E38A9] xs:ml-[3rem] xs:text-xs xs:-mt-[3rem]'>The Noved Team</span>
        </section>

        <main className='mx-[6rem] lg:mx-[9rem] md:mx-[6rem]'>
          <section>
            <div>
              <h2 className='text-3xl mt-20 xs:-mx-[4rem]'>Why work with Noved Africa?</h2>
              <p className='w-1/2 md:w-5/6 xs:w-[26rem] xs:-ml-16 mt-5 '>
                Our goal is to tackle unemployability by empowering and equipping undergraduates and fresh graduates with necessary skills, distinctive engagements and remarkable training needed to become and employable. Our team includes inventive, innovative and creative people working together to achieve this goal. Join us and help with our mission.
              </p>
            </div>
            <div className='lg:grid grid-cols-2 gap-11 xs:-mx-[4rem]'>
              <div className='px-10 pt-8 pb-16 mt-20 md:mt-10 bg-[#EDFCFD]'>
                <Image src={Frame129} alt='logo'/>
                <h2 className='my-3 font-bold'>Collaboration</h2>
                <p>You get to be a part of an inclusive and impactful community. We thrive on collaboration and believe that no one should be left behind.</p>
              </div>
              <div className='px-10 pt-8 pb-16 mt-20 md:mt-10 bg-[#F7FFE0]'>
                <Image src={Frame128} alt='logo'/>
                <h2 className='my-3 font-bold'>Innovation</h2>
                <p>Noved Africa is an innovative organization. Our mission is built on the desire to empower undergraduate and fresh graduates to become employable graduates and job creators.</p>
              </div>
            </div>
            <div className='mt-[8rem]'>
              <h2 className='text-3xl font-semibold xs:ml-12 pb-5 lg:ml-[36rem] md:ml-[12rem]'>Our openings</h2>
              <p className='text-center lg:mx-[25rem]'>Find the perfect spot here at Noved Africa. We are working towards eradicating graduate unemployment in Africa, be a part of it.</p>
            </div>
          </section>
          <section className='mt-[6rem] lg:mx-[10rem] xs:-mx-[4rem]'>
            <div className='lg:grid grid-cols-8 bg-[#FAFAFA] sm:pb-6 rounded-lg'>
              <div className='p-7 col-span-7'>
                <h3 className='text-xl mb-3'>Customer Support Lead</h3>
                <p>To take up this role, you would be expected to have strong leadership skills. As a customer support lead, you would oversee the day-to-day management of the customer service department. You would also be responsible for creating new policies or procedures that would help raise the quality of the service offered by the customer service department to the users.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Fulltime | Remote</p>           
              </div>
              <p><Button text='Apply now!'/></p>
            </div>
            
            <div className='lg:grid grid-cols-8 mt-7 bg-[#FAFAFA] sm:pb-6 rounded-lg'>
              <div className='p-7 col-span-7'>
                <h3 className='text-xl mb-3'>Front End Developer</h3>
                <p>As a Front End Developer, implementing visual elements within a web application that are visible to computer users is your responsibility. You are in charge of turning UI/UX wireframes into functional code. A Front End Developer should be able to mix the science of programming and the art of design.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Contract | Remote</p>
              </div>
              <p><Button text='Apply now!'/></p>
            </div>
            <div className='lg:grid grid-cols-8 mt-7 bg-[#FAFAFA] sm:pb-6 rounded-lg'>
              <div className='p-7 col-span-7'>
                <h3 className='text-xl mb-3'>Social Media Manager</h3>
                <p>Social Media Managers establish an Organization's online presence and brand value. You would make use of videos, photographs, infographics and text posts on social media platforms. Their skill level impacts how well the company can represent its brand image online.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Fulltime | Remote</p>
              </div>
              <p><Button text='Apply now!'/></p>
            </div>
          </section>
          <div className='text-center my-[5rem] lg:mx-[25rem]'>
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


// make the top component absolut and the makt it be under the nav 