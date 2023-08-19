import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/common/components'
import Button from '@/common/components/elements/Button/Button'
import Dots from '@/common/components/elements/Dots/dot'
import plane2 from '../../../public/images/plane2.png'
import people from '../../../public/images/plane2.jpg'
import heart from '../../../public/images/heart.jpg'
import smileyFace from '../../../public/images/smileyFace.jpg'
import envelope from '../../../public/images/envelope.jpg'
import forwardArrow from '../../../public/images/forwardArrow.jpg'
import target from '../../../public/images/target.jpg'
import diamond from '../../../public/images/diamond.jpg'
import flag from '../../../public/images/flag.jpg'
import birthday from '../../../public/images/birthday.jpeg'
import peoplepinic from '../../../public/images/peoplepinic.jpeg'
import twoWomen from '../../../public/images/twoWomen.jpg'
import peopleHolding from '../../../public/images/peopleHolding.jpg'
import groupOfPeople from '../../../public/images/groupOfPeople.jpg'
import white_background from '../../../public/images/white_background.png'


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
        <Image src={heart} alt='' className='
        '/>
        <Image src={heart} alt='' className='
        '/>
        <Image src={people} alt='' className='
        '/>
        <Image src={smileyFace} alt='' className='
        '/>
        <Image src={smileyFace} alt='' className='
        '/>

        {/* Arc 1 */}
        {/* Insert Blob Here */}

        <section className="">
          <div className="">
            <div className="">
              <span className="">ABOUT USC</span>
              <h2 className="">Undergraduate Student<br/>Community</h2>
              <p>The Undergraduate Student Community was created with great intentionality to help undergraduates and graduates alike find like minded people to help them grow in their journey. The Undergraduate Student Community focuses on inclusivity as well as career development. Joining our community will give access to several benefits like; community events, networking, and access to first hand updates about all things NOVED Africa related. You will also gain access to our newsletters where you get information about what is happening in the career world, as well as tips on how to get a job and grow in your career.</p>
            </div>
            <div className="">
              <Image src={twoWomen} alt=''/>
              <p className="">
              <Image src={peopleHolding} alt=''/>
              <Image src={groupOfPeople} alt=''/>
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
              <div className=""><Image src={flag} alt= '' className=''/></div>

              {/* Dots Image*/}
              <Dots/>
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
              <div className=""><Image src={diamond} alt= '' className=''/></div>
              {/* Text */}
              <div className="">
                <b className="">Community Value</b>
                <ul className="">
                  <li>Inclusivity</li>
                  <li>Together, and</li>
                  <li>Growth.</li>
                </ul>
              </div>

              {/* Dots Image*/}
              <Dots/>
            </div>
          </div>
          {/* Box 3 */}
          <div className="">
            {/* Image and Dot on the same Row */}
            <div className="">
              {/* Image with background */}
              <div className=""><Image src={target} alt= '' className=''/></div>

              {/* Dots Image*/}
              <Dots/>
            </div>
            {/* Text */}
            <div className="">
              <b className="">Community Goal</b>
              <p className="">At USC, our goal is to provide you with the correct education, tools, chances and especially opportunities, training and platform you would need to become employable.</p>
            </div>
          </div>
        </section>

        {/* Arc 2 */}
        {/* Insert Blob Here */}

        <section className="">
          {/* Undergraduate Student community background */}
          <Image src={white_background} alt='Undergraduate Student community background' className=''/>
          <div className="">
            <b className="">Join the Undergraduate Student Community</b>
            <small className="">The only procedure required to join our community is to fill the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!</small>
            <a href="" className="">Join community <Image src={forwardArrow} alt=''/></a>
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
            <Image src={peoplepinic} alt=''/>
            <p className="">Community photos</p>
            <Button text='See photos'/>
          </div>
          {/* Image 2 */}
          <div className="">
            <Image src={birthday} alt=''/>
            <p className="">Community videos</p>
            <Button text='See videos'/>
          </div>
        </div>

          {/*  */}
        <section className="">
          {/* Column 1 */}
          <div className="">
            <b className="">Explore diverse conversation of our community.</b>
            <p className="">Discover engaging articles, stories, and discussions created by our vibrant community as we come together to inspire, learn, and grow.</p>
            <a href="" className="">Read our community blog</a>
          </div>
          {/* Column 2 */}
          <div className="">
            <b className="">Need more information about the community?</b>
            <p className="">Our team is always on standby to answer any questions you might have. Contact us today! You can also go through our FAQs for more information.</p>
            <a href="" className="">Read our community FAQ</a>
          </div>
        </section>

        {/* Dots Image*/}
        <p className=""><Dots/></p>

        {/* Plane Image */}
        <Image src={plane2} alt='Hand Drawn Plane'/>

        <section className="">
          <div className="">
            <b className="">Stay Informed with Our Newsletter!</b>
            <p className="">Subscribe to our newsletter and never miss an update. Receive exclusive content, latest news, and exciting offers delivered right to your inbox. Join our community and be the first to know!</p>
            <form action="" className="">
              <div className="">
                <input type="text" name="" className="" placeholder='Full name'/>
                <input type="email" name="" className="" placeholder='Email address'/>
                <input type="submit" value="Subscribe" className=''/>
              </div>
            </form>
          </div>
          
          {/* Envelope */}
          <Image src={envelope} alt=''/>
        </section>
        
        {/* Dots Image*/}
        <p className=""><Dots/></p>
      </body>
    </>
  )
}

export default Community;