import React from "react";
import "./footer.css";
import { SocialIcons, footerItems } from "./footerItems";
import LogoImage from "../elements/logo/logoImage";
const Footer = () => {
	return (
		<footer className='footer-container'>
			{/* footer left  */}
			<div className=' lg:space-y-16 space-y-10 relative '>
				<div className=' md:space-y-8 space-y-6'>
					<div className=' flex items-center lg:mb-6 mb-6 space-x-4'>
						<LogoImage />
					</div>
					<p className='lg:w-[328px] md:text-sm leading-5 text-xs mb-10'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
						posuere adipiscing convallis.
					</p>

					<div className=' flex gap-4  '>
						{SocialIcons.map((item, index) => (
							<a href={item.link} key={index}>
								<img src={item.icon} alt='' />
							</a>
						))}
					</div>
				</div>
				<div className=' space-y-6'>
					{/* phone number */}
					<div className=' flex space-x-4'>
						<p>Give us a call: </p>
						<div className=' space-y-1'>
							<p className=' text-footerColor font-bold'>+234(0)1234567890</p>
							<p className=' text-footerColor font-bold'>+234(0)1234567890</p>
						</div>
					</div>

					{/* email support  */}
					<div className=' flex space-x-4'>
						<p>Email support:</p>
						<div className=' text-footerColor font-bold space-y-1'>
							<p>cooperatehomes@support.mail</p>
						</div>
					</div>
				</div>
				<p className=' text-[18px] pt-10 border-t-[0.1px] border-t-[#ccc] font-normal  hidden absolute bottom-0 lg:flex  '>
					2022 Build Up Africa Inc. All Rights Reserved.
				</p>
			</div>

			{/* footer right  */}
			<div>
				<div className=' gap-y-16 grid lg:grid-cols-3 md:grid-cols-4 grid-cols-2 mb-16'>
				

					<div className='text-white space-y-6 h-fit '>
						<h3 className=' text-2xl font-semibold  '>Products</h3>
						<ul className=' space-y-4'>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>U-Grad</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>U-Grad Academy</a>
							</li>
						</ul>
					</div>

					<div className='text-white space-y-6 col-start-2 '>
						<h3 className=' text-2xl font-semibold  '>Services</h3>
						<ul className=' space-y-4'>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Community</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Events</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Event Consult</a>
							</li>
						</ul>
					</div>

					<div className='text-white space-y-6 '>
						<h3 className=' text-2xl font-semibold  '>Media</h3>
						<ul className=' space-y-4'>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Event Photos</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Event Video</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>News</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Testimonials</a>
							</li>
						</ul>
					</div>

					<div className='text-white space-y-6 md:col-start-1 md:row-start-1 lg:col-start-1 lg:row-start-2 row-start-1 col-start-1 '>
						<h3 className=' text-2xl font-semibold  '>Company</h3>
						<ul className=' space-y-4'>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Our Story</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Careers</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>News</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Testimonials</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>BUA Webinars</a>
							</li>

							<li className=' font-medium text-[18px]'>
								<a href={"/"}>BUA Masterclass</a>
							</li>

							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Contact Us</a>
							</li>

							<li className=' font-medium text-[18px]'>
								<a href={"/"}>FAQs</a>
							</li>
						</ul>
					</div>

					<div className='text-white space-y-6 md:col-start-2 '>
						<h3 className=' text-2xl font-semibold  '>Legal</h3>
						<ul className=' space-y-4'>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Event Photos</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Event Video</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>News</a>
							</li>
							<li className=' font-medium text-[18px]'>
								<a href={"/"}>Testimonials</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
