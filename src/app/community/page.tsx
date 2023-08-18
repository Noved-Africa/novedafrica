import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/common/components'
import Button from '@/common/components/elements/Button/Button'


const Community = () => {

  return(

    <>
      <Header/>

      <Head><title>Community | Noved Africa</title></Head>

      <body>
        <div>
          <small className="">Our Community</small>
          <h2>Come grow with us</h2>
          <p>Join a community of creative individuals who have the same goals as you do. Realize your career goals faster with the Undergraduate Student Community.<br/><br/>Welcome to a world of possibilities!
          </p>
          <Button text='Join our community'/>
        </div>
        <Image src={} alt='' className='
        '/>
        <Image src={} alt='' className='
        '/>
        <Image src={} alt='' className='
        '/>
        <Image src={} alt='' className='
        '/>

        <section className="">
          <div className="">
            <div className="">
              <span className="">ABOUT USC</span>
              <h2 className="">Undergraduate Student<br/>Community</h2>
              <p>The Undergraduate Student Community was created with great intentionality to help undergraduates and graduates alike find like minded people to help them grow in their journey. The Undergraduate Student Community focuses on inclusivity as well as career development. Joining our community will give access to several benefits like; community events, networking, and access to first hand updates about all things NOVED Africa related. You will also gain access to our newsletters where you get information about what is happening in the career world, as well as tips on how to get a job and grow in your career.</p>
            </div>
            <div className="">
              <Image src={} alt=''/>
              <p className="">
              <Image src={} alt=''/>
              <Image src={} alt=''/>
              </p>
            </div>
          </div>
        </section>

        {/* 3 boxes */}
        <section className=''>
          {/* Box 1 */}
          <div className="">
            {/* Image and Dot on the same Row */}
            <div className="">
              {/* Image with background */}
              <div className=""><Image src={} alt= '' className=''/></div>
              {/* Dots */}
              <div className="">
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
              </div>
            </div>
            {/* Text */}
            <div className="">
              <b className="">Community Mission</b>
              <p className="">Our mission is to eradicate unemployability. Here at USC we intend to achieve this by bringing together a community of vibrant people that can depend on each other for growth and career development.</p>
            </div>
          </div>
          {/* Box 2 */}
          <div className="">
            {/* Image and Dot on the same Row */}
            <div className="">
              {/* Image with background */}
              <div className=""><Image src={} alt= '' className=''/></div>
              {/* Text */}
              <div className="">
                <b className="">Community Value</b>
                <ul className="">
                  <li>Inclusivity</li>
                  <li>Together, and</li>
                  <li>Growth.</li>
                </ul>
              </div>
              {/* Dots */}
              <div className="">
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
              </div>
            </div>
          </div>
          {/* Box 3 */}
          <div className="">
            {/* Image and Dot on the same Row */}
            <div className="">
              {/* Image with background */}
              <div className=""><Image src={} alt= '' className=''/></div>
              {/* Dots */}
              <div className="">
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
                <Image src={} alt=''/>
              </div>
            </div>
            {/* Text */}
            <div className="">
              <b className="">Community Goal</b>
              <p className="">At USC, our goal is to provide you with the correct education, tools, chances and especially opportunities, training and platform you would need to become employable.</p>
            </div>
          </div>
        </section>

        {/* Arc 2 */}
        <Image src={} alt='' className=''/>

        <section className="">
          {/* Undergraduate Student community background */}
          <Image src={} alt='' className=''/>
          <div className="">
            <b className="">Join the Undergraduate Student Community</b>
            <small className="">The only procedure required to join our community is to fill the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!</small>
            <a href="" className="">Join community <Image src={} alt=''/></a>
          </div>
        </section>

        <div className="">
          <b className="">Community media</b>
          <small className="">Media from some of our live community events</small>
        </div>

        {/* Image Grid */}
        <div className="">
          {/* Image 1 */}
          <div className="">
            <Image src={} alt=''/>
            <p className="">Community photos</p>
            <Button text='See photos'/>
          </div>
          {/* Image 2 */}
          <div className="">
            <Image src={} alt=''/>
            <p className="">Community videos</p>
            <Button text='See videos'/>
          </div>
        </div>
      </body>
    </>
  )
}

export default Community;