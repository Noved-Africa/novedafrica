import React from "react";
import Image from "next/image";
import { blogImage } from "@/assets";
import Link from "next/link";

const Blog = () => {
	return (
		<div className='bg-white pt-32'>
			<p className=' text-black lg:pl-[100px] md:pl-8 pl-4 '>
				Media / Noved Blog
			</p>
			<div className=' lg:max-w-[839px] lg:px-0 md:px-[74px] px-4 mt-[100px]  mx-auto text-black text-center '>
				<h1 className=' lg:text-[56px] text-4xl leading-[67px] font-bold md:mb-4 mb-3'>
					Unleash your curiosity, explore our insightful blog.
				</h1>
				<p className=' text-[#424242] lg:text-lg text-[16px] tracking-tight '>
					Immerse yourself in a diverse range of captivating topics, expert
					insights, and valuable resources on our blog, designed to enrich your
					knowledge and spark meaningful conversations.
				</p>
				<button className=' bg-[#4A43CB] text-white px-6 py-[13px] mt-10 mb-20 rounded-full font-bold '>
					Read our blog
				</button>
			</div>
			<div className=' flex px-[100px] pb-[100px] pt-[40px] gap-12  '>
				<div className=' relative lg:w-3/5'>
					<Image
						className=' rounded-2xl lg:max-w-2xl '
						src={blogImage}
						alt='Blog Image'
					/>
					<div className=' flex justify-between absolute bottom-0 rounded-b-md bg-white/20  py-6 px-4 left-0 right-0 '>
						<p className=' px-3 leading-6 text-sm font-medium text-center rounded-full '>
							Community
						</p>
						<p>12 Feb, 2045</p>
					</div>
				</div>
				<div className=' w-2/5 space-y-12 '>
					<div className=' border-l-2 border-[#4A43CB] pl-6 flex flex-col gap-2  '>
						<h1 className=' text-[#292929] text-[24px] font-bold leading-9 '>
							This is the blog spotlight heading 1 that would be at the top like
							this.
						</h1>
						<p className=' mb-4 text-[#424242]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
							posuere adipiscing coallis sit. Non, nunc adipiscing mi amet
							tempor dolor sit amet, consectetur adipiscing elit. Quis posu
							adipiscing coallis sit. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Quis posu adipiscing coallis sit.
						</p>
						<Link href={"/"} className=' text-[#4A43CB] '>
							Read this Article <span></span>{" "}
						</Link>
					</div>
					<div className=' flex flex-col gap-8 '>
						<h1 className='text-[#292929]  pl-6 border-l-2 border-[#C3C0EE] text-[24px] font-bold leading-9 '>
							This is the blog spotlight heading 2 that would be at the top like
							this.
						</h1>
						<h1 className='text-[#292929]  pl-6 border-l-2 border-[#C3C0EE] text-[24px] font-bold leading-9 '>
							This is the blog spotlight heading 3 that would be at the top like
							this.
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
