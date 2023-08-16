import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '@/common/components';
import OurStory from "../../../public/images/ourstory.jpeg";
import insider from "../../../public/images/insider.jpeg";
import fivePlus from "../../../public/images/fivePlus.png";
import oneHarsh from "../../../public/images/oneHarsh.jpg";
import community from "../../../public/images/community.png";
import dash from "../../../public/images/dash.jpg";
import testimonialsText from "../../../public/images/testimonialsText.png";
import Rectangle87 from "../../../public/images/Rectangle87.png";
// import { HiArrowRight } from "react-icons/hi";
import TranslateTestimonies from '../../common/components/elements/Translation/page'

const Testimonials = () => {

  return(
    <>
      <Head><title>Testimonials</title></Head>

      <body>
      <Header/>
      <div className=' pt-[70px] md:pt-[98px] '>
				<section className=' text-center '>
					<div className='pt-20 text-center -mt-40  md:py-16 '>
            <Image src={Rectangle87} alt='' className='w-screen h-[38rem]'/>
						<div className='absolute -mt-[22rem] md:ml-10 lg:ml-[28rem]'>
              <h2 className=' faq_heading mb-4 text-[30px] font-bold  md:text-[54px]'>
                BUA Testimonials
              </h2>
              <p className=' mx-auto max-w-2xl text-center text-sm md:text-[16px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
                tempor feugia
              </p>
            </div>
					</div>
				</section>
				<section className=' lg:flex flex-row justify-between gap-[50px] px-5 py-[34px] text-black md:px-[206px] md:py-[68px] md:grid ml-[10rem]'>
					<div className=' text-center'>
						<Image src={oneHarsh} alt=''/>
						<p className=' text-sm pt-10 -ml-20 font-bold md:text-[24px] '>
							Campus Community
						</p>
					</div>

					<div className=' text-center '>
          <Image src={fivePlus} alt=''/>
						<p className=' text-sm font-bold md:text-[24px] pt-10 -ml-20'>
							Campus events yearly
						</p>
					</div>

					<div className=' text-center '>
            <Image src={oneHarsh} alt=''/>
						<p className=' text-sm font-bold md:text-[24px] pt-10 -ml-16'>
							Job marketplace
						</p>
					</div>
				</section>

				<section className='lg:flex flex-col py-12 px-4 md:flex-row md:px-[64px]'>

          <div className='lg:w-[55rem] md:mx-5 rounded-lg md:block order-2'>
              <Image
                src={OurStory}
                alt=''
                className='lg:h-[20rem] md:h-[28rem] object-cover object-center '
              />
            </div>
					<div className='mr-32 lg:w-[50rem] space-y-4 lg:mt-0 md:mt-24 order-1'>
						<div className=' flex items-center lg:ml-16 lg:mb-8 '>
							<span className=' h-1 w-8 bg-black lg:ml-0 ml-[15rem] md:ml-[15rem]'></span>
              <Image src={testimonialsText} alt='' className='md:ml-4'/>
						</div>

						<h2 className=' faq_heading text-lg font-bold md:text-[2rem] md:ml-1 md:w-[42rem] text-center'>
							Our mission is to empower young African undergraduates and fresh
							graduates
						</h2>
						<p className=' text-sm md:text-[16px] w-11/12 md:ml-7 md:w-[37rem] text-center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit amet, consectetur adipiscing elit. Quis posu
							adipiscing coallis sit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Quis posuere adipiscing coallis sit. Non, nunc
							adipiscing mi amet tempor dolor sit amet, consectetur adipiscing
							elit. Quis posu adipiscing coallis sit.Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Quis posuere adipiscing coallis sit.
							Non, nunc adipiscing mi amet tempor dolor sit amet, consectetur
							adipiscing elit. Quis posu adipiscing coallis sit.
						</p>
					</div>
          <div className=' h-[405px] w-full rounded-lg py-4 xs:hidden lg:visible'>
							<Image
								src={OurStory}
								alt=''
								className=' h-full  rounded-[10px] object-cover object-center '
							/>
						</div>
				</section>

				<section className='bg-[#FAFAFA] px-4 py-10 md:py-20 md:px-[100px] '>
					<div className=' mb-16 text-center md:mb-10'>
						<h2 className='  faq_heading mb-4 text-2xl font-bold md:mb-9 md:text-[48px]'>
							From the <span className=''>INSIDERS</span>
						</h2>
						<p className=' mx-auto text-sm  md:text-[16px] lg:w-6/12'>
							Lorem ipsum dolor sit amet, consectetur nunc adipiscing mi amet adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit.
						</p>
					</div>

					<div className=' '>
						<div className=' lg:grid grid-cols-2 content-center items-center gap-[70px]'>
							<div className=' '>
								<Image
									src={insider}
									alt=''
									className=' h-full rounded-[10px] md:w-[52rem]'
								/>
							</div>

							<div className='space-y-4 md:space-y-6 lg:-mt-14 md:mt-20'>
								<div className=' flex items-center '>
									<span className=' mr-4  h-1 w-8 bg-black '></span>
                  <Image src={community} alt='' className=''/>
								</div>
								<h2 className=' faq_heading text-[20px] font-bold md:text-[30px] '>
									“Extraordinary”
								</h2>
								<p className=' text-sm md:text-[16px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
									posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
									tempor dolor sit amet, consectetur adipiscing elit. Quis posu
									scing coallis sit.
								</p>
                <p className='font-bold '><Image src={dash} alt='' className='inline mr-5'/>Slime Thugger</p>
							</div>
						</div>
						{/* <div>pagination</div> */}
					</div>
				</section>

				<section className=' py-10 md:py-20'>
					<div className=' text-center'>
						<h2 className='faq_heading mb-4 text-2xl font-bold md:mb-9 md:text-[48px]'>
							Around the <span className=''>WORLD</span>
						</h2>
						<p className=' mx-auto text-sm md:w-1/2  md:text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit.
						</p>
					</div>

					{/* <div className=' px-4 py-10 md:py-20 md:px-[100px]'> */}
						{/*  */}
					{/* </div> */}
				</section>
				<TranslateTestimonies/>
				{/* <section className=' px-4 py-[141px] md:px-[100px]'>
					<div className='  text-center'>
						<h1 className=' faq_heading mb-6 text-2xl font-bold md:text-[54px]'>
							Join the BUA community
						</h1>
						<p className=' mx-auto mb-12 text-sm md:mb-16 md:w-3/4 md:text-[]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing convallis sit. Non, nunc adipiscing mi amet
							tempor feugia
						</p>
						<div className=' flex justify-center '>
							<button className=' flex h-fit items-center justify-center self-center rounded-[3px] bg-[#218B39] py-2 px-[23px] text-white'>
								Visit community page <HiArrowRight className=' ml-3' />
							</button>
						</div>
					</div>
				</section> */}
			</div>
      </body>
    </>

  )
}

export default Testimonials;