import React from "react";
import Image from "next/image";
import { blogImage } from "@/assets";
import { bgDesktop, bgMobile, bgTablet } from "@/assets";
import Link from "next/link";
import { SearchComponent } from "@/common/components";
import BlogImage from "./blogImage";
import BlogCard from "@/common/components/blogCard";

const Blog = () => {
	return (
		<div className=' lg:pt-32 pt-[90px] relative '>

			<Image src={bgDesktop} alt="Background Image" className=" object-contain object-center hidden lg:block absolute top-0 left-0 right-0  -z-10" />
			<Image src={bgTablet} alt="Background Image" className=" object-contain object-center hidden sm:block lg:hidden absolute top-0 -z-10" />
			<Image src={bgMobile} alt="Background Image" className=" object-contain object-center block sm:hidden absolute top-0 -z-10" />

			<p className=' text-black lg:pl-[100px] md:pl-8 pl-4 md:text-[16px] text-sm '>
				Media / Noved Blog
			</p>
			<div className=' w-full flex flex-col items-center   lg:max-w-[839px] lg:px-0 md:px-[74px] px-9 lg:mt-[100px] mt-10  mx-auto text-black text-center '>
				<h1 className=' lg:text-[56px] text-4xl lg:leading-[67px] text-[#292929] leading-10 font-semibold md:mb-4 mb-4'>
					Unleash your curiosity, explore our insightful blog.
				</h1>
				<p className=' text-[#424242] lg:text-lg text-[16px] lg:leading-7 leading-6 tracking-tight '>
					Immerse yourself in a diverse range of captivating topics, expert
					insights, and valuable resources on our blog, designed to enrich your
					knowledge and spark meaningful conversations.
				</p>
				<button className='  bg-[#4A43CB]  text-white px-6 py-[13px] mt-10 lg:mb-20 mb-[122px] rounded-full font-bold '>
					Read our blog
				</button>
			</div>

			<div className=" bg-white ">
				<SearchComponent text="Blog Spotlight: Explore our handpicked gems of inspiration." />
			</div>

			<div className=' bg-white lg:flex-row flex-col  flex lg:px-[100px] px-4 pb-[100px] pt-[40px] gap-12  '>
				<div className=' lg:w-3/5'>
					<BlogImage image={blogImage} category={"Community"} />
				</div>
				<div className=' lg:w-2/5 space-y-12 '>
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

			<div>


				<div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-[100px] px-4 gap-10 py-6 bg-white  ">
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
			</div>
		</div>
	);
};

export default Blog;
