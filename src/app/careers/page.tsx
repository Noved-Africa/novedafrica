import React from 'react'
import Image from 'next/image'
import Head from "next/head"
import wave from '../../../public/images/wave.png'
import group_five from '../../../public/images/group_five.png'
import { Header } from '@/common/components'

const Careers = () => {

   return (
    <>
      <Head>
        
        <title>Careers</title>
      </Head>
      
      <body>
        <Header/>
        <div className='relative -mt-32 -z-10'>
          <Image src={wave} alt='wavy background' className='w-full h-[44rem] relative z-20'/>
          <Image src={group_five} alt='group_five' className='w-full -mt-32'/>
        </div>
        <section>
          <h5 className='text-sm absolute -mt-[48rem] z-30 mx-20'>Careers at Noved Africa</h5>
          <div className='absolute -mt-[40rem] z-30 mx-20'>
            <h1 className='text-3xl'>Welcome to a World of <br/>Possibilities.</h1>
            <h4 className='mt-4'>Come be a part of us!</h4>
            <button>See our openings</button>
          </div>
          <img src=''/>
          <img src=''/>
          <img src=''/>
          <p>The Noved Team</p>
        </section>

        <main>
          <section>
            <div>
              <h2>Why work with Noved Africa?</h2>
              <p>
                Our goal is to tackle unemployability by empowering and equipping undergraduates and fresh graduates with necessary skills, distinctive engagements and remarkable training needed to become and employable. Our team includes inventive, innovative and creative people working together to achieve this goal. Join us and help with our mission.
              </p>
            </div>
            <div>
              <div>
                logo here!!!
                <h2>Collaboration</h2>
                <p>You get to be a part of an inclusive and impactful community. We thrive on collaboration and believe that no one should be left behind.</p>
              </div>
              <div>
                logo here!!!
                <h2>Innovation</h2>
                <p>Noved Africa is an innovative organization. Our mission is built on the desire to empower undergraduate and fresh graduates to become employable graduates and job creators.</p>
              </div>
            </div>
            <div>
              <h2>Our openings</h2>
              <p>Find the perfect spot here at Noved Africa. We are working towards eradicating graduate unemployment in Africa, be a part of it.</p>
            </div>
          </section>
          <section>
            <div>
              <h3>Customer Support Lead</h3>
              <button>Apply now!</button>
              <p>To take up this role, you would be expected to have strong leadership skills. As a customer support lead, you would oversee the day-to-day management of the customer service department. You would also be responsible for creating new policies or procedures that would help raise the quality of the service offered by the customer service department to the users.</p>
              <span>Fulltime | Remote</span>
            </div>
            <div>
              <h3>Front End Developer</h3>
              <button>Apply now!</button>
              <p>As a Front End Developer, implementing visual elements within a web application that are visible to computer users is your responsibility. You are in charge of turning UI/UX wireframes into functional code. A Front End Developer should be able to mix the science of programming and the art of design.</p>
              <span>Contract | Remote</span>
            </div>
            <div>
              <h3>Social Media Manager</h3>
              <button>Apply now!</button>
              <p>Social Media Managers establish an Organization's online presence and brand value. You would make use of videos, photographs, infographics and text posts on social media platforms. Their skill level impacts how well the company can represent its brand image online.</p>
              <span>Fulltime | Remote</span>
            </div>
          </section>
          <p>Our team includes people who are willing to empower others to succeed. We take great pride in our work and put in maximum effort. Ready to join us?</p>
          <button>See our openings</button>
        </main>
      </body>
    </>
  )
}

export default Careers