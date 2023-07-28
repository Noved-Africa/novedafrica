"use client";
import React from "react";
import Image from "next/image";
import { contactDetails } from "@/common/mock";
import ContactCard from "@/common/components/elements/ContactCard/ContactCard";
import { contactBg } from "@/assets";
import { bgMobile, bgTablet, bgDesktop } from "@/assets";
import { useForm, SubmitHandler } from "react-hook-form";
type FormValues = {
	name: string;
	email: string;
	message: string;
};

import { phone, mail, location } from "@/assets";
const Contact = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		// Perform form submission logic here (e.g., send data to a server)

		// Reset form fields
		reset();
	};
	return (
		<div className='  '>
			<div className='bg-white pt-32 bg-[bg-Mobile] '>
				<p className=' text-black lg:pl-[100px] md:pl-8 pl-4 '>
					Contact / Contact Us
				</p>
				<div className=' lg:max-w-[690px] lg:px-0 md:px-[74px] px-4 mt-[100px]  mx-auto text-black text-center '>
					<h1 className=' lg:text-[56px] text-4xl leading-[67px] font-bold md:mb-4 mb-3'>
						Get in touch with us
					</h1>
					<p className=' text-[#424242] lg:text-lg text-[16px] tracking-tight '>
						Need help? We are dedicated to providing exceptional customer
						service and are eager to assist you with any inquiries. Check our
						answers to the questions you have when you read our frequently asked
						questions.
					</p>
					<button className=' bg-[#4A43CB] text-white px-6 py-[13px] mt-10 mb-20 rounded-full font-bold '>
						Frequently Asked Questions
					</button>
				</div>
				<div className=' text-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center  gap-8 lg:px-[145px] md:px-[44px] px-8 '>
					<div className=' bg-[#E8E7F9] rounded-xl h-full w-full p-6 flex gap-4 '>
						<Image
							className=' justify-start self-start '
							src={phone}
							alt={"title"}
						/>
						<div className=' text-[#252165] '>
							<h2 className=' mb-1 text-lg font-semibold leading-7 tracking-[-0.036px]'>
								Location
							</h2>
							<p className=' text-[16px] font-normal leading-6  '>
								Obafemi Awolowo University, Ile-Ife, Osun state, Nigeria.
							</p>
						</div>
					</div>

					<div className=' bg-[#E8E7F9] rounded-xl h-full w-full p-6 flex gap-4 '>
						<Image
							className=' justify-start self-start '
							src={phone}
							alt={"title"}
						/>
						<div className=' text-[#252165] '>
							<h2 className=' mb-1 text-lg font-semibold leading-7 tracking-[-0.036px]'>
								Customer Care Number
							</h2>
							<p className=' text-[16px] font-normal leading-6  '>
								+234 903 415 6118
							</p>
						</div>
					</div>

					<div className='  bg-[#E8E7F9] lg:col-start-3  -mr-20 rounded-xl h-full w-full p-6 flex gap-4 '>
						<Image
							className=' justify-start self-start '
							src={phone}
							alt={"title"}
						/>
						<div className=' text-[#252165] '>
							<h2 className=' mb-1 text-lg font-semibold leading-7 tracking-[-0.036px]'>
								Support Email
							</h2>
							<p className=' text-[16px] font-normal leading-6  '>
								novedafrica@gmail.com
							</p>
						</div>
					</div>
				</div>
				<div className=' lg:px-[160px] text-black py-[120px] flex lg:flex-row md:flex-col-reverse justify-end '>
					<div className=' max-w-[500px] w-[500px] my-6 z-10 lg:-mr-[35%] lg:mt-6  md:-mt-36 rounded-xl shadow-lg bg-white ml-8 '>
						<form onSubmit={handleSubmit(onSubmit)} className=' p-8 '>
							<p className=' font-semibold text-[22px] leading-[33px] text-[#292929] mb-6  '>
								Send us a message!
							</p>
							<div className=' flex flex-col gap-1  '>
								<label className=' font-bold text-[16px]  ' htmlFor='name'>
									Full Name:
								</label>
								<input
									className=' p-4 border rounded-xl '
									placeholder='Enter your full name'
									type='text'
									id='name'
									{...register("name", { required: "Name is required" })}
								/>
								{errors.name && (
									<p className=' text- '>{errors.name.message}</p>
								)}
							</div>
							<div className=' flex flex-col gap-1 my-4 '>
								<label className=' font-bold text-[16px]  ' htmlFor='email'>
									Email Address:
								</label>
								<input
									className=' p-4 border rounded-xl '
									placeholder='Enter your email address'
									type='email'
									id='email'
									{...register("email", { required: "Email is required" })}
								/>
								{errors.email && (
									<p className=' text- '>{errors.email.message}</p>
								)}
							</div>
							<div className=' flex flex-col gap-1 '>
								<label className=' font-bold text-[16px]  ' htmlFor='email'>
									Subject:
								</label>
								<input
									className=' p-4 border rounded-xl '
									placeholder='Enter the subject of your mail'
									type='email'
									id='email'
									{...register("email", { required: "Email is required" })}
								/>
								{errors.email && (
									<p className=' text- '>{errors.email.message}</p>
								)}
							</div>
							<div className='flex flex-col gap-1 mt-4 ` '>
								<label className='font-bold text-[16px] ' htmlFor='message'>
									Message:
								</label>
								<textarea
									className=' p-4 border rounded-xl '
									id='message'
									placeholder='Description'
									{...register("message", {
										required: "Message is required",
									})}></textarea>
								{errors.message && (
									<p className=' text- '>{errors.message.message}</p>
								)}
							</div>

							{/* button  */}
							<button
								className=' text-white font-medium text-sm bg-[#4A43CB] w-full rounded-full mt-10 py-4 '
								type='submit'>
								Send message
							</button>
						</form>
					</div>
					<div className=' lg:max-w-4xl lg:h-[657px] shrink-0 rounded-xl  self-end '>
						<Image
							className=' h-full w-full '
							src={contactBg}
							alt={"Contact Page Background"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
