import React from "react";
import Image from "next/image";
import { bgMobile, bgbg, ourStoryBg, ourStoryBgMobile, ourStoryBgTablet, aboutImage, dotGrid, gradient, dart, dart2, plane, plane2 } from "@/assets";



const OurStory = () => {
	return (
		<>
			<div className=" relative bg-mobile-bg md:bg-tablet-bg ">
				<Image src={ourStoryBg} alt="bg" className=" absolute -z-30 w-full h-full sm:object-contain " layout="responsive" srcSet={`${ourStoryBgMobile} 640w, ${ourStoryBgTablet} 768w, ${ourStoryBg} 1024w`} />

				<div className=" lg:pt-32 lg:px-[100px] pt-32  ">
					<p className=" lg:px-0 px-8 w-fit lg:text-[18px] sm:text-xs text-white/80 ">Our Story</p>

					<div className=" text-white lg:max-w-[823px] sm:max-w-[623px]  mx-auto lg:py-40 sm:py-10  text-center justify-center items-center flex flex-col " >
						<h1 className=" lg:text-6xl md:px-4 lg:leading-[67px] font-semibold  md:text-[40px] leading-[48px] ">Your career growth, our priority at Noved  Africa</h1>
						<p className=" lg:text-lg lg:leading-7 md:mt-4 max md:max-w-[560px] text-center ">All resources needed to help you grow career-wise and fit for business and global jobs are here. Stay connected, you are at the right place!</p>
						<button className=" px-6 py-3 bg-[#4A43CB] rounded-full mt-10 w-fit ">About Noved Africa</button>
					</div>
				</div>


			</div>
			<section className=" lg:px-[100px] sm:px-8 px-4 lg:py-[112px] sm:py-20 py-16 relative ">

				<div className=" grid lg:grid-cols-2 grid-cols-1 justify-center items-center relative gap-y-10 ">
					<div className=" lg:max-w-lg ">
						<p className=" text-[#4A43CB] text-sm sm:text-[16px] ">ABOUT US</p>
						<h1 className=" lg:text-[40px] md:text-[32px] text-[28px] font-semibold leading-[48px]  ">Career. Opportunity. Growth.</h1>
						<p className=" lg:mt-4 mt-3 text-[#424242]/80 text-lg text-[16px] ">Noved  Africa was born out of a burning desire to solve a single problem, unemployability. We are a team of strong-willed individuals dedicated to equipping undergraduates and fresh graduates with valuable employable skills.</p>
					</div>

					<div className=" h-[354px] lg:w-[534px] sm:w-full lg:ml-auto ">
						<Image src={aboutImage} alt="about us" className=" w-full h-full object-cover rounded-[10px] " />
					</div>
				</div>
				<Image src={gradient} alt="dot grid" className=" absolute bottom-0 right-1 -z-10 " />
			</section>

			<section className=" bg-[#F0EFFB] md:py-20 lg:px-[100px] md:px-8 px-4 py-16 flex flex-col gap-12 lg:gap-14  ">
				<div className=" flex flex-col lg:max-w-[805px] text-center gap-3 md:gap-4 mx-auto  ">
					<h1 className=" lg:text-[32px] md:text-[28px] text-[24px] font-semibold   ">Why Noved  Africa?</h1>
					<p className=" lg:text-lg text-[#424242]/80 md:px-8 ">We deliver full spectrum resources to upskill students for employability purposes.  <br /> Our services will help achieve becoming a job creator and becoming employable after graduation among other things.</p>
				</div>

				<div className=" grid lg:grid-cols-2 md:grid-cols-1">
					<div className=" flex sm:flex-row flex-col lg:flex-wrap ">
						<Image src={dart} alt="dot grid" className=" lg:w-1/3 md:w-1/2 lg:h-full object-cover hidden md:block " />
						<Image src={dart2} alt="dot grid" className=" lg:w-1/3 md:w-1/2 md:max-w-1/2 w-full lg:h-full object-cover block md:hidden " />

						<div className=" px-6 py-8 flex flex-col gap-3 lg:w-2/3 md:w-1/2 min-h-[300px] bg-[#e1e3ea] ">
							<h1 className=" text-[28px] font-bold leading-9  ">Our Vision</h1>
							<p className=" lg:text-lg text-[16px] text-[#424242]/80 ">We deliver full spectrum resources to upskill students for employability purposes.</p>
						</div>
					</div>

					<div className=" flex lg:flex-row flex-col lg:flex-wrap sm:flex-row-reverse ">
						<Image src={plane} alt="dot grid" className=" lg:w-1/3 md:w-1/2 lg:h-full object-cover hidden md:block " />
						<Image src={plane2} alt="dot grid" className=" lg:w-1/3 md:w-1/2 w-full lg:h-full object-cover block md:hidden " />
						<div className=" px-6 py-8 flex flex-col gap-3 lg:w-2/3 md:w-1/2  min-h-[300px]  bg-[#e1e3ea]">
							<h1 className=" text-[28px] font-bold leading-9  ">Our Mission</h1>
							<p className=" lg:text-lg text-[16px] text-[#424242]/80 ">Our mission at Noved Africa is to empower African undergraduates and fresh graduates to become job-ready talents, entrepreneurs, and leaders by providing the right education, resources, opportunities, support, and platforms.</p>
						</div>
					</div>
				</div>
			</section>
			<section className=" lg:py-[120px] lg:px-[100px] md:py-11 md:px-8 py-16 px-4  ">


				<div className="">
					<p className=" text-sm text-[#4A43CB] font-medium " >OUR CORE VALUES</p>
					<h1 className=" font-semibold text-2xl sm:text-[28px] md:leading-10 lg:text-[32px] lg:leading-10 lg:w-1/2 pr-0 sm:pr-32 lg:pr-0  " >Our values are a way of living and creating, not just words.</h1>
				</div>


				<div className=" grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mt-20 mt-12 ">

					<div className=" lg:p-12 md:p-10 p-6 rounded-[10px] bg-[#FAF0F4] shadow-lg ">
						<p className=" md:h-16 md:w-16 h-14 w-14  rounded-full flex justify-center items-center bg-white text-center text-[24px] leading-[35px] font-bold mb-6 ">1</p>
						<h1 className=" lg:text-[40px] md:text-[32px] text-[28px] font-semibold  md:mb-4 mb-3 ">Community</h1>
						<p className=" lg:text-lg md:text-[16px] text-sm font-normal">We value the power of community and recognize the importance of collaboration and connection in achieving our mission. A supportive network to help and inspire you to achieve your goal.</p>
					</div>

					<div className="lg:p-12 md:p-10 p-6 rounded-[10px] bg-[#FAFFEB] shadow-lg ">
						<p className=" md:h-16 md:w-16 h-14 w-14  rounded-full flex justify-center items-center bg-white text-center text-[24px] leading-[35px] font-bold mb-6 ">2</p>
						<h1 className=" tlg:text-[40px] md:text-[32px] text-[28px] font-semibold  md:mb-4 mb-3 ">Diversity & Inclusion</h1>
						<p className=" lg:text-lg font-normal">We strive to create an environment that welcomes and embraces individuals from different backgrounds, cultures, and experiences. We believe diversity and inclusion leads to greater innovation and creativity.</p>
					</div>

					<div className="lg:p-12 md:p-10 p-6 rounded-[10px] bg-[#F0FAF9] shadow-lg ">
						<p className=" md:h-16 md:w-16 h-14 w-14 rounded-full flex justify-center items-center bg-white text-center text-[24px] leading-[35px] font-bold mb-6 ">3</p>
						<h1 className=" lg:text-[40px] md:text-[32px] text-[28px] font-semibold  md:mb-4 mb-3  ">Empowerment</h1>
						<p className=" lg:text-lg font-normal">Through our efficient empowerment system, we enable you to take control of your learning and professional development. We pride ourselves on providing the resources, tools, and guidance for social fitness and job readiness.</p>
					</div>

					<div className="lg:p-12 md:p-10 p-6 rounded-[10px] bg-[#FAFFEB] shadow-lg ">
						<p className=" md:h-16 md:w-16 h-14 w-14  rounded-full flex justify-center items-center bg-white text-center text-[24px] leading-[35px] font-bold mb-6 ">4</p>
						<h1 className=" lg:text-[40px] md:text-[32px] text-[28px] font-semibold  md:mb-4 mb-3  ">Fun</h1>
						<p className=" lg:text-lg font-normal">We are not just hard workers at Noved Africa, we’re also fun workers! We believe that work does not have to be boring, it’s okay to have a little fun. Afterall, all work and no play…</p>
					</div>
				</div>
			</section>



			<section className=" relative lg:py-[160px] md:py-[120px] py-32 lg:px-[100px] md:px-20 bg-[#F8F8F8;] overflow-hidden ">
				<Image src={bgbg} alt="dot grid" className=" absolute h-full top-0 -right-10 -z-10 " />
				<div className=" lg:max-w-[884px] md:max-w-[609px] mx-auto flex flex-col justify-center items-center text-center md:px-0 px-4  ">
					<h1 className=" lg:text-[56px] md:text-[40px] text-[36px]  font-semibold lg:leading-[67px] md:leading-[48px] leading-10 md:mb-4 mb-3  ">Join the Undergraduate Student Community</h1>
					<p className=" text-[#616161] " >The only procedure required to join our community is to fill the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!</p>

					<button className=" flex items-center  gap-2 bg-[#4A43CB] rounded-full text-white w-fit px-6 py-3 mt-12 ">
						Join the community
						<span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
						<path d="M3.83464 10.5013L17.168 10.5013M11.3346 4.66797L17.168 10.5013L11.3346 16.3346" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg></span>
					</button>
				</div>
			</section>

			<section className=" lg:px-[100px] md:px-8 px-4 lg:py-[120px] ">
				<div className=" md:mb-16 mb-10 ">
					<p className=" text-sm text-[#4A43CB] font-medium " >OUR PARTNERS</p>
					<h1 className=" font-semibold text-2xl md:text-[28px] md:leading-10 lg:text-[32px] lg:leading-10 lg:w-1/2 w-full  " >Organisations we have worked with to achieve our mission & vision.</h1>
				</div>
				<div className=" flex gap-6 overflow-auto scrollbar-hide ">

					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
					<div className=" h-[120px] w-[240px] rounded-[10px] bg-[#D9D9D9] shrink-0  "></div>
				</div>

			</section>
		</>
	)
};

export default OurStory;
