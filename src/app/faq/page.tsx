"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import FaqAccordion from "./FaqAccordion";

import { faq, search } from "@/assets";

const faqs = [
	{
		id: 1,
		category: "General",
		question: "What is Noved Africa?",
		answer:
			"Noved Africa is an initiative that aims at empowering undergraduates and fresh graduates. Our mission is to eliminate graduate unemployability. We are set out to educate undergraduates about their ability to equip themselves with skills necessary to create and secure jobs for themselves before and after graduation. Noved Africa serves as the ultimate space to realize your potential and access resources to help you grow. Our services help build you to become talented individuals and become a pro in your career, and business. We intend to close the gap between talents, campus and the industry.",
	},
	{
		id: 2,
		category: "General",
		question: "How do I benefit from Noved Africa?",
		answer:
			"You can contact support by sending an email to support@example.com.",
	},
	{
		id: 3,
		category: "General",
		question: "Do you offer courses?",
		answer:
			"You can contact support by sending an email to support@example.com.",
	},
	{
		id: 4,
		category: "General",
		question: "What makes Noved Africa unique?",
		answer:
			"You can contact support by sending an email to support@example.com.",
	},
	{
		id: 5,
		category: "Community",
		question: "Which payment methods do you accept?",
		answer: "We accept Visa, MasterCard, and PayPal.",
	},
	{
		id: 6,
		category: "Employability",
		question: "Which payment methods do you accept?",
		answer: "We accept Visa, MasterCard, and PayPal.",
	},
	{
		id: 7,
		category: "Events and Collaborations",
		question: "Which payment methods do you accept?",
		answer: "We accept Visa, MasterCard, and PayPal.",
	},
	// Add more FAQs as needed
];
const Faq = () => {
	return (
		<div className=' bg-white pt-32  '>
			<p className=' text-black lg:pl-[100px] md:pl-8 pl-4 '>Contact / FAQs</p>
			<div className=' lg:max-w-[800px] lg:px-0  md:px-[74px] px-4 mt-[100px]  mx-auto text-black text-center '>
				<h1 className=' lg:text-[56px]  text-4xl leading-[67px] font-semibold md:mb-4 mb-3'>
					Frequently Asked Questions
				</h1>
				<p className=' text-[#424242] max-w-lg mx-auto  lg:text-lg text-[16px] tracking-tight '>
					Discover answers to your most common inquiries. Reach out to us
					directly by sending us a message!
				</p>
				<button className=' bg-[#4A43CB] text-white px-6 py-[13px] mt-10 mb-20 rounded-full font-bold '>
					Send us a message{" "}
				</button>
			</div>
			<div className=' text-black items-center  lg:px-[100px] md:px-[44px] pb-[100px] px-8 '>
				<div className='  lg:px-20  bg-purple-800 rounded-xl flex items-center pr-[60px] '>
					<p className=' lg:text-[40px] md:text-[24px]  text-white w-1/2 font-semibold md:leading-[35px] lg:leading-[48px] '>
						Uncover the answers you seek with ease!
					</p>
					<Image src={faq} alt='FAQ Question' className=' h-full grow-0 ' />
				</div>
			</div>

			<div className=' bg-[#FFFADE] flex lg:flex-row flex-col lg:items-center justify-between lg:px-[100px] md:px-8 md:py-8 py-6   md:gap-6 gap-4  px-4 mb-16 w-full '>
				<p className=' font-medium lg:text-[22px] text-lg md:text-[20px] text-[#292929] '>
					Simplify our FAQ section with the search feature.
				</p>

				<form className=' flex lg:py-6 gap-3 w-full '>
					<div className=' flex gap-2 bg-white px-4 max-w-[264px] grow  w-full   rounded-full '>
						<Image src={search} alt='Search' />
						<input
							type='text'
							placeholder='What are you searching for?'
							className=' py-3 text-black w-full focus:outline-0 '
						/>
					</div>
					<button className=' bg-[#4A43CB] px-6 md:px-10 py-3 grow-0 shrink rounded-full  '>
						Search
					</button>
				</form>
			</div>

			<div className=' '>
				{/* <div className=' w-1/3 bg-[#fffade] p-8 '>
					<h1 className=' mb-6 font-bold text-[22px] leading-9 text-black '>
						Categories
					</h1>
					{
						<div className=' flex flex-col gap-1 '>
							{categories.map((category) => (
								<a
									key={category.id}
									href='#'
									className=' bg-purple-500 rounded-full font-medium text-[14px] px-6 py-3 leading-[19px] '>
									{category.title}
								</a>
							))}
						</div>
					}
				</div>
				<div className=" w-2/3 ">
					<div className=' pb-6 border-b border-b-gray-500 '>
						<div className=' mb-1  '>
							<h1 className=' mb-3 text-black '>What is Noved Africa?</h1>
							<p className=' text-[#424242] '>
								Noved Africa is a community of African students and
								professionals in the diaspora. We are a community of like-minded
								individuals who are passionate about the development of Africa.
								We are a community of African students and professionals in the
								diaspora. We are a community of like-minded individuals who are
								passionate about the development of Africa.
							</p>
						</div>
					</div>

					
				</div> */}

				<FaqAccordion faqs={faqs} />
			</div>
		</div>
	);
};

export default Faq;
