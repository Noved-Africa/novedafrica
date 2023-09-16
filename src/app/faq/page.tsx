"use client";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import FaqAccordion from "./FaqAccordion";
import { SearchComponent } from "@/common/components";

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
			"You will get access to strategic engagements focused on building you to become socially fit graduates.  The strategic engagements include but are not limited to skill development, mentorship, accountability, personal development, and branding.",
	},

	{
		id: 3,
		category: "General",
		question: "Do you offer courses?",
		answer:
			"Noved Africa does not offer courses. However, our initiative U-grad does. U-grad is targeted at helping undergraduates realize their ability to start a career even before graduation.",
	},

	{
		id: 4,
		category: "General",
		question: "What makes NOVED Africa unique?",
		answer:
			"Our major distinctiveness is that our mission focuses on helping undergraduates realize their potential while on campus. We want to ensure that undergraduates can set their careers on track even before graduation.That might be through skill development, portfolio building, volunteering, internships, or even entry- level jobs.",
	},

	{
		id: 5,
		category: "Employability",
		question: "Will NOVED Africa offer me a job?",
		answer: "Noved Africa does not offer jobs.We can only guarantee that participation in our programs will help you increase your stakes of being fit and ready for global jobs.",
	},
	{
		id: 6,
		category: "Employability",
		question: "Can I apply to NOVED Africa?",
		answer: "Yes! You are welcome to apply to Noved Africa as an employee. We would be glad to have you on our team. ",
	},

	{
		id: 7,
		category: "Events and Collaborations",
		question: "How do I attend events?",
		answer: "Events dates and all other information are communicated across all Noved Africa social media platforms well before the events. ",
	},

	{
		id: 8,
		category: "Events and Collaborations",
		question: "Can I collaborate with NOVED Africa?",
		answer: "If your goals align with ours, then yes! For more inquiries on collaborations, feel free to reach out to us. Check the Contact Page.",
	},

	{
		id: 9,
		category: "Community",
		question: "Is there a special requirement needed to be a member?",
		answer: "There are no special requirements to be a part of Noved Africa. All you need to be is an undergraduate or a fresh graduate. We welcome all!",
	},

	{
		id: 10,
		category: "Community",
		question: "Do I have to pay to join?",
		answer: "Not at all! Being a member of the Noved Africa community comes at no cost at all. ",
	},

	{
		id: 11,
		category: "Community",
		question: "How do I join?",
		answer: "The only procedure required to join our community is to fill out the enrollment form. To do this, you can click on the ‘Join the community’ button. We cannot wait to have you!",
	},
	// Add more FAQs as needed
];
const Faq = () => {
	return (
		<div className=' bg-white lg:pt-[130px]  pt-[90px]   '>
			<p className=' text-black lg:pl-[100px] md:pl-8 pl-4 md:text-xs text-[10px] '>Contact / FAQs</p>
			<div className=' lg:max-w-[800px] lg:px-0  md:px-[74px] px-4 mt-[100px]  mx-auto text-black text-center '>
				<h1 className=' lg:text-[56px]  text-4xl leading-[67px] font-semibold md:mb-4 mb-3'>
					Frequently Asked Questions
				</h1>
				<p className=' text-[#424242] max-w-lg mx-auto  lg:text-lg text-[16px] tracking-tight '>
					Discover answers to your most common inquiries. Reach out to us
					directly by sending us a message!
				</p>
				<button className=' bg-[#4A43CB] text-white px-6 py-[13px] mt-10 mb-20 md:w-fit w-full rounded-full font-bold '>
					Send us a message
				</button>
			</div>
			<div className=' text-black items-center  lg:px-[100px] md:px-[44px] px-0 pb-10 md:pb-[80px] lg:pb-[100px] '>
				<div className='  lg:px-20 md:px-8 pl-4 bg-purple-800 md:rounded-xl flex justify-between items-center md:pr-[60px] '>
					<p className=' lg:text-[40px] md:text-[24px]  text-white w-1/2 font-semibold md:leading-[35px] lg:leading-[48px]'>
						Uncover the answers you seek with ease!
					</p>
					<Image
						src={faq}
						alt='FAQ Question'
						height={1000}
						width={1000}
						className=' md:h-full h-[182px] w-48 grow-0 '
					/>
				</div>
			</div>
			<div>

				<SearchComponent text={"Simplify our FAQ section with the search feature."} />
			</div>

			<div className=' lg:mt-16 mt-6 '>
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
