import React from "react";
import "./footer.css";
import { SocialIcons, footerItems } from "./footerItems";
const Footer = () => {
	return (
		<footer className='footer-container'>
			{/* footer left  */}
			<div className=' space-y-16 '>
				<div className=''>
					<div className=' flex items-center mb-6 space-x-4'>
						<p className=' rounded-full bg-green-400 h-10 w-10'></p>
						<p className=' '>Noved Africa</p>
					</div>
					<p className='w-[328px] mb-10'>
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
				<p className=' text-[18px] font-bold '>
					2022 Build Up Africa Inc. All Rights Reserved.
				</p>
			</div>

			{/* footer right  */}
			<div>
				<div className=' gap-y-16 grid grid-cols-3 mb-16'>
					{footerItems.map((item, index) => (
						<div className='text-white space-y-6 ' key={index}>
							<h3 className=' text-2xl font-semibold  '>{item.title}</h3>
							<ul className=" space-y-4">
								{item.links.map((link, linkIndex) => (
									<li className=" font-medium text-[18px]" key={linkIndex}>
										<a href={link.url}>{link.text}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
