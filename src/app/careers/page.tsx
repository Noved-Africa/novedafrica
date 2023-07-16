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
        <title>Careers</title>
      </Head>
      
      <body className='bg-white font-Albert_sans'>
        <Header/>
        <div className='relative -mt-32 -z-10'>
          <Image src={wave} alt='wavy background' className='w-full h-[48rem] relative z-20'/>
          <Image src={Career_progress} alt='Career_progress' className='bg-transparent absolute -mt-[40rem] ml-[52rem] z-[60]'/>
          <Image src={group_five} alt='group_five' className='w-full -mt-32'/>
        </div>
        <section>
          <h5 className='text-sm absolute font-normal text-[#292929] -mt-[72rem] z-30 mx-[6rem]'>Careers at Noved Africa</h5>
          <div className='absolute -mt-[66rem] z-30 mx-[6rem]'>
            <span className='text-5xl'>Welcome to a World of <br/>Possibilities. <Image src={star_1} alt='star' className='inline'/></span>
            <h4 className='mt-4'>Come be a part of us!</h4>
            <Button text="See Our Openings" />
          </div>
          <span className='bg-[#D2F7F9CC] absolute gap-10 -mt-20 ml-[7rem] py-2 px-4 rounded-3xl font-semibold text-[#3E38A9]'>The Noved Team</span>
        </section>

        <main className='mx-[6rem]'>
          <section>
            <div>
              <h2 className='text-3xl mt-20'>Why work with Noved Africa?</h2>
              <p className='w-1/2 mt-5'>
                Our goal is to tackle unemployability by empowering and equipping undergraduates and fresh graduates with necessary skills, distinctive engagements and remarkable training needed to become and employable. Our team includes inventive, innovative and creative people working together to achieve this goal. Join us and help with our mission.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-11'>
              <div className='px-10 pt-8 pb-16 mt-20 bg-[#EDFCFD]'>
                <Image src={Frame129} alt='logo'/>
                <h2 className='my-3 font-bold'>Collaboration</h2>
                <p>You get to be a part of an inclusive and impactful community. We thrive on collaboration and believe that no one should be left behind.</p>
              </div>
              <div className='px-10 pt-8 pb-16 mt-20 bg-[#F7FFE0]'>
                <Image src={Frame128} alt='logo'/>
                <h2 className='my-3 font-bold'>Innovation</h2>
                <p>Noved Africa is an innovative organization. Our mission is built on the desire to empower undergraduate and fresh graduates to become employable graduates and job creators.</p>
              </div>
            </div>
            <div className='mt-[8rem]'>
              <h2 className='text-3xl font-semibold pb-5 ml-[36rem]'>Our openings</h2>
              <p className='text-center mx-[25rem]'>Find the perfect spot here at Noved Africa. We are working towards eradicating graduate unemployment in Africa, be a part of it.</p>
            </div>
          </section>
          <section className='mt-[6rem] mx-[10rem]'>
            <div className='grid grid-cols-8 bg-[#FAFAFA] rounded'>
              <div className='p-7 col-span-7'>
                <h3 className='text-xl mb-3'>Customer Support Lead</h3>
                <p>To take up this role, you would be expected to have strong leadership skills. As a customer support lead, you would oversee the day-to-day management of the customer service department. You would also be responsible for creating new policies or procedures that would help raise the quality of the service offered by the customer service department to the users.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Fulltime | Remote</p>           
              </div>
              <p><Button text='Apply now!'/></p>
            </div>
            
            <div className='grid grid-cols-8 mt-7 bg-[#FAFAFA] rounded'>
              <div className='p-7 col-span-7'>
                <h3 className='text-xl mb-3'>Front End Developer</h3>
                <p>As a Front End Developer, implementing visual elements within a web application that are visible to computer users is your responsibility. You are in charge of turning UI/UX wireframes into functional code. A Front End Developer should be able to mix the science of programming and the art of design.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Contract | Remote</p>
              </div>
              <p><Button text='Apply now!'/></p>
            </div>
            <div className='grid grid-cols-8 mt-7 bg-[#FAFAFA] rounded'>
              <div className='p-7 col-span-7'>
                <h3>Social Media Manager</h3>
                <p>Social Media Managers establish an Organization's online presence and brand value. You would make use of videos, photographs, infographics and text posts on social media platforms. Their skill level impacts how well the company can represent its brand image online.</p>
                <p className='mt-[1rem] text-[#3E38A9]'>Fulltime | Remote</p>
              </div>
              <p><Button text='Apply now!'/></p>
            </div>
          </section>
          <div className='text-center my-[5rem] mx-[25rem]'>
            <p>Our team includes people who are willing to empower others to succeed. We take great pride in our work and put in maximum effort. Ready to join us?</p>
            <Button text='See Our Openings'/>
          </div>
          
        </main>
      </body>
    </>
  )
}

export default Careers