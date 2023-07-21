import React from 'react'
import Image from 'next/image'
import Head from "next/head"
import dart from '../../../public/images/dart.png'
import man from '../../../public/images/man.png'
import picnic from '../../../public/images/picnic.png'
import { Header } from '@/common/components'
import Button from '@/common/components/elements/Button/Button'
// import Number from '@/common/components/elements/Number/Number'
import plane from '../../../public/images/plane.png'
import one from '../../../public/images/one.png'
import two from '../../../public/images/two.png'
import three from '../../../public/images/three.png'
import four from '../../../public/images/four.png'
import white_background from '../../../public/images/white_background.png'
import Gallery from '@/common/components/elements/Gallery/Gallery';


const images = [
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
  '../../../public/images/two.png',
];

const OurStory = () => {
	return (
		<>
			<Head>
				<title>Our-Story</title>
			</Head>

			<body className='font-Albert_sans'>
					<Image src={picnic} alt='Career growth' className='-mt-36 -z-10 md:mt-0 w-screen xs:h-[30rem]'/>
				<div className='absolute xs:-mt-[24rem] xs:mx-10 text-white'>
				<p className='text-xs'>Our Story</p>
				<h2 className='xs:mt-28 font-bold md:text-4xl text-2xl text-center'>Your career growth, our<br className='md:hidden'/> priority at <br className='md:visible'/> Noved<br className='md:hidden'/> Africa</h2>
				<p className='text-center xs:mt-4 xs:text-sm md:w-3/4 md:ml-24'>All resources needed to help you grow career-wise and fit for business and global jobs are here. Stay connected, you are at the right place!</p>
				<p className='md:w-1/4 mx-auto md:mt-4'><Button text='About Noved Africa'/></p>
			</div>

			<section className='xs:mx-5 mt-20 font-Albert_sans lg:grid grid-cols-2 gap-[5rem]'>
				<div className='lg:ml-20 lg:mt-14'>
					<h3 className='text-[#4A43CB] xs:text-md'>ABOUT US</h3>
					<p className='font-semibold xs:text-3xl'>Career. Opportunity. Growth</p>
					<p className='xs:mt-5 lg:text-2xl'>Noved Africa was born out of a burning desire to solve a single problem, unemployability. We are a team of strong-willed individuals dedicated to equipping undergraduates and fresh graduates with valuable employable skills.</p>
				</div>
				<Image src={man} alt='Man Talking' className='xs:mt-10 lg:h-[15rem]'/>
			</section>

			<section className='font-Albert_sans xs:mt-16 bg-[#F0EFFB] xs:py-12 xs:px-5'>
				<div>
					<p className='text-xl font-semibold text-center'>Why Noved Africa?</p>
					<p className='text-center xs:pt-5 xs:pb-10 lg:w-1/2 lg:mx-auto'>We deliver full spectrum resources to upskill students for employability purposes. Our services will help achieve becoming a job creator and becoming employable after graduation among other things.</p>
				</div>
				<div className='lg:grid grid-cols-2'>
					<div className='mx-8 lg:-mr-10 md:grid md:grid-cols-2'>
						<Image src={dart} alt='dart' className='rounded-t-xl md:rounded-r-none xs:w-screen xs:mx-auto xs:h-[15rem]'/>
						<p className='bg-[#E1E3EA] xs:pt-5 px-7 pb-36 md:pb-24'>
							<h3 className='font-semibold text-xl pb-3'>Our Vision</h3>
							<span>We deliver full spectrum resources to upskill students for employability purposes.</span>
						</p>
					</div>
					<div className='mx-8 md:grid grid-cols-2'>
						<Image src={plane} alt='plane' className='xs:w-screen md:order-last lg:order-none xs:mx-auto xs:h-[15rem]'/>
						<p className='bg-[#E1E3EA] xs:pt-5 px-7 pb-10 rounded-b-lg'>
							<h3 className='font-semibold text-xl pb-3'>Our Vision</h3>
							<span>Our mission at Noved Africa is to empower African undergraduates and fresh graduates to become job-ready talents, entrepreneurs, and leaders by providing the right education, resources, opportunities, support, and platforms.</span>
						</p>
				</div>
				</div>
			</section>

			<section className='xs:mx-3 md:mx-10'>
				<h4 className='text-[#4A43CB] md:mx-6 xs:text-xs xs:mt-14 xs:mb-1'>OUR CORE VALUES</h4>
				<b className='text-xl md:mx-6'>Our values are a way of living and creating not just words.</b>
				<div className='xs:mt-12 md:mx-6 grid grid-cols-2 gap-[5rem] place-content-center'>
					<div className='bg-[#FAF0F4] rounded-xl xs:px-6 py-7 mb-10'>
						<Image src={one} alt='one' className='xs:w-10 ml-3 mb-4'/>
						<b className='text-xl'>Community</b>
						<p>We value the power of community and recognize the importance of collaboration and connection in achieving our mission. A supportive network to help and inspire you to achieve your goal.</p>
					</div>
					<div className='bg-[#FAFFEB] rounded-xl xs:px-6 py-7 mb-10'>
						<Image src={two} alt='two' className='xs:w-10 ml-3 mb-4'/>
						<b className='text-xl'>Diversity & Inclusion</b>
						<p>We strive to create an environment that welcomes and embraces individuals from different backgrounds, cultures, and experiences. We believe diversity and inclusion leads to greater innovation and creativity.</p>
					</div>
					<div className='bg-[#F0FAF9] rounded-xl xs:px-6 py-7 mb-10'>
						<Image src={three} alt='three' className='xs:w-10 ml-3 mb-4'/>
						<b className='text-xl'>Empowerment</b>
						<p>Through our efficient empowerment system, we enable you to take control of your learning and professional development. We pride ourselves on providing the resources, tools, and guidance for social fitness and job readiness.</p>
					</div>
					<div className='bg-[#FCFDED] rounded-xl xs:px-6 py-7 mb-10'>
						<Image src={four} alt='four' className='xs:w-10 ml-3 mb-4'/>
						<b className='text-xl'>Fun</b>
						<p>We are not just hard workers at Noved Africa, we’re also fun workers! We believe that work does not have to be boring, it’s okay to have a little fun. Afterall, all work and no play…</p>
					</div>
				</div>
			</section>

			<section>
				<Image src={white_background} alt='background' className='xs:h-[30rem] lg:w-screen'/>
				<div className='text-center absolute mx-4 lg:mx-[20rem] xs:-mt-[22rem]'>
					<p className='text-3xl font-semibold'>Join the Undergraduate<br/> Student Community</p>
					<p className='w-10/12 mx-auto mt-4 mb-8'>The only procedure required to join our community is to fill the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!</p>
					<p className='w-fit mx-auto'><Button text='Join the community ->'/></p>
				</div>
			</section>

			<section className='mt-14 mb-24 xs:ml-5 lg:ml-[5rem]'>
				<h4 className='text-[#4A43CB]'>OUR PARTNERS</h4>
				<p className='text-xl font-semibold'>Organisations we have worked with to achieve our mission & vision.</p>
				<Gallery images={images} />
			</section>
			</body>
		</>
	)
};

export default OurStory;
