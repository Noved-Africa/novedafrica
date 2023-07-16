import React from "react";
import Image from "next/image";
import { contactCardProps } from "@/common/types/index";

const ContactCard = ({image, title, content }: contactCardProps) => {
	return (
		<div key={title} className=' bg-[#E8E7F9] rounded-xl h-full p-6 flex gap-4 '>
			<Image className=' justify-start self-start ' src={image} alt={title} />
			<div className=' text-[#252165] '>
				<h2 className=' mb-1 text-lg font-semibold leading-7 tracking-[-0.036px]'>
					{title}
				</h2>
				<p className=' text-[16px] font-normal leading-6  '>{content}</p>
			</div>
		</div>
	);
};

export default ContactCard;
